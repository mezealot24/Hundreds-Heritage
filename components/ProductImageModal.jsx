import React from "react";
import { motion } from "framer-motion";

const ProductImageModal = ({ product, onClose }) => {
	const handleClick = (e) => {
		// Only allow click events on mobile screens
		if (window.innerWidth < 768) {
			// 768px is the default md breakpoint in Tailwind
			onClose(e);
		}
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 md:pointer-events-none"
			onClick={handleClick}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				transition={{ duration: 0.3 }}
				className="max-w-[95vw] max-h-[100vh] w-full translate-x-1/2 translate-y-1/2 rounded-lg"
				onClick={(e) => e.stopPropagation()}
			>
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-auto object-cover rounded-lg"
				/>
			</motion.div>
		</div>
	);
};

export default ProductImageModal;
