import React from "react";
import { motion } from "framer-motion";

// ProductImageModal Component
const ProductImageModal = ({ product, onClose }) => {
	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
			onClick={onClose}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				transition={{ duration: 0.3 }}
				className="max-w-[90vw] max-h-[90vh] w-full"
				onClick={(e) => e.stopPropagation()}
			>
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-full object-contain rounded-lg"
				/>
			</motion.div>
		</div>
	);
};

export default ProductImageModal;
