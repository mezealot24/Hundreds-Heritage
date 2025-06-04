"use client";
import { motion } from "framer-motion";
import ProductGallery from "@/components/ProductGallery";

const ProductPreviewSection = () => {
	const flavors = [
		{
			name: "All Products",
			color: "#f1d180",
			imageDesktop: "/images/products/hh_allproduct-desktop.webp",
			imageMobile: "/images/products/hh_allproduct-mobile.webp",
			description:
				"Discover our complete collection of premium Thai teas, each crafted with organic ingredients and ancient wisdom.",
		},
		{
			name: "Tom Yum Tea",
			color: "#e8782e",
			imageDesktop: "/images/products/tom-yum-tea-desktop.webp",
			imageMobile: "/images/products/tom-yum-tea-mobile.webp",
			description:
				"The iconic Thai flavor reimagined as a vibrant, aromatic tea blend that invigorates the senses.",
		},
		{
			name: "Siam Arun",
			color: "#cc4e42",
			imageDesktop: "/images/products/siam-arun-desktop.webp",
			imageMobile: "/images/products/siam-arun-mobile.webp",
			description:
				"A sunrise of flavors that awakens your spirit with the essence of Thai morning rituals.",
		},
		{
			name: "Buddha Bless",
			color: "#70be51",
			imageDesktop: "/images/products/buddha-bless-desktop.webp",
			imageMobile: "/images/products/buddha-bless-mobile.webp",
			description:
				"Step into a world of tranquility with our all-time favorite tea, a harmonious blend of green tea and jasmine.",
		},
		{
			name: "Please Me",
			color: "#5bc2da",
			imageDesktop: "/images/products/please-me-desktop.webp",
			imageMobile: "/images/products/please-me-mobile.webp",
			description:
				"A delightful blend designed to please your palate and soothe your soul with every sip.",
		},
		{
			name: "Yellow Sapphire",
			color: "#f8d43e",
			imageDesktop: "/images/products/yellow-sapphire-desktop.webp",
			imageMobile: "/images/products/yellow-sapphire-mobile.webp",
			description:
				"A precious blend that shines with golden warmth and offers a treasure of wellness benefits.",
		},
		{
			name: "Peppermint Bliss",
			color: "#43b370",
			imageDesktop: "/images/products/peppermint-bliss-desktop.webp",
			imageMobile: "/images/products/peppermint-bliss-mobile.webp",
			description:
				"Cool, refreshing, and uplifting - this minty blend brings pure bliss in every cup.",
		},
		{
			name: "Ginger Spice",
			color: "#c1a96d",
			imageDesktop: "/images/products/ginger-spice-desktop.webp",
			imageMobile: "/images/products/ginger-spice-mobile.webp",
			description:
				"A revitalizing blend of vibrant ginger and aromatic herbs that invigorates both body and soul.",
		},
		{
			name: "Siam Lady",
			color: "#da69a7",
			imageDesktop: "/images/products/siam-lady-desktop.webp",
			imageMobile: "/images/products/siam-lady-mobile.webp",
			description:
				"An elegant blend crafted for grace and balance, celebrating the essence of Thai femininity.",
		},
	];

	return (
		<section
			id="our-collection"
			className="relative py-16 md:py-40 radial-gradient-bg"
		>
			<div className="z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center px-4 mb-8 md:mb-12"
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
