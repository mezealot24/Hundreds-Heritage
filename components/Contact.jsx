"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { SocialIcons } from "@/components/Header/SocialIcons";

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
			const response = await fetch(
				"https://hundreds-heritage.com/send-email.php",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams(formData).toString(),
				}
			);

			const result = await response.json();
			if (result.status === "success") {
				setSubmitStatus("Message sent successfully!");
				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});
			} else {
				setSubmitStatus("Failed to send message. Please try again later.");
			}
		} catch (error) {
			setSubmitStatus("Failed to send message. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div id="contact-us">
			{/* Desktop Section */}
			<div className="hidden md:block">
				<section className="rounded-lg mx-auto max-w-5xl pt-12">
					<h2 className="text-3xl font-semibold gold-shine-text md:text-5xl text-center mb-12">
						Contact Us
					</h2>
					<div className="flex flex-row">
						{/* Left Column - Logo and Info */}
						<div className="p-6 flex flex-col items-center w-full md:w-2/5">
							{/* Moved the logo higher by adding negative margin-top */}
							<div className="w-32 md:w-48 mb-6">
								<Image
									src="/images/logo_HH.svg"
									alt="Hundreds Heritage"
									width={200}
									height={200}
									className="w-full h-auto gold-shine-svg"
								/>
							</div>
							<div className="text-center space-y-2">
								<p className="font-semibold text-center mb-4 text-lg md:text-xl">
									Blended & Branded by
								</p>
								<p className="text-base md:text-lg">
									Greenrich Worldwide Company Limited
								</p>
								<p className="text-sm md:text-base">
									Email: hundredsheritage.th@gmail.com
								</p>
								<p className="text-sm md:text-base">
									www.hundreds-heritage.com
								</p>
							</div>
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
							<div className="flex justify-center space-x-4 md:space-x-6 md:mt-8">
								<SocialIcons />
							</div>
						</div>

						{/* Right Column - Contact Form */}
						<div className="p-6 md:p-8 w-full md:w-3/5 bg-background/50">
							<p className="my-8 text-md align-middle indent-8 text-justify">
								Handpicked and handcrafted with 100% organic herbs, botanicals,
								and tea leaves, HUNDREDS HERITAGE honors nature's purest
								offerings while supporting local communities and prioritizing
								sustainability. With every sip, immerse yourself in timeless
								wisdom and savor the harmonious blend of inspiration,
								meaningfulness, and a gentle whisper of luxury. May your day be
								filled with wellness, and may happiness flourish within you.
							</p>
							<h2 className="text-center mb-6 font-bold text-lg gold-shine-text">
								Thank you for savoring our blends.
							</h2>

							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="flex gap-4">
									<Input
										type="text"
										name="name"
										placeholder="Name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 bg-accent/90 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50"
									/>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Input
										type="email"
										name="email"
										placeholder="Email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 bg-accent/90 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50"
									/>
									<Input
										type="tel"
										name="phone"
										placeholder="TEL"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-2 bg-accent/90 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50"
									/>
								</div>
								<div className="flex gap-4">
									<Input
										type="text"
										name="subject"
										placeholder="Subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 bg-accent/90 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50"
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
									className="w-full py-3 rounded-lg hover:-translate-y-1 bg-[#945028] hover:bg-[#5a3b14] text-white font-medium"
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

			{/* Mobile Section */}
			<div className="md:hidden block w-full py-8 bg-background">
				<section className="flex flex-col items-center px-4 sm:px-6">
					<h2 className="text-3xl font-semibold gold-shine-text text-center mb-8">
						Contact Us
					</h2>
					<div className="mb-6 flex justify-center w-32">
						<Image
							src="/images/logo_HH.svg"
							alt="Hundreds Heritage"
							width={150}
							height={150}
							className="w-full h-auto gold-shine-svg"
						/>
					</div>
					<div className="text-center mb-6">
						<p className="mb-6 text-base leading-relaxed px-4 text-justify">
							Handpicked and handcrafted with 100% organic herbs, botanicals,
							and tea leaves, HUNDREDS HERITAGE honors nature's purest offerings
							while supporting local communities and prioritizing
							sustainability. With every sip, immerse yourself in timeless
							wisdom and savor the harmonious blend of inspiration,
							meaningfulness, and a gentle whisper of luxury. May your day be
							filled with wellness, and may happiness flourish within you.
						</p>
						<p className="my-6 font-bold text-lg gold-shine-text">
							Thank you for savoring our blends.
						</p>
					</div>
					<div className="text-center space-y-2 mb-6">
						<p className="mb-3 text-base font-medium">Blended & Branded by</p>
						<p className="text-base">Greenrich Worldwide Company Limited</p>
						<p className="text-sm">Email: hundredsheritage.th@gmail.com</p>
						<p className="text-sm">www.hundreds-heritage.com</p>
					</div>
					<div className="relative my-6">
						<div className="text-center">
							<p className="mb-3 text-tea-text-secondary font-medium">
								ORDER HERE
							</p>
							<Image
								src="/images/line-qr.png"
								alt="Order QR Code"
								width={140}
								height={140}
								className="mx-auto"
							/>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="w-full space-y-6 px-4 mt-8">
						<Input
							type="text"
							name="name"
							placeholder="Name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 bg-accent/90 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50 text-base"
						/>
						<Input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 bg-accent/90 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50 text-base"
						/>
						<Input
							type="tel"
							name="phone"
							placeholder="TEL"
							value={formData.phone}
							onChange={handleChange}
							className="w-full px-4 py-3 bg-accent/90 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50 text-base"
						/>
						<Input
							type="text"
							name="subject"
							placeholder="Subject"
							value={formData.subject}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 bg-accent/90 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-tea-text-secondary placeholder-tea-text-secondary/50 text-base"
						/>
						<Textarea
							name="message"
							placeholder="Message"
							value={formData.message}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent min-h-[150px] text-tea-text-secondary placeholder-tea-text-secondary/50 text-base"
						/>
						<Button
							type="submit"
							className="w-full py-4 rounded-lg hover:-translate-y-1 bg-[#945028] hover:bg-[#5a3b14] text-white font-medium text-lg mt-4"
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

					<div className="flex justify-center space-x-4 mt-6">
						<SocialIcons />
					</div>

					{submitStatus && (
						<div
							id="formStatus"
							className={`mt-4 p-3 rounded-md text-center w-full ${
								submitStatus.includes("success")
									? "bg-green-100 text-green-800"
									: "bg-red-100 text-red-800"
							}`}
						>
							{submitStatus}
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default ContactUs;
