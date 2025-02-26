"use client";
import React from "react";
import { motion } from "framer-motion";
import AutoUnderline from "@/components/ui/AutoUnderline";

const AboutSection = () => {
	return (
		<section className="relative w-full min-h-screen py-24 overflow-hidden">
			{/* Pattern Background - ปรับให้เต็มพื้นที่ */}
			<div className="fixed inset-0 w-full h-full ">
				<img
					src="/pattern.svg"
					alt="Pattern Background"
					className="w-full h-full object-cover opacity-20 -z-10"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						objectFit: "cover",
						zIndex: -10,
					}}
				/>
			</div>

			{/* Content Container - เพิ่ม glass effect */}
			<div className="relative z-10 px-4 py-8 glass-card rounded-lg ">
				<h2 className="text-4xl font-playfair text-center mb-16">
					<AutoUnderline as="span" className="font-semibold gold-shine-text">
						Savor the Essence of Siames Wisdom
					</AutoUnderline>
				</h2>

				{/* Certificates for Large Screens */}
				<div className="hidden md:flex justify-center items-center gap-8 mb-16 ">
					{[...Array(5)].map((_, index) => (
						<div
							key={index}
							className={`relative ${
								index === 2 ? "scale-125 z-10" : "scale-100"
							}`}
						>
							<div
								className="w-24 h-24 rounded-full bg-primary/20 border border-primary/30 gold-shine-svg"
								style={{
									background:
										"linear-gradient(45deg, rgba(116, 104, 53, 0.2), rgba(164, 137, 87, 0.3))",
								}}
							/>
						</div>
					))}
				</div>

				{/* Certificates for Mobile Screens */}
				<div className="flex md:hidden justify-center items-center gap-4 mb-16">
					{[...Array(5)].map((_, index) => (
						<div
							key={index}
							className={`relative ${
								index === 2 ? "scale-125 z-10" : "scale-100"
							}`}
						>
							<div
								className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 gold-shine-svg"
								style={{
									background:
										"linear-gradient(45deg, rgba(116, 104, 53, 0.2), rgba(164, 137, 87, 0.3))",
								}}
							/>
						</div>
					))}
				</div>

				{/* Background Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<div className="container max-w-3xl mx-auto space-y-6 text-lg text-tea-text-secondary">
						<h2 className="container mx-auto text-4xl font-playfair text-start mb-8">
							<AutoUnderline
								as="span"
								className="font-semibold gold-shine-text"
							>
								Background
							</AutoUnderline>
						</h2>
						<p>
							Hundreds Heritage is inspired by a passion to share Thailand's
							rich cultural heritage of tea drinking—a tradition deeply rooted
							in centuries of wisdom and natural abundance. For hundreds of
							years, tea has been an integral part of Thai culture, with ancient
							tea trees still thriving in the misty highlands of the north.
							Beyond tea leaves, Thai people have long embraced nature's gifts,
							crafting herbal infusions from local plants and aromatic
							ingredients. This tradition of blending herbs for both flavor and
							wellness is reflected in Thailand's world-renowned cuisine, where
							dishes like Tom Yum transform food into both nourishment and a
							natural remedy.
						</p>
						<p>
							One of Thailand's most significant milestones in tea cultivation
							dates back to the reign of His Majesty King Bhumibol Adulyadej
							(Rama IX). Recognizing the potential of tea as a sustainable
							livelihood, His Majesty introduced the first tea plants to
							highland communities, encouraging them to cultivate tea as an
							alternative to opium farming and slash-and-burn agriculture. This
							royal initiative transformed lives, providing generations of
							farmers with a stable income while preserving the delicate balance
							of nature. Even today, many of these tea farms continue to honor
							sustainability by relying on clean hydropower energy, ensuring
							that the art of tea-making remains in harmony with the
							environment.
						</p>
						<p>
							Hundreds Heritage holds deep gratitude for this royal benevolence
							and is devoted to uplifting highland communities and organic
							farmers. With a profound respect for Thailand's rich traditions,
							we strive to preserve and showcase the nation's distinctive
							cultural heritage and precious natural ingredients. Our mission is
							to share their remarkable essence with the world, ensuring their
							timeless value is recognized and celebrated across generations.
						</p>
						<div className="max-w-3xl mx-auto relative pt-4 ">
							<img
								src="/images/logo_HH.svg"
								alt="Hundreds Heritage Logo"
								className=" float-left mr-8 mb-12 w-48 opacity-80 "
							/>
							<div className="space-y-6 text-lg text-tea-text-secondary">
								<p>
									Hundreds Heritage is a tribute to well-being, authenticity,
									and inspiration. Our emblem, the peacock, symbolizes grace,
									wisdom, prosperity, auspiciousness, and longevity—values we
									infuse into every blend. We believe that true luxury lies in
									authenticity, and we are dedicated to offering a tea
									experience crafted with 100% of nature's purest ingredients,
									free from chemicals, artificial colors, and synthetic flavors,
									certified by USDA Organic standards.
								</p>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<blockquote className="text-2xl font-playfair gold-shine-text italic">
						<p delay={0.4}>
							Every sip of Hundreds Heritage is a voyage—one that honors the
							past, embraces the present, and enriches the future.
						</p>
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
