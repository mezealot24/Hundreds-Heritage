"use client";
import React from "react";
import { motion } from "framer-motion";

const OurStorySection = () => {
	return (
		<section
			id="our-story"
			className="relative w-full py-16 -mt-12 bg-[#2a231c] overflow-hidden"
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
							blends. We meticulously select the finest organic ingredients,
							which are locally grown and handpicked, ensuring that every cup is
							a natural infusion of vitality, free from chemicals, artificial
							colors, and scents.
						</p>

						<p className="text-tea-text-secondary text-base sm:text-lg leading-relaxed">
							Hundreds Heritage transcends its role as a mere beverage, becoming
							a living testament to the deep cultural roots of tea-drinking from
							antiquity to the present day. Blending wisdom from centuries-old
							herbal traditions, it emerges as a distinctive tea and herbal
							elixir designed for exceptional health benefits. Providing value
							that goes beyond, it aids in rejuvenating the body, fostering
							wellness, and instilling inspiration in every cup, every day.
						</p>
					</div>
				</motion.div>

				{/* Image section with animation */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2 }}
					className="w-full max-w-4xl mx-auto h-64 md:h-80 bg-[url('/images/ourstory/ourstory-1.jpg')] bg-cover bg-center rounded-lg overflow-hidden"
				/>
			</div>
		</section>
	);
};

export default OurStorySection;
