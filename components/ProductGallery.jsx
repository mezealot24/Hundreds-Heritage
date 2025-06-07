"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProductGallery({ products }) {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [expandedView, setExpandedView] = useState(false);

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
	};

	const handleImageClick = (product) => {
		setSelectedProduct(product);
		setExpandedView(true);
	};

	const getSelectedProductImageSrc = (product) => {
		if (!product) return "/placeholder.svg";
		if (typeof product.image === "string") {
			return product.image;
		}
		// Modal usually benefits from the larger image
		return product.imageDesktop || product.imageMobile;
	};

	return (
		<>
			{/* Single Column Layout with Animations */}
			<div className="w-full max-w-4xl lg:max-w-6xl mx-auto space-y-8 md:space-y-24">
				{products.map((product, index) => (
					<motion.div
						key={product.name || index}
						variants={itemVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="w-full"
					>
						<motion.img
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							src={product.imageMobile}
							alt={product.name}
							className="w-full h-auto rounded-lg"
						/>
						<motion.div
							className="w-full relative overflow-hidden cursor-pointer"
							onClick={() => handleImageClick(product)}
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
						></motion.div>
					</motion.div>
				))}
			</div>

			{/* Expanded View Modal with Animations */}
			<AnimatePresence>
				{expandedView && selectedProduct && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
						onClick={() => setExpandedView(false)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-background rounded-lg"
							onClick={(e) => e.stopPropagation()}
						>
							<motion.button
								onClick={() => setExpandedView(false)}
								className="absolute top-4 right-4 z-10 bg-background/80 p-2 rounded-full"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</motion.button>

							<div className="p-0">
								<motion.img
									initial={{ opacity: 0.8 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
									src={getSelectedProductImageSrc(selectedProduct)}
									alt={selectedProduct.name}
									className="w-full h-auto"
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
