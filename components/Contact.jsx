"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import Image from "next/image";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			await emailjs.send(
				"service_afxnb1o",
				"template_6izagbg",
				formData,
				"gXwzgYe7BIyW0Z-x4"
			);
			setSubmitStatus("Message sent successfully!");
			setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
		} catch (error) {
			setSubmitStatus("Failed to send message. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="bg-gradient-to-r from-secondary/50 to-secondary rounded-lg shadow-xl max-w-5xl mx-auto overflow-hidden">
			<div className="flex flex-col md:flex-row">
				{/* Left column - Logo and company info */}
				<div className="p-8 flex flex-col items-center justify-center md:w-2/5 bg-primary/5">
					<div className="mb-8 flex justify-center">
						{/* Replace with your actual logo */}
						<div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
							<h1 className="text-3xl font-bold text-primary">Logo</h1>
							{/* Uncomment this when you have a logo */}
							<Image
								src="/path-to-your-logo.png"
								alt="Hundreds Heritage Logo"
								width={150}
								height={150}
								className="rounded-full"
							/>
						</div>
					</div>

					<div className="text-center space-y-2">
						<p className="font-semibold text-xl">Blended & Branded by</p>
						<p className="text-lg">Greenrich Worldwide Company Limited</p>
						<p className="text-gray-600">
							Email: hundredsheritage.th@gmail.com
						</p>
					</div>

					<div className="mt-8 flex justify-center">
						<Image
							src="/path-to-your-line-qrcode.png"
							alt="Line QR Code"
							width={150}
							height={150}
							className="rounded-md shadow-sm"
						/>
					</div>
				</div>

				{/* Right column - Contact form */}
				<div className="p-8 md:w-3/5">
					<h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
					<p className="text-center mb-6 text-gray-600">
						Hundreds Heritage is crafted with 100% organic ingredients.
					</p>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<Input
								type="text"
								name="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleChange}
								required
								className="focus:ring-2 focus:ring-primary/50"
							/>
							<Input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleChange}
								required
								className="focus:ring-2 focus:ring-primary/50"
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<Input
								type="tel"
								name="phone"
								placeholder="TEL"
								value={formData.phone}
								onChange={handleChange}
								required
								className="focus:ring-2 focus:ring-primary/50"
							/>
							<Input
								type="text"
								name="subject"
								placeholder="Subject"
								value={formData.subject}
								onChange={handleChange}
								required
								className="focus:ring-2 focus:ring-primary/50"
							/>
						</div>
						<Textarea
							name="message"
							placeholder="Message"
							value={formData.message}
							onChange={handleChange}
							required
							className="min-h-[120px] focus:ring-2 focus:ring-primary/50"
						/>
						<Button
							type="submit"
							className="w-full hover:bg-primary/90 transition-colors"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<span className="flex items-center justify-center">
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Sending...
								</span>
							) : (
								"Submit"
							)}
						</Button>
					</form>

					{submitStatus && (
						<div
							className={`mt-4 p-3 rounded-md text-center ${
								submitStatus.includes("success")
									? "bg-green-100 text-green-800"
									: "bg-red-100 text-red-800"
							}`}
						>
							{submitStatus}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
