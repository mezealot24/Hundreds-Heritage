import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductGallery from "./ui/ProductGallery"; // Import the new gallery component

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

	// Sample data from your provided code
	const flavors = [
		{
			name: "Tom Yum Tea",
			color: "#e8782e",
			image: "/images/products/tom-yum-tea.jpg",
		},
		{
			name: "Siam Arun",
			color: "#cc4e42",
			image: "/images/products/siam-arun.jpg",
		},
		{
			name: "Buddha Bless",
			color: "#70be51",
			image: "/images/products/buddha-bless.jpg",
		},
		{
			name: "Please Me",
			color: "#5bc2da",
			image: "/images/products/please-me.jpg",
		},
		{
			name: "Yellow Sapphire",
			color: "#f8d43e",
			image: "/images/products/yellow-sapphire.jpg",
		},
		{
			name: "Peppermint Bliss",
			color: "#43b370",
			image: "/images/products/peppermint-bliss.jpg",
		},
		{
			name: "Ginger Spice",
			color: "#c1a96d",
			image: "/images/products/ginger-spice.jpg",
		},
		{
			name: "Siam Lady",
			color: "#da69a7",
			image: "/images/products/siam-lady.jpg",
		},
	];

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
					<h2 className="text-3xl font-semibold gold-shine-text sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">
						Collection Blends
					</h2>
				</motion.div>

				{/* Replace FlavorCarousel with ProductGallery */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="w-full"
				>
					<ProductGallery
						products={flavors}
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
