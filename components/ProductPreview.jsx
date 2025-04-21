import React from "react";
import { motion } from "framer-motion";
import ProductGallery from "@/components/ProductGallery";

const ProductPreviewSection = () => {
	const flavors = [
		{
			name: "All Products",
			color: "#f1d180",
			image: "/images/products/hh_allproduct.jpg",
		},
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

	return (
		<section
			id="our-collection"
			className="relative py-16 md:py-24 radial-gradient-bg"
		>
			<div className="w-full relative z-10">
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

				<ProductGallery products={flavors} />
			</div>
		</section>
	);
};

export default ProductPreviewSection;
