"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductImageModal from "@/components/ProductImageModal";

const ProductGallery = ({ products, handleProductHover }) => {
	const [selectedProduct, setSelectedProduct] = useState(null);

	// Animation variants สำหรับแต่ละผลิตภัณฑ์
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const handleImageClick = (product) => {
		setSelectedProduct(product);
	};

	return (
		<>
			<div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
				{products.map((product, index) => (
					<motion.div
						key={product.name || index}
						variants={itemVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "0px 0px -200px 0px" }} // เริ่ม animation ก่อนเข้าสู่ viewport 200px
						transition={{ duration: 0.5 }}
						className="relative w-full"
						onMouseEnter={() =>
							handleProductHover && handleProductHover(product.name)
						}
						onMouseLeave={() => handleProductHover && handleProductHover(null)}
					>
						<div
							className="flex w-full rounded-2xl shadow-xl overflow-hidden border border-accent cursor-pointer"
							onClick={() => handleImageClick(product)}
						>
							<div className="w-full p-2 sm:p-4 relative">
								<div className="aspect-video w-full h-full">
									<img
										src={product.image}
										alt={product.name || `Product ${index + 1}`}
										className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 hover:scale-105"
										loading="lazy" // Lazy loading รูปภาพ
									/>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{selectedProduct && (
					<ProductImageModal
						product={selectedProduct}
						onClose={() => setSelectedProduct(null)}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default ProductGallery;
