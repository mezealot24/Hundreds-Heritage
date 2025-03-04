import React from "react";
import { motion, useInView } from "framer-motion";
import ProductGallery from "@/components/ProductGallery";
import Image from "next/image";

const ProductPreviewSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5, // แสดงสินค้าทีละตัว ห่างกัน 0.1 วินาที
			},
		},
	};

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

	// สร้าง ref เพื่ออ้างอิง section
	const sectionRef = React.useRef(null);

	// ใช้ useInView เพื่อตรวจจับว่า section อยู่ใน viewport หรือไม่
	const inView = useInView(sectionRef, { once: true });

	// การ render UI
	return (
		<section
			id="our-collection"
			ref={sectionRef}
			className="relative py-16 md:py-24 radial-gradient-bg"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Heading กับแอนิเมชัน fade-in */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-semibold gold-shine-text sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">
						Our Collection Blends
					</h2>
				</motion.div>

				{/* แสดงสินค้าอื่นๆ ทีละขั้นเมื่อ section อยู่ใน viewport */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="w-full"
				>
					<ProductGallery products={flavors} />
				</motion.div>
			</div>
		</section>
	);
};

export default ProductPreviewSection;
