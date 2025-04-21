"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductImageModal from "@/components/ProductImageModal";

const ProductGallery = ({ products }) => {
	const [selectedProduct, setSelectedProduct] = useState(null);

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const handleImageClick = (product) => {
		if (window.innerWidth < 768) {
			setSelectedProduct(product);
		}
	};

	return (
		<>
			{/* Grid container */}
			<div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 w-full">
				{products.map((product, index) => (
					<motion.div
						key={product.name || index}
						variants={itemVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "0px 0px -200px 0px" }}
						transition={{ duration: 0.5 }}
						className="w-full"
					>
						{/* Card */}
						<div className="w-full p-0 sm:p-2">
							<div className="aspect-[13/9] w-full h-full relative overflow-hidden border border-accent">
								<img
									src={product.image}
									alt={product.name || `Product ${index + 1}`}
									className="absolute inset-0 w-full h-full object-fill md:cursor-default"
									loading="lazy"
									onClick={() => handleImageClick(product)}
								/>
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
