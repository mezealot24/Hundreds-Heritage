"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AutoUnderline from "@/components/ui/AutoUnderline";

const AboutSection = () => {
	const [showFullContent, setShowFullContent] = useState(false);

	const toggleContent = () => {
		setShowFullContent(!showFullContent);
	};

	return (
		<section className="relative w-full min-h-screen py-8 md:py-16 overflow-hidden lg:top-14 mt-[-2rem] md:mt-[-4rem]">
			{/* Content Container - เพิ่ม glass effect */}
			<div className="relative z-10 px-2 sm:px-4 py-6 sm:py-8 glass-card rounded-lg">
				{/* Desktop version - visible on md screens and up */}
				<div className="hidden md:flex justify-center items-center mb-16">
					<div className="relative w-full max-w-4xl h-40 lg:h-52">
						<Image
							src="/images/certificates.png"
							alt="Organic and Non-GMO Certificates"
							fill
							style={{ objectFit: "contain" }}
							sizes="(max-width: 768px) 0vw, (max-width: 1024px) 768px, 896px"
							priority
						/>
					</div>
				</div>

				{/* Mobile version - visible on small screens, hidden on md screens and up */}
				<div className="flex md:hidden justify-center items-center mb-8">
					<div className="relative w-full h-28 px-4">
						<Image
							src="/images/certificates.png"
							alt="Organic and Non-GMO Certificates"
							fill
							style={{ objectFit: "contain" }}
							sizes="100vw"
							priority
						/>
					</div>
				</div>

				{/* Background Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-10 md:mb-16"
				>
					<div className="container px-4 max-w-3xl mx-auto space-y-4 md:space-y-6">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-start mb-4 md:mb-8">
							<AutoUnderline
								as="span"
								className="font-semibold gold-shine-text"
							>
								Background
							</AutoUnderline>
						</h2>
						<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify">
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

						{showFullContent && (
							<>
								<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify">
									One of Thailand's most significant milestones in tea
									cultivation dates back to the reign of His Majesty King
									Bhumibol Adulyadej (Rama IX). Recognizing the potential of tea
									as a sustainable livelihood, His Majesty introduced the first
									tea plants to highland communities, encouraging them to
									cultivate tea as an alternative to opium farming and
									slash-and-burn agriculture. This royal initiative transformed
									lives, providing generations of farmers with a stable income
									while preserving the delicate balance of nature. Even today,
									many of these tea farms continue to honor sustainability by
									relying on clean hydropower energy, ensuring that the art of
									tea-making remains in harmony with the environment.
								</p>
								<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify">
									Hundreds Heritage holds deep gratitude for this royal
									benevolence and is devoted to uplifting highland communities
									and organic farmers. With a profound respect for Thailand's
									rich traditions, we strive to preserve and showcase the
									nation's distinctive cultural heritage and precious natural
									ingredients. Our mission is to share their remarkable essence
									with the world, ensuring their timeless value is recognized
									and celebrated across generations.
								</p>
								<div className="max-w-3xl mx-auto relative pt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
									<div className="sm:col-span-1">
										<img
											src="/images/logo_HH.svg"
											alt="Hundreds Heritage Logo"
											className="w-32 sm:w-48 opacity-80 mx-auto sm:mx-0"
										/>
									</div>
									<div className="sm:col-span-3 space-y-4">
										<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify">
											Hundreds Heritage is a tribute to well-being,
											authenticity, and inspiration. Our emblem, the peacock,
											symbolizes grace, wisdom, prosperity, auspiciousness, and
											longevity—values we infuse into every blend. We believe
											that true luxury lies in authenticity, and we are
											dedicated to offering a tea experience crafted with 100%
											of nature's purest ingredients, free from chemicals,
											artificial colors, and synthetic flavors, certified by
											USDA Organic standards.
										</p>
									</div>
								</div>
							</>
						)}

						<div className="text-center">
							<button
								onClick={toggleContent}
								className="mt-4 px-6 py-2 rounded-full btn-gold "
							>
								{showFullContent ? "Read Less" : "Read More"}
							</button>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center px-4"
				>
					<blockquote className="text-xl sm:text-2xl font-playfair gold-shine-text italic">
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
