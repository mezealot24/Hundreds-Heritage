"use client";
import React from "react";
import { motion } from "framer-motion";

const OurStorySection = () => {
	return (
		<section
			id="our-story"
			className="h-max w-full md:min-h-[calc(100vh-110px-88px)] bg-[#2a231c] "
		>
			<div className="container max-w-7xl pb-16 pt-20 md:pt-32">
				{/* Header with animated title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<h2 className="pt-12 text-3xl sm:text-4xl md:text-5xl mb-3 premium-gold-text font-semibold ">
						Our Story
					</h2>
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
						<p className="text-tea-text-secondary text-base sm:text-lg leading-relaxed mb-6 text-justify">
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

						<p className="text-tea-text-secondary text-base sm:text-lg leading-relaxed mb-6 text-justify">
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
			</div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
				className="w-full aspect-[16/7] bg-[url('/images/ourstory/ourstory-1.PNG')] bg-center bg-cover bg-no-repeat"			/>
		</section>
	);
};

export default OurStorySection;
