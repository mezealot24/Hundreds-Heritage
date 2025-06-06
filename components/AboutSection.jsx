"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// Import separated components
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { CertificateDisplay } from "@/components/About/CertificateDisplay";

const AboutSection = () => {
	const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
	const certificateRef = useRef(null);

	useEffect(() => {
		if (!certificateRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;

				// Hide certificate when it's 70% scrolled past
				if (entry.intersectionRatio <= 0.3) {
					setIsBackgroundVisible(true);
				} else {
					setIsBackgroundVisible(false);
				}
			},
			{
				threshold: [0, 0.1, 0.2, 0.3, 0.7, 1.0], // Multiple thresholds for smoother transitions
				rootMargin: "0px 0px -10% 0px", // Adjust the bottom margin to control when the effect triggers
			}
		);

		observer.observe(certificateRef.current);

		return () => {
			if (certificateRef.current) {
				observer.unobserve(certificateRef.current);
			}
		};
	}, []);

	return (
		<section className="h-max w-full md:min-h-[calc(100vh-110px-88px)]">
			{/* Title with Animation - Now centered by default */}
			<TextGenerateEffect
				words="Savor the essence of Siamese Wisdom"
				className="uppercase gold-shine-text text-center my-8 sm:my-10 md:my-12 lg:my-16"
				textAlign="center"
			/>

			{/* Desktop version */}
			<div className="hidden md:flex justify-center items-center w-full h-full mb-0">
				<div className="relative flex-col w-full flex space-y-16">
					{/* Hero Image Column - Increased height */}
					<div className="w-full relative h-[30rem] lg:h-[40rem]">
						<Image
							src="/images/hero-image-lg.png"
							alt="ingredients and tea leaves"
							fill
							style={{ objectFit: "cover" }}
							sizes="100vw"
						/>
					</div>
					{/* Top Certificate for Desktop - ซ่อน เมื่อเลื่อนผ่าน certificate ไปแล้ว 70% */}
					<div
						ref={certificateRef}
						className={`transition-opacity duration-700 ${
							isBackgroundVisible ? "opacity-0" : "opacity-100"
						} mb-20 md:mb-28 lg:mb-40`}
					>
						<CertificateDisplay
							className="md:h-20 lg:h-24 mb-20 md:mb-28 lg:mb-40"
							size="normal"
						/>
					</div>
				</div>
			</div>

			{/* Mobile version*/}
			<div className="flex flex-col md:hidden justify-center items-center mb-8 space-y-4">
				<div className="relative w-screen h-[20rem]">
					<Image
						src="/images/hero-image.webp"
						alt="ingredients and tea leaves"
						fill
						style={{ objectFit: "cover" }}
						sizes="100vw"
						className="rounded-lg shadow-md"
					/>
				</div>

				<CertificateDisplay size="normal" />
			</div>

			<div className="relative md:px-4 py-6 sm:py-8 rounded-lg">
				{/* Main Content */}
				<section
					id="background"
					className="w-full h-auto pt-6 lg:pt-12 max-w-7xl mx-auto"
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="mb-10 md:mb-16"
					>
						{/* H2 Title */}
						<h2 className="text-3xl font-semibold gold-shine-text sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">
							Background
						</h2>
						{/* Paragraph 1- Full Paragraph */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12">
							<div className="w-full px-4">
								<h2 className="text-xl sm:text-2xl mb-4 font-medium gold-shine-text">
									Cultural Heritage
								</h2>
								<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify indent-8">
									Hundreds Heritage is inspired by a passion to share Thailand's
									rich cultural heritage of tea drinking—a tradition deeply
									rooted in centuries of wisdom and natural abundance. For
									hundreds of years, tea has been an integral part of Thai
									culture, with ancient tea trees still thriving in the misty
									highlands of the north. Beyond tea leaves, Thai people have
									long embraced nature's gifts, crafting herbal infusions from
									local plants and aromatic ingredients. This tradition of
									blending herbs for both flavor and wellness is reflected in
									Thailand's world-renowned cuisine, where dishes like Tom Yum
									transform food into both nourishment and a natural remedy.
								</p>
							</div>
						</div>

						{/* Paragraph 2 - Full Paragraph */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12">
							<div className="w-full px-4">
								<h2 className="text-xl sm:text-2xl mb-4 font-medium gold-shine-text">
									Royal Legacy
								</h2>
								<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify indent-8">
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
							</div>
						</div>

						{/* Paragraph 3 - Full Paragraph */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12">
							<div className="w-full px-4">
								<h2 className="text-xl sm:text-2xl mb-4 font-medium gold-shine-text">
									Tradition Empowered
								</h2>
								<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify indent-8">
									Hundreds Heritage holds deep gratitude for this royal
									benevolence and is devoted to uplifting highland communities
									and organic farmers. With a profound respect for Thailand's
									rich traditions, we strive to preserve and showcase the
									nation's distinctive cultural heritage and precious natural
									ingredients. Our mission is to share their remarkable essence
									with the world, ensuring their timeless value is recognized
									and celebrated across generations.
								</p>
							</div>
						</div>

						{/* Paragraph 4 */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10 h-auto">
							<div className="md:w-1/2 w-full flex justify-center items-center h-auto">
								<Image
									src="/images/logo_section.png"
									alt="Hundreds Heritage Logo"
									width={450}
									height={450}
									className="object-contain w-full h-auto"
								/>
							</div>
							<div className="md:w-1/2 w-full flex items-center">
								<p className="text-sm sm:text-base px-4 md:text-lg text-tea-text-secondary leading-relaxed text-justify indent-8">
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
					</motion.div>

					{/* Modern quote display */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						className="relative my-8 rounded-xl px-8"
					>
						<blockquote className="text-xl sm:text-2xl text-center mx-auto max-w-2xl gold-shine-text italic">
							<p>
								Every sip of Hundreds Heritage is a voyage—one that honors the
								past, embraces the present, and enriches the future.
							</p>
						</blockquote>

						<div className="w-16 h-1 bg-secondary/80 mx-auto mt-6"></div>
					</motion.div>

					{/* Bottom Certificate - Using flex column for spacing */}
					<div className="flex flex-col items-center mb-8">
						<CertificateDisplay className="h-8" size="small" />
					</div>
				</section>
			</div>
		</section>
	);
};

export default AboutSection;
