import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductGallery = ({ products, activeProduct, handleProductHover }) => {
	// Animation variants
	const galleryVariants = {
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
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="w-full">
			{/* Desktop & Tablet Gallery (2 columns on medium screens, hidden on small screens) */}
			<motion.div
				variants={galleryVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="hidden sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6"
			>
				{products.map((product, index) => (
					<motion.div
						key={product.name}
						variants={itemVariants}
						transition={{ duration: 0.5 }}
						className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
						onMouseEnter={() => handleProductHover(product.name)}
						onMouseLeave={() => handleProductHover(null)}
					>
						<div
							className="relative aspect-3/2 object-cover overflow-hidden rounded-lg"
							style={{ backgroundColor: product.color + "15" }} // Light version of the product color
						>
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
								<h3 className="text-white font-semibold text-lg">
									{product.name}
								</h3>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Mobile Gallery (1 column grid, 1 items per row, visible only on small screens) */}
			<motion.div
				variants={galleryVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="grid grid-cols-1 gap-2 sm:hidden"
			>
				{products.map((product, index) => (
					<motion.div
						key={product.name}
						variants={itemVariants}
						transition={{ duration: 0.5 }}
						className="relative overflow-hidden rounded-lg shadow-md"
					>
						<div
							className="relative aspect-16/9 overflow-hidden rounded-lg"
							style={{ backgroundColor: product.color + "15" }}
						>
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default ProductGallery;
