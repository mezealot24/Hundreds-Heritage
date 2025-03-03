"use client";
import React from "react";
import { motion } from "framer-motion";

const OurStorySection = () => {
	return (
		<section
			id="our-story"
			className="relative w-full py-16 bg-[#2a231c] overflow-hidden"
		>
			<div className="container max-w-4xl mx-auto px-4">
				{/* Header with animated title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl mb-3">
						<span className="gold-shine-text font-semibold">Our Story</span>
					</h2>
					<p className="text-lg sm:text-xl italic text-tea-text-secondary mx-auto max-w-2xl">
						The Wonder of Siamese Wisdom Tea
					</p>
				</motion.div>

				{/* Main content with full paragraphs */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<div className="prose prose-lg prose-invert max-w-none">
						<p className="text-tea-text-secondary text-base sm:text-lg leading-relaxed mb-6">
							Hundreds Heritage – Where the essence of tradition and the
							richness of nature converge to create an unparalleled tea and
							herbal experience. Our journey begins in the lush, high-altitude
							forests of Northern Thailand, where ancient tea plants have
							thrived for centuries, imparting their unique characters to our
							blends.
						</p>

						<p className="text-tea-text-secondary text-base sm:text-lg leading-relaxed mb-6">
							We meticulously select the finest organic ingredients, which are
							locally grown and handpicked, ensuring that every cup is a natural
							infusion of vitality, free from chemicals, artificial colors, and
							scents. Our commitment to quality is evident in every step of our
							process, from harvesting to the final blend.
						</p>

						<p className="text-tea-text-secondary text-base sm:text-lg leading-relaxed">
							Hundreds Heritage transcends its role as a mere beverage, becoming
							a living testament to the deep cultural roots of tea-drinking from
							antiquity to the present day. Blending wisdom from centuries-old
							herbal traditions, it emerges as a distinctive tea and herbal
							elixir designed for exceptional health benefits.
						</p>
					</div>
				</motion.div>

				{/* Modern image grid with parallax effect */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
				>
					<motion.div
						initial={{ y: 50 }}
						whileInView={{ y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2 }}
						className="h-64 md:h-80 bg-[url('/images/tea-fields.jpg')] bg-cover bg-center rounded-lg overflow-hidden"
					></motion.div>

					<div className="grid grid-cols-2 gap-4">
						<motion.div
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="h-40 md:h-48 bg-[url('/images/tea-leaves.jpg')] bg-cover bg-center rounded-lg overflow-hidden"
						></motion.div>
						<motion.div
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1 }}
							className="h-40 md:h-48 bg-[url('/images/tea-ceremony.jpg')] bg-cover bg-center rounded-lg overflow-hidden"
						></motion.div>
						<motion.div
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.9 }}
							className="h-40 md:h-48 bg-[url('/images/tea-preparation.jpg')] bg-cover bg-center rounded-lg overflow-hidden"
						></motion.div>
						<motion.div
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1.1 }}
							className="h-40 md:h-48 bg-[url('/images/herbal-ingredients.jpg')] bg-cover bg-center rounded-lg overflow-hidden"
						></motion.div>
					</div>
				</motion.div>

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
							Providing value that goes beyond, it aids in rejuvenating the
							body, fostering wellness, and instilling inspiration in every cup,
							every day.
						</p>
					</blockquote>
					<div className="absolute text-8xl opacity-10 right-4 bottom-2 font-serif text-primary/30">
						"
					</div>
					<div className="w-16 h-1 bg-primary/40 mx-auto mt-6"></div>
				</motion.div>
			</div>
		</section>
	);
};

export default OurStorySection;
