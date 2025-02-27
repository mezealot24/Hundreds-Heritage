// ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
	return (
		<>
			<div
				className="tea-card relative overflow-hidden rounded-lg shadow-xl group transition-all duration-300 hover:shadow-2xl"
				style={{
					background: `linear-gradient(145deg, rgba(30, 25, 15, 0.9), rgba(33, 28, 18, 0.98))`,
					borderTop: `2px solid ${product.color}20`,
				}}
			>
				{/* Product Image */}
				<ProductImage
					image={product.image}
					name={product.name}
					color={product.color}
				/>

				{/* Product Info */}
				<ProductInfo product={product} />

				{/* Hover Effect Corner */}
				<div
					className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					style={{
						background: `radial-gradient(circle at bottom right, ${product.color}40, transparent 70%)`,
					}}
				></div>
			</div>

			{/* Shadow Effect */}
			<div
				className="absolute -bottom-1 -right-1 w-full h-full rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				style={{
					background: `linear-gradient(45deg, ${product.color}10, ${product.color}20)`,
					border: `1px solid ${product.color}30`,
				}}
			></div>
		</>
	);
};

// ProductImage Component
const ProductImage = ({ image, name, color }) => (
	<div className="h-64 w-full overflow-hidden relative flex items-center justify-center p-6">
		<div
			className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-15`}
			style={{
				background: `radial-gradient(circle at center, ${color}30 0%, transparent 70%)`,
			}}
		></div>

		<img
			src={image || "/api/placeholder/240/240"}
			alt={name}
			className="h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
		/>

		{/* Product Label */}
		<div
			className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-medium"
			style={{
				backgroundColor: `${color}`,
				color: "#1A120B",
			}}
		>
			{name}
		</div>
	</div>
);

// ProductInfo Component
const ProductInfo = ({ product }) => (
	<div className="p-6 pt-4 border-t border-primary/10">
		<h3 className="font-playfair text-xl mb-2 gold-accent">
			{product.tagline}
		</h3>

		<div className="mb-3 flex items-center">
			<span className="text-xs uppercase tracking-wide text-tea-text-secondary">
				Wellness:
			</span>
			<span className="ml-2 text-sm text-tea-text-primary">
				{product.wellness}
			</span>
		</div>

		<div className="mb-4">
			<span className="text-xs uppercase tracking-wide text-tea-text-secondary">
				Ingredients:
			</span>
			<p className="mt-1 text-sm text-tea-text-primary leading-relaxed">
				{product.ingredients}
			</p>
		</div>

		<div className="pt-3 border-t border-primary/10 flex justify-between items-center">
			<button className="btn-gold text-xs px-3 py-1 rounded-full">
				Explore
			</button>
		</div>
	</div>
);

export default ProductCard;
