"use client";
import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import AutoUnderline from "@/components/ui/AutoUnderline";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(" ");
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.2),
			}
		);
	}, [scope.current]);
	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="gold-accent"
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};
	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4">
				<div className="gold-accent text-lg md:text-5xl leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};

const LoadingSkeleton = () => {
	return (
		<div className="site-section section-connector relative w-full min-h-screen overflow-hidden lg:top-14">
			<div className="relative z-10 px-2 sm:px-4 py-6 sm:py-8 glass-card rounded-lg">
				{/* Title skeleton */}
				<div className="text-center mb-16 md:mb-24">
					<Skeleton className="h-10 w-3/4 mx-auto" />
				</div>

				{/* Main Content skeleton */}
				<div className="container px-4 max-w-3xl mx-auto">
					<div className="mb-10 md:mb-16">
						{/* H2 Title skeleton */}
						<div className="text-center mb-8 md:mb-12">
							<Skeleton className="h-8 w-1/3 mx-auto" />
						</div>

						{/* Paragraph 1 skeleton - Image Left, Content Right */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12">
							<div className="md:w-1/3">
								<Skeleton className="w-full h-[300px] rounded-lg" />
							</div>
							<div className="md:w-2/3">
								<Skeleton className="h-6 w-1/3 mb-4" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-4/5" />
							</div>
						</div>

						{/* Paragraph 2 skeleton - Image Right, Content Left */}
						<div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 mb-12">
							<div className="md:w-1/3">
								<Skeleton className="w-full h-[300px] rounded-lg" />
							</div>
							<div className="md:w-2/3">
								<Skeleton className="h-6 w-1/3 mb-4" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-4/5" />
							</div>
						</div>

						{/* Paragraph 3 skeleton - Full Paragraph */}
						<div className="mb-12">
							<Skeleton className="h-4 w-full mb-2" />
							<Skeleton className="h-4 w-full mb-2" />
							<Skeleton className="h-4 w-full mb-2" />
							<Skeleton className="h-4 w-4/5" />
						</div>

						{/* Paragraph 4 skeleton - Left Picture, Right Full Paragraph */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10">
							<div className="md:w-1/4">
								<Skeleton className="w-32 sm:w-48 h-32 mx-auto sm:mx-0" />
							</div>
							<div className="md:w-3/4">
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-4/5" />
							</div>
						</div>
					</div>

					{/* Quote skeleton */}
					<div className="text-center px-4">
						<Skeleton className="h-6 w-3/4 mx-auto mb-2" />
						<Skeleton className="h-6 w-2/3 mx-auto mb-16" />
						{/* Certificates skeleton */}
						<Skeleton className="h-40 lg:h-52 w-full max-w-4xl mx-auto" />
					</div>
				</div>
			</div>
		</div>
	);
};

const AboutSection = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading or fetch data
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <LoadingSkeleton />;
	}

	return (
		<section className="site-section section-connector py-6 px-4 sm:p-6 md:py-10 md:px-8">
			{/* Content Container - glass effect */}
			<div className="relative z-10 px-2 sm:px-4 py-6 sm:py-8 glass-card rounded-lg">
				{/* Title with Animation */}
				<TextGenerateEffect
					words="Savor the essence of Siamese Wisdom"
					className="text-3xl uppercase sm:text-4xl md:text-5xl text-center mb-16 md:mt-[3rem]"
				/>

				{/* Main Content */}
				<div id="background" className="container px-4 max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="mb-10 md:mb-16"
					>
						{/* Desktop version - certificates */}
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
						{/* Mobile version*/}
						<div className="flex flex-col md:hidden justify-center items-center mb-8">
							<div className="relative w-screen h-[7rem]">
								<Image
									src="/images/hero-image.webp"
									alt="ingredients and tea leaves"
									fill
									style={{ objectFit: "cover" }}
									sizes="100vw"
								/>
							</div>
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
						{/* H2 Title */}
						<h2 className="text-3xl font-semibold gold-shine-text sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">
							Background
						</h2>

						{/* Paragraph 1 - Image Left, Content Right */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12">
							<div className="md:w-1/3">
								<Image
									src="/images/background-1.jpg"
									alt="Thai Tea Tradition"
									width={300}
									height={300}
									className="rounded-lg w-full h-auto"
								/>
							</div>
							<div className="md:w-2/3">
								<h2 className="text-xl sm:text-2xl mb-4">
									<AutoUnderline
										as="span"
										className="font-medium gold-shine-text"
									>
										Cultural Heritage
									</AutoUnderline>
								</h2>
								<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify">
									Hundreds Heritage is inspired by a passion to share Thailand’s
									rich cultural heritage of tea drinking—a tradition deeply
									rooted in centuries of wisdom and natural abundance. For
									hundreds of years, tea has been an integral part of Thai
									culture, with ancient tea trees still thriving in the misty
									highlands of the north. Beyond tea leaves, Thai people have
									long embraced nature’s gifts, crafting herbal infusions from
									local plants and aromatic ingredients. This tradition of
									blending herbs for both flavor and wellness is reflected in
									Thailand’s world-renowned cuisine, where dishes like Tom Yum
									transform food into both nourishment and a natural remedy.
								</p>
							</div>
						</div>

						{/* Paragraph 2 - Image Right, Content Left */}
						<div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 mb-12">
							<div className="md:w-1/3 md:-mt-[12rem]">
								<Image
									src="/images/tea-ingredients.jpg"
									alt="Royal Tea Initiative"
									width={300}
									height={300}
									className="rounded-lg w-full h-auto"
								/>
							</div>
							<div className="md:w-2/3">
								<h2 className="text-xl sm:text-2xl mb-4">
									<AutoUnderline
										as="span"
										className="font-medium gold-shine-text"
									>
										Royal Legacy
									</AutoUnderline>
								</h2>
								<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify">
									One of Thailand’s most significant milestones in tea
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
						<div className="mb-12">
							<h2 className="text-xl sm:text-2xl mb-4">
								<AutoUnderline
									as="span"
									className="font-medium gold-shine-text"
								>
									Tradition Empowered
								</AutoUnderline>
							</h2>
							<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary text-justify">
								Hundreds Heritage holds deep gratitude for this royal
								benevolence and is devoted to uplifting highland communities and
								organic farmers. With a profound respect for Thailand's rich
								traditions, we strive to preserve and showcase the nation's
								distinctive cultural heritage and precious natural ingredients.
								Our mission is to share their remarkable essence with the world,
								ensuring their timeless value is recognized and celebrated
								across generations.
							</p>
						</div>

						{/* Paragraph 4 - Left Picture, Right Full Paragraph */}
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
								<p className="text-sm sm:text-base md:text-lg text-tea-text-secondary leading-relaxed">
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

					{/* Quote */}
					{/* Modern quote display */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						className="relative py-10 my-12 bg-[#231c15] rounded-xl px-8"
					>
						<div className="absolute text-8xl opacity-10 left-4 top-2 font-serif text-primary/30">
							"
						</div>
						<blockquote className="text-xl sm:text-2xl text-center mx-auto max-w-2xl gold-shine-text italic">
							<p>
								Every sip of Hundreds Heritage is a voyage—one that honors the
								past, embraces the present, and enriches the future.
							</p>
						</blockquote>
						<div className="absolute text-8xl opacity-10 right-4 bottom-2 font-serif text-primary/30">
							"
						</div>
						<div className="w-16 h-1 bg-primary/40 mx-auto mt-6"></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
