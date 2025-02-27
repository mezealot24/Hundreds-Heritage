"use client";
import React from "react";
import { motion } from "framer-motion";
import AutoUnderline from "@/components/ui/AutoUnderline";

const OurStorySection = () => {
	return (
		<section className="relative w-full py-16 bg-[#2a231c] overflow-hidden">
			<div className="container max-w-4xl mx-auto px-4">
				{/* Header with animated title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-3">
						<span className="gold-shine-text font-semibold">Our Story</span>
					</h2>
					<p className="text-lg sm:text-xl italic text-tea-text-secondary mx-auto max-w-2xl">
						The Wonder of Siamese Wisdom Tea
					</p>
				</motion.div>

				{/* Main content with staggered animation */}
				<div className="space-y-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="border-l-2 border-primary/30 pl-6"
					>
						<h3 className="text-xl sm:text-2xl font-playfair mb-4 gold-shine-text">
							Heritage & Tradition
						</h3>
						<p className="text-tea-text-secondary text-base leading-relaxed">
							Hundreds Heritage – Where the essence of tradition and the
							richness of nature converge to create an unparalleled tea and
							herbal experience. Our journey begins in the lush, high-altitude
							forests of Northern Thailand, where ancient tea plants have
							thrived for centuries, imparting their unique characters to our
							blends.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="border-l-2 border-primary/30 pl-6"
					>
						<h3 className="text-xl sm:text-2xl font-playfair mb-4 gold-shine-text">
							Quality & Purity
						</h3>
						<p className="text-tea-text-secondary text-base leading-relaxed">
							We meticulously select the finest organic ingredients, which are
							locally grown and handpicked, ensuring that every cup is a natural
							infusion of vitality, free from chemicals, artificial colors, and
							scents. Our commitment to quality is evident in every step of our
							process, from harvesting to the final blend.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="border-l-2 border-primary/30 pl-6"
					>
						<h3 className="text-xl sm:text-2xl font-playfair mb-4 gold-shine-text">
							More Than a Beverage
						</h3>
						<p className="text-tea-text-secondary text-base leading-relaxed">
							Hundreds Heritage transcends its role as a mere beverage, becoming
							a living testament to the deep cultural roots of tea-drinking from
							antiquity to the present day. Blending wisdom from centuries-old
							herbal traditions, it emerges as a distinctive tea and herbal
							elixir designed for exceptional health benefits.
						</p>
					</motion.div>
				</div>

				{/* Modern grid of values */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mt-20 mb-16"
				>
					<h2 className="text-2xl sm:text-3xl font-playfair text-center mb-10">
						<AutoUnderline as="span" className="font-semibold gold-shine-text">
							Our Philosophy
						</AutoUnderline>
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
						{[
							{
								title: "Rejuvenate",
								description:
									"Restoring vitality through nature's finest ingredients",
								delay: 0.2,
							},
							{
								title: "Nourish",
								description:
									"Supporting wellness with every carefully crafted cup",
								delay: 0.3,
							},
							{
								title: "Inspire",
								description:
									"Connecting you to a rich heritage of traditional wisdom",
								delay: 0.4,
							},
						].map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: value.delay }}
								className="bg-[#231c15] p-6 rounded-md border-b-2 border-primary/40 hover:translate-y-[-5px] transition-transform duration-300"
							>
								<h3 className="text-xl font-playfair gold-shine-text mb-3">
									{value.title}
								</h3>
								<p className="text-tea-text-secondary text-sm">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Modern quote display */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="relative py-10 my-12 border-y border-primary/20"
				>
					<div className="absolute text-6xl opacity-10 left-0 top-0 font-serif">
						"
					</div>
					<blockquote className="text-xl sm:text-2xl font-playfair text-center mx-auto max-w-2xl gold-shine-text italic">
						<p>
							Providing value that goes beyond, it aids in rejuvenating the
							body, fostering wellness, and instilling inspiration in every cup,
							every day.
						</p>
					</blockquote>
					<div className="absolute text-6xl opacity-10 right-0 bottom-0 font-serif">
						"
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default OurStorySection;
