"use client";
import { motion } from "framer-motion";
import ProductGallery from "@/components/ProductGallery";

const ProductPreviewSection = () => {
	const flavors = [
		{
			name: "All Products",
			color: "#f1d180",
			image: "/images/products/hh_allproduct.jpg",
			description:
				"Discover our complete collection of premium Thai teas, each crafted with organic ingredients and ancient wisdom.",
		},
		{
			name: "Tom Yum Tea",
			color: "#e8782e",
			image: "/images/products/tom-yum-tea.jpg",
			description:
				"The iconic Thai flavor reimagined as a vibrant, aromatic tea blend that invigorates the senses.",
		},
		{
			name: "Siam Arun",
			color: "#cc4e42",
			image: "/images/products/siam-arun.jpg",
			description:
				"A sunrise of flavors that awakens your spirit with the essence of Thai morning rituals.",
		},
		{
			name: "Buddha Bless",
			color: "#70be51",
			image: "/images/products/buddha-bless.jpg",
			description:
				"Step into a world of tranquility with our all-time favorite tea, a harmonious blend of green tea and jasmine.",
		},
		{
			name: "Please Me",
			color: "#5bc2da",
			image: "/images/products/please-me.jpg",
			description:
				"A delightful blend designed to please your palate and soothe your soul with every sip.",
		},
		{
			name: "Yellow Sapphire",
			color: "#f8d43e",
			image: "/images/products/yellow-sapphire.jpg",
			description:
				"A precious blend that shines with golden warmth and offers a treasure of wellness benefits.",
		},
		{
			name: "Peppermint Bliss",
			color: "#43b370",
			image: "/images/products/peppermint-bliss.jpg",
			description:
				"Cool, refreshing, and uplifting - this minty blend brings pure bliss in every cup.",
		},
		{
			name: "Ginger Spice",
			color: "#c1a96d",
			image: "/images/products/ginger-spice.jpg",
			description:
				"A revitalizing blend of vibrant ginger and aromatic herbs that invigorates both body and soul.",
		},
		{
			name: "Siam Lady",
			color: "#da69a7",
			image: "/images/products/siam-lady.jpg",
			description:
				"An elegant blend crafted for grace and balance, celebrating the essence of Thai femininity.",
		},
	];

	return (
		<section
			id="our-collection"
			className="relative py-16 md:py-24 radial-gradient-bg"
		>
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-8 md:mb-12"
				>
					<h2 className="text-3xl font-semibold gold-shine-text sm:text-4xl md:text-5xl text-center mb-4">
						Collection Blends
					</h2>
				</motion.div>

				<ProductGallery products={flavors} />
			</div>
		</section>
	);
};

export default ProductPreviewSection;
