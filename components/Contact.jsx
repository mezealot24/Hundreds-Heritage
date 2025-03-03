"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
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
		<div id="contact-us" className="w-full py-16 bg-secondary">
			<section className="rounded-lg shadow-xl mx-auto max-w-5xl">
				{/* Contact Us heading and text - moved from right column */}
				<h2 className="text-xl md:text-2xl font-bold text-center mb-4 brand-heading gold-shine-text">
					Contact Us
				</h2>
				<div className="flex flex-col md:flex-row">
					{/* Left Column - Logo and Info */}
					<div className="p-6 md:p-8 flex flex-col items-center justify-center w-full md:w-2/5 bg-primary/5">
						{/* Logo */}
						<div className="mb-6 md:mb-8 flex justify-center w-32 md:w-48">
							<Image
								src="/images/logo_HH.svg"
								alt="Hundreds Heritage"
								width={150}
								height={150}
								className="w-full h-auto gold-shine-svg"
							/>
						</div>

						<p className="text-center mb-6 text-sm md:text-base">
							Hundreds Heritage is crafted with 100% organic ingredients,
							honoring nature&apos;s purest offerings, supporting local
							communities, and savoring the timeless wisdom of Thailand
						</p>

						{/* Company Info */}
						<div className="text-center space-y-2">
							<p className="font-semibold text-lg md:text-xl">
								Blended & Branded by
							</p>
							<p className="text-base md:text-lg">
								Greenrich Worldwide Company Limited
							</p>
							<p className="text-sm md:text-base">
								Email: hundredsheritage.th@gmail.com
							</p>
							<p className="text-sm md:text-base">www.hundreds-heritage.com</p>
						</div>

						{/* Order Here Section */}
						<div className="relative my-8">
							<div className="text-center">
								<p className="my-2 text-tea-text-secondary">ORDER HERE</p>
								<Image
									src="/images/line-qr.png"
									alt="Order QR Code"
									width={112}
									height={112}
									className="mx-auto"
								/>
							</div>
						</div>
					</div>

					{/* Right Column - Contact Form */}
					<div className="p-6 md:p-8 w-full md:w-3/5">
						<p className="text-center mb-6 font-bold text-lg">
							Thank you for savoring our blend.
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
									className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50"
								/>
								<Input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50"
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
									className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50"
								/>
								<Input
									type="text"
									name="subject"
									placeholder="Subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50"
								/>
							</div>

							<Textarea
								name="message"
								placeholder="Message"
								value={formData.message}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent min-h-[120px] text-tea-text-secondary placeholder-tea-text-secondary/50"
							/>

							<Button
								type="submit"
								className="w-full py-3 rounded-lg hover:-translate-y-1 bg-[#D4AF37] hover:bg-[#BF9B30] text-white font-medium"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<span className="flex items-center justify-center gap-2">
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
									<span className="flex items-center justify-center gap-2">
										<span>Submit</span>
										<i className="ti ti-send"></i>
									</span>
								)}
							</Button>
						</form>

						{/* Social Icons moved to right column */}
						<div className="flex justify-center space-x-4 md:space-x-6 mt-6">
							<a
								href="https://www.instagram.com/hundredsheritage_th"
								target="_blank"
								rel="noopener noreferrer"
								className="text-tea-text-secondary hover:text-primary transition-all hover:-translate-y-1"
							>
								<i className="ti ti-brand-instagram text-xl md:text-2xl"></i>
							</a>
							<a
								href="https://www.facebook.com/share/19QRjTRofu"
								target="_blank"
								rel="noopener noreferrer"
								className="text-tea-text-secondary hover:text-primary transition-all hover:-translate-y-1"
							>
								<i className="ti ti-brand-facebook text-xl md:text-2xl"></i>
							</a>
							<a
								href="https://lin.ee/Rxte6r9"
								target="_blank"
								rel="noopener noreferrer"
								className="text-tea-text-secondary hover:text-primary transition-all hover:-translate-y-1"
							>
								<i className="ti ti-brand-line text-xl md:text-2xl"></i>
							</a>
							<a
								href="https://tiktok.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-tea-text-secondary hover:text-primary transition-all hover:-translate-y-1"
							>
								<i className="ti ti-brand-tiktok text-xl md:text-2xl"></i>
							</a>
						</div>

						{submitStatus && (
							<div
								id="formStatus"
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
		</div>
	);
};

export default ContactUs;
