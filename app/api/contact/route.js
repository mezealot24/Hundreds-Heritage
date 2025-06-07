// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

// Environment variables validation
const requiredEnvVars = {
	SMTP_HOST: process.env.SMTP_HOST,
	SMTP_PORT: process.env.SMTP_PORT,
	SMTP_USER: process.env.SMTP_USER,
	SMTP_PASS: process.env.SMTP_PASS,
	CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
	CONTACT_EMAIL_FROM: process.env.CONTACT_EMAIL_FROM,
};

// Check if all required environment variables are present
const missingEnvVars = Object.entries(requiredEnvVars)
	.filter(([key, value]) => !value)
	.map(([key]) => key);

if (missingEnvVars.length > 0) {
	console.error("Missing required environment variables:", missingEnvVars);
}

// Input validation function
function validateInput(data) {
	const errors = [];

	// Name validation
	if (
		!data.name ||
		typeof data.name !== "string" ||
		data.name.trim().length === 0
	) {
		errors.push("Name is required");
	} else if (data.name.length > 100) {
		errors.push("Name must be less than 100 characters");
	}

	// Email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (
		!data.email ||
		typeof data.email !== "string" ||
		!emailRegex.test(data.email)
	) {
		errors.push("Valid email address is required");
	} else if (data.email.length > 200) {
		errors.push("Email must be less than 200 characters");
	}

	// Phone validation (optional but if provided should be reasonable length)
	if (
		data.phone &&
		(typeof data.phone !== "string" || data.phone.length > 20)
	) {
		errors.push("Phone number must be less than 20 characters");
	}

	// Subject validation
	if (
		!data.subject ||
		typeof data.subject !== "string" ||
		data.subject.trim().length === 0
	) {
		errors.push("Subject is required");
	} else if (data.subject.length > 200) {
		errors.push("Subject must be less than 200 characters");
	}

	// Message validation
	if (
		!data.message ||
		typeof data.message !== "string" ||
		data.message.trim().length === 0
	) {
		errors.push("Message is required");
	} else if (data.message.length > 2000) {
		errors.push("Message must be less than 2000 characters");
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
}

// Sanitize input to prevent injection attacks
function sanitizeInput(input) {
	return input
		.replace(/[<>]/g, "") // Remove potential HTML tags
		.replace(/javascript:/gi, "") // Remove javascript: protocols
		.replace(/on\w+=/gi, "") // Remove event handlers
		.trim();
}

// Create reusable transporter
function createTransporter() {
	if (missingEnvVars.length > 0) {
		throw new Error(
			`Missing environment variables: ${missingEnvVars.join(", ")}`
		);
	}

	return nodemailer.createTransporter({
		host: requiredEnvVars.SMTP_HOST,
		port: parseInt(requiredEnvVars.SMTP_PORT),
		secure: parseInt(requiredEnvVars.SMTP_PORT) === 465, // true for 465, false for other ports
		auth: {
			user: requiredEnvVars.SMTP_USER,
			pass: requiredEnvVars.SMTP_PASS,
		},
		// Additional security options
		tls: {
			rejectUnauthorized: true,
			minVersion: "TLSv1.2",
		},
	});
}

// Simple rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map();

function checkRateLimit(ip, limit = 5, windowMs = 60000) {
	const now = Date.now();
	const userLimit = rateLimitStore.get(ip);

	if (!userLimit || now > userLimit.resetTime) {
		rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
		return false; // Not rate limited
	}

	if (userLimit.count >= limit) {
		return true; // Rate limited
	}

	userLimit.count++;
	return false; // Not rate limited
}

export async function POST(request) {
	try {
		// Get client IP for rate limiting
		const headersList = headers();
		const forwardedFor = headersList.get("x-forwarded-for");
		const clientIP =
			forwardedFor?.split(",")[0] || headersList.get("x-real-ip") || "unknown";

		// Apply rate limiting
		if (checkRateLimit(clientIP)) {
			return NextResponse.json(
				{
					status: "error",
					message: "Too many requests. Please try again later.",
				},
				{ status: 429 }
			);
		}

		// Parse request body
		let body;
		try {
			body = await request.json();
		} catch (parseError) {
			return NextResponse.json(
				{
					status: "error",
					message: "Invalid request format",
				},
				{ status: 400 }
			);
		}

		// Validate input
		const validation = validateInput(body);
		if (!validation.isValid) {
			return NextResponse.json(
				{
					status: "error",
					message: validation.errors.join(", "),
				},
				{ status: 400 }
			);
		}

		// Sanitize inputs
		const sanitizedData = {
			name: sanitizeInput(body.name),
			email: sanitizeInput(body.email),
			phone: body.phone ? sanitizeInput(body.phone) : "",
			subject: sanitizeInput(body.subject),
			message: sanitizeInput(body.message),
		};

		// Create transporter
		const transporter = createTransporter();

		// Verify transporter configuration
		try {
			await transporter.verify();
		} catch (verifyError) {
			console.error("SMTP configuration error:", verifyError);
			return NextResponse.json(
				{
					status: "error",
					message: "Email service temporarily unavailable",
				},
				{ status: 503 }
			);
		}

		// Email content
		const mailOptions = {
			from: `"${sanitizedData.name}" <${requiredEnvVars.CONTACT_EMAIL_FROM}>`,
			to: requiredEnvVars.CONTACT_EMAIL_TO,
			replyTo: sanitizedData.email,
			subject: `Contact Form: ${sanitizedData.subject}`,
			text: `
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || "Not provided"}
Subject: ${sanitizedData.subject}

Message:
${sanitizedData.message}

---
This message was sent from the contact form on hundreds-heritage.com
IP Address: ${clientIP}
Timestamp: ${new Date().toISOString()}
      `,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #945028;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${
							sanitizedData.email
						}">${sanitizedData.email}</a></p>
            <p><strong>Phone:</strong> ${
							sanitizedData.phone || "Not provided"
						}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #945028; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          
          <div style="font-size: 12px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p>This message was sent from the contact form on hundreds-heritage.com</p>
            <p>IP: ${clientIP} | Time: ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		// Log successful submission (without sensitive data)
		console.log(
			`Contact form submission successful from ${sanitizedData.email} at ${clientIP}`
		);

		return NextResponse.json({
			status: "success",
			message:
				"Your message has been sent successfully. We will get back to you soon!",
		});
	} catch (error) {
		console.error("Contact form error:", error);

		// Don't expose internal errors to client
		return NextResponse.json(
			{
				status: "error",
				message: "An unexpected error occurred. Please try again later.",
			},
			{ status: 500 }
		);
	}
}

// Handle other HTTP methods
export async function GET() {
	return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
	return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
	return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
