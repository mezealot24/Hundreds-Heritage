// ProductPreviewSection.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { teaProducts } from "@/data/teaData";
import HeaderProduct from "./ui/HeaderProduct";

const ProductPreviewSection = () => {
	const [activeProduct, setActiveProduct] = useState(null);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const handleProductHover = (id) => {
		setActiveProduct(id);
	};

	return (
		<section className="relative py-24 overflow-hidden radial-gradient-bg">
			{/* Background Pattern */}
			<BackgroundPattern />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
				{/* Section Header */}
				<HeaderProduct
					title="Our Collection Blends"
					description="Discover the exquisite taste of Thailand's finest teas, crafted with ancient wisdom and modern elegance."
				/>

				{/* Products Grid */}
				<ProductGrid
					products={teaProducts}
					handleProductHover={handleProductHover}
					containerVariants={containerVariants}
					itemVariants={itemVariants}
				/>

				{/* Call to Action */}
				<CallToAction href="/collections" text="Explore Full Collection" />
			</div>
		</section>
	);
};

// BackgroundPattern.js

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

// ProductGrid Component
const ProductGrid = ({
	products,
	handleProductHover,
	containerVariants,
	itemVariants,
}) => (
	<motion.div
		className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
		variants={containerVariants}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, margin: "-100px" }}
	>
		{products.map((product) => (
			<motion.div
				key={product.id}
				variants={itemVariants}
				className="relative"
				onMouseEnter={() => handleProductHover(product.id)}
				onMouseLeave={() => handleProductHover(null)}
			>
				<ProductCard product={product} />
			</motion.div>
		))}
	</motion.div>
);

// CallToAction Component
const CallToAction = ({ href, text }) => (
	<div className="mt-16 text-center">
		<a
			href={href}
			className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#746835] to-[#A48957] text-white font-medium hover:from-[#A48957] hover:to-[#746835] transition-all duration-300 shadow-lg hover:shadow-xl"
		>
			{text}
		</a>
	</div>
);

export default ProductPreviewSection;
