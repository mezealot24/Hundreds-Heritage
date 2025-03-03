import React, { useState } from "react";
import { motion } from "framer-motion";
import { teaProducts } from "@/data/teaData";

// Import FlavorCarousel component directly
import FlavorCarousel from "./ui/FlavorCarousel";

const ProductPreviewSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const [activeProduct, setActiveProduct] = useState(null);

	const handleProductHover = (id) => {
		setActiveProduct(id);
	};

	return (
		<section
			id="our-collection"
			className="relative py-16 md:py-24 overflow-hidden radial-gradient-bg"
		>
			{/* Background Pattern */}
			<BackgroundPattern />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl mb-3">
						<span className="gold-shine-text font-semibold">
							Our Collection Blends
						</span>
					</h2>
					<p className="text-lg sm:text-xl italic text-tea-text-secondary mx-auto max-w-2xl">
						Discover the exquisite taste of Thailand's finest teas, crafted with
						ancient wisdom and modern elegance.
					</p>
				</motion.div>

				{/* Replace ProductGrid with FlavorCarousel */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="w-full"
				>
					<FlavorCarousel
						products={teaProducts}
						handleProductHover={handleProductHover}
						activeProduct={activeProduct}
					/>
				</motion.div>
			</div>
		</section>
	);
};

// BackgroundPattern.js - Kept as is
const BackgroundPattern = () => (
	<>
		{/* Left Side Pattern */}
		<div
			className="absolute top-0 bottom-0 left-0 w-1/6 opacity-30 pointer-events-none"
			style={{
				backgroundImage: "url('/pattern.svg')",
				backgroundSize: "cover",
				backgroundPosition: "left center",
				zIndex: "0",
			}}
		></div>

		{/* Right Side Pattern */}
		<div
			className="absolute top-0 bottom-0 right-0 w-1/6 opacity-30 pointer-events-none"
			style={{
				backgroundImage: "url('/pattern.svg')",
				backgroundSize: "cover",
				backgroundPosition: "right center",
				zIndex: "0",
			}}
		></div>
	</>
);

export default ProductPreviewSection;
