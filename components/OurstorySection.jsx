"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AutoUnderline from "@/components/ui/AutoUnderline";

const OurStorySection = () => {
	const [activeYear, setActiveYear] = useState(2018);

	const timelineEvents = [
		{
			year: 2018,
			title: "The Discovery",
			description:
				"The journey begins in the highlands of northern Thailand, where we first discovered the ancient tea trees and communities preserving centuries-old traditions.",
			image: "/images/timeline/2018.jpg",
		},
		{
			year: 2020,
			title: "The First Collection",
			description:
				"Our first collection of organic Thai tea blends is introduced, celebrating the unique flavors and wisdom of traditional recipes.",
			image: "/images/timeline/2020.jpg",
		},
		{
			year: 2022,
			title: "Expanding Partnerships",
			description:
				"Hundreds Heritage expands partnerships with highland farming communities, establishing sustainable cultivation practices and fair trade relationships.",
			image: "/images/timeline/2022.jpg",
		},
		{
			year: 2024,
			title: "Global Vision",
			description:
				"Our vision grows globally, sharing Thailand's tea heritage with the world while continuing to honor and support the communities that make it possible.",
			image: "/images/timeline/2024.jpg",
		},
	];

	const founderStoryImages = [
		"/images/founder-story-1.jpg",
		"/images/founder-story-2.jpg",
		"/images/founder-story-3.jpg",
	];

	// Image fallback function
	const handleImageError = (e) => {
		e.target.onerror = null;
		e.target.src =
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0eee6'/%3E%3Cpath d='M30,40 L70,40 L70,60 L30,60 Z' fill='%23d1c7a3'/%3E%3Ctext x='50' y='55' font-family='Arial' font-size='10' text-anchor='middle' fill='%23746835'%3EImage%3C/text%3E%3C/svg%3E";
	};

	// Parallax effect for decorative elements
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="relative w-full py-20 md:py-32 overflow-hidden">
			{/* Decorative Background Elements */}
			<div
				className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
				style={{
					backgroundImage: "url('/images/tea-leaf-pattern.svg')",
					backgroundSize: "cover",
					transform: `translateY(${scrollY * 0.1}px) rotate(${
						scrollY * 0.02
					}deg)`,
				}}
			></div>
			<div
				className="absolute bottom-40 left-0 w-80 h-80 opacity-5 pointer-events-none"
				style={{
					backgroundImage: "url('/images/mountains-outline.svg')",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					transform: `translateY(${-scrollY * 0.05}px)`,
				}}
			></div>

			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
				className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-24 text-center"
			>
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair mb-8">
					<span className="block gold-shine-text">Our Journey through</span>
					<span className="block text-5xl sm:text-6xl md:text-7xl gold-gradient-text font-bold">
						Thai Tea Heritage
					</span>
				</h1>

				<p className="max-w-3xl mx-auto text-lg md:text-xl text-tea-text-secondary font-light leading-relaxed">
					A story of discovery, tradition, and a deep respect for the ancient
					wisdom of Siamese tea culture.
				</p>

				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="mt-16 flex justify-center"
				>
					<div className="h-16 w-0.5 bg-gradient-to-b from-primary/80 to-primary/10"></div>
				</motion.div>
			</motion.div>

			{/* Interactive Timeline */}
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 mb-20">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-3xl sm:text-4xl font-playfair text-center mb-16"
				>
					<AutoUnderline as="span" className="gold-shine-text">
						Our Timeline
					</AutoUnderline>
				</motion.h2>

				{/* Year Selection */}
				<div className="flex justify-between items-center mb-12 relative">
					<div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5 -translate-y-1/2"></div>

					{timelineEvents.map((event, index) => (
						<motion.button
							key={event.year}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							onClick={() => setActiveYear(event.year)}
							className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
								activeYear === event.year
									? "bg-primary/20 border-2 border-primary/50"
									: "bg-primary/5 border border-primary/20"
							} transition-all duration-300`}
						>
							<span
								className={`font-playfair ${
									activeYear === event.year
										? "gold-shine-text text-lg"
										: "text-tea-text-secondary text-base"
								}`}
							>
								{event.year}
							</span>
						</motion.button>
					))}
				</div>

				{/* Timeline Content */}
				<div className="relative min-h-[400px]">
					{timelineEvents.map((event) => (
						<motion.div
							key={event.year}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{
								opacity: activeYear === event.year ? 1 : 0,
								scale: activeYear === event.year ? 1 : 0.9,
								x:
									activeYear === event.year
										? 0
										: event.year < activeYear
										? -50
										: 50,
							}}
							transition={{ duration: 0.7 }}
							className="absolute top-0 left-0 w-full"
							style={{ display: activeYear === event.year ? "block" : "none" }}
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div className="order-2 md:order-1">
									<h3 className="text-2xl sm:text-3xl font-playfair gold-gradient-text mb-6">
										{event.title}
									</h3>
									<p className="text-lg text-tea-text-secondary leading-relaxed">
										{event.description}
									</p>
								</div>
								<div className="order-1 md:order-2">
									<div className="relative">
										<div className="aspect-video rounded-xl overflow-hidden">
											<img
												src={event.image}
												alt={`Hundreds Heritage in ${event.year}`}
												className="w-full h-full object-cover"
												onError={handleImageError}
											/>
										</div>
										<div
											className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-xl -z-10"
											style={{
												background:
													"linear-gradient(45deg, rgba(116, 104, 53, 0.05), rgba(164, 137, 87, 0.15))",
											}}
										></div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Immersive Story Section */}
			<div className="relative bg-gradient-to-b from-primary/5 to-transparent py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="text-3xl sm:text-4xl font-playfair text-center mb-16"
					>
						<AutoUnderline as="span" className="gold-shine-text">
							The Hundreds Heritage Story
						</AutoUnderline>
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="md:col-span-7 flex flex-col justify-center"
						>
							<h3 className="text-2xl sm:text-3xl font-playfair gold-gradient-text mb-6">
								From Tradition to Innovation
							</h3>
							<p className="text-lg text-tea-text-secondary leading-relaxed mb-6">
								Our founder's journey with tea began during childhood, watching
								grandparents blend herbs and leaves for daily wellness rituals.
								These memories became the foundation of Hundreds Heritage—a
								bridge between ancient wisdom and modern appreciation for
								natural wellness.
							</p>
							<p className="text-lg text-tea-text-secondary leading-relaxed">
								After years studying traditional Thai herbalism and modern tea
								crafting techniques, our team set out to create blends that
								respect heritage while appealing to contemporary tastes. Each
								recipe is crafted with intention, balancing flavor profiles with
								the natural benefits of carefully selected ingredients.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="md:col-span-5"
						>
							<div className="relative">
								<div className="grid grid-cols-2 gap-4">
									<div className="aspect-square rounded-lg overflow-hidden">
										<img
											src={founderStoryImages[0]}
											alt="Founder with tea leaves"
											className="w-full h-full object-cover"
											onError={handleImageError}
										/>
									</div>
									<div className="aspect-square rounded-lg overflow-hidden mt-8">
										<img
											src={founderStoryImages[1]}
											alt="Traditional tea preparation"
											className="w-full h-full object-cover"
											onError={handleImageError}
										/>
									</div>
									<div className="col-span-2 aspect-video rounded-lg overflow-hidden mt-4">
										<img
											src={founderStoryImages[2]}
											alt="Tea plantation in northern Thailand"
											className="w-full h-full object-cover"
											onError={handleImageError}
										/>
									</div>
								</div>
								<div
									className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-lg -z-10"
									style={{
										background:
											"linear-gradient(45deg, rgba(116, 104, 53, 0.05), rgba(164, 137, 87, 0.15))",
									}}
								></div>
							</div>
						</motion.div>
					</div>

					{/* Vision and Values Cards */}
					<div className="mb-20">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7 }}
								className="glass-card p-8 rounded-xl border border-primary/20 text-center"
							>
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
									<span className="text-2xl gold-gradient-text">🍃</span>
								</div>
								<h3 className="text-xl sm:text-2xl font-playfair gold-gradient-text mb-4">
									Our Vision
								</h3>
								<p className="text-tea-text-secondary">
									To be ambassadors of Thailand's exceptional tea heritage,
									sharing its unique flavors and wisdom globally while
									supporting the communities and environments that nurture these
									treasures.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.2 }}
								className="glass-card p-8 rounded-xl border border-primary/20 text-center"
							>
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
									<span className="text-2xl gold-gradient-text">🌱</span>
								</div>
								<h3 className="text-xl sm:text-2xl font-playfair gold-gradient-text mb-4">
									Our Mission
								</h3>
								<p className="text-tea-text-secondary">
									To craft exceptional organic tea blends that honor tradition,
									support sustainable farming, and invite people worldwide to
									experience the authentic essence of Thailand's natural
									abundance.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.4 }}
								className="glass-card p-8 rounded-xl border border-primary/20 text-center"
							>
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
									<span className="text-2xl gold-gradient-text">💫</span>
								</div>
								<h3 className="text-xl sm:text-2xl font-playfair gold-gradient-text mb-4">
									Our Values
								</h3>
								<p className="text-tea-text-secondary">
									Authenticity, sustainability, respect for tradition, community
									empowerment, and a commitment to exceptional quality in every
									aspect of our work.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonial/Quote Section */}
			<div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 mb-20">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<div className="text-6xl gold-shine-text opacity-30 mb-8">"</div>
					<blockquote className="text-2xl sm:text-3xl font-playfair gold-shine-text italic mb-8 leading-relaxed">
						Our story continues with every cup—a celebration of heritage,
						community, and nature's gifts.
					</blockquote>
					<div className="w-16 h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 mx-auto mb-6"></div>
					<p className="text-lg text-tea-text-secondary">
						Join us on this journey of discovery and appreciation, where each
						blend tells a story of Thailand's remarkable tea traditions and the
						commitment to preserving them for generations to come.
					</p>
				</motion.div>
			</div>

			{/* Call to Action */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-16"
			>
				<h3 className="text-2xl sm:text-3xl font-playfair gold-gradient-text mb-6">
					Experience Our Heritage
				</h3>
				<p className="text-lg text-tea-text-secondary mb-8">
					Discover the exceptional flavors and ancient wisdom in every cup of
					our carefully crafted Thai tea blends.
				</p>
				<a
					href="/collections"
					className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#746835] to-[#A48957] text-white font-medium hover:from-[#A48957] hover:to-[#746835] transition-all duration-300 shadow-lg hover:shadow-xl"
				>
					Explore Our Collection
				</a>
			</motion.div>
		</section>
	);
};

export default OurStorySection;
