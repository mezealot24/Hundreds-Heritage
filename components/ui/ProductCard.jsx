import React from "react";

const ProductCard = ({ product }) => {
	return (
		<div className="group relative">
			{/* Main Card */}
			<div
				className="tea-card relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl backdrop-blur-sm"
				style={{
					background: `linear-gradient(145deg, rgba(18, 16, 12, 0.9), rgba(25, 22, 16, 0.98))`,
					borderTop: `2px solid ${product.color}30`,
				}}
			>
				{/* Subtle Shimmer Effect */}
				<div
					className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden"
					style={{
						backgroundImage: 'url("/shimmer-pattern.svg")',
						backgroundSize: "200% 200%",
						animation: "shimmer 8s linear infinite",
					}}
				></div>

				{/* Product Image */}
				<div className="h-64 w-full overflow-hidden relative flex items-center justify-center p-6">
					<div
						className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
						style={{
							background: `radial-gradient(circle at center, ${product.color}40 0%, transparent 70%)`,
						}}
					></div>

					<img
						src={product.image || "/api/placeholder/240/240"}
						alt={product.name}
						className="h-full object-contain transform transition-transform duration-700 ease-in-out group-hover:scale-110"
					/>

					{/* Premium Label */}
					<div
						className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-medium backdrop-blur-sm transition-all duration-300 group-hover:pl-5"
						style={{
							backgroundColor: `${product.color}cc`,
							color: "#0a0806",
						}}
					>
						{product.name}
					</div>
				</div>

				{/* Product Info with Enhanced Luxury Elements */}
				<div className="p-6 pt-4 border-t border-primary/10">
					<h3
						className="font-playfair text-xl mb-2 transition-all duration-300 group-hover:tracking-wide"
						style={{
							background: `linear-gradient(to right, #dfd6bd, ${product.color}dd)`,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						{product.tagline}
					</h3>

					<div className="mb-3 flex items-center">
						<span className="text-xs uppercase tracking-wide text-tea-text-secondary font-medium">
							Wellness:
						</span>
						<span className="ml-2 text-sm text-tea-text-primary">
							{product.wellness}
						</span>
					</div>

					<div className="mb-4">
						<span className="text-xs uppercase tracking-wide text-tea-text-secondary font-medium">
							Ingredients:
						</span>
						<p className="mt-1 text-sm text-tea-text-primary leading-relaxed">
							{product.ingredients}
						</p>
					</div>

					<div className="pt-3 border-t border-primary/10 flex justify-between items-center">
						<button
							className="relative overflow-hidden px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 group-hover:pl-6"
							style={{
								background: `linear-gradient(to right, ${product.color}cc, ${product.color}99)`,
								color: "#0a0806",
							}}
						>
							<span className="relative z-10">Explore</span>
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								style={{
									background: `linear-gradient(to right, ${product.color}ee, ${product.color}cc)`,
								}}
							></div>
						</button>

						<div className="text-tea-text-secondary text-xs opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
							Premium Blend
						</div>
					</div>
				</div>

				{/* Enhanced Hover Effect Corner */}
				<div
					className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-500"
					style={{
						background: `radial-gradient(circle at bottom right, ${product.color}60, transparent 70%)`,
					}}
				></div>
			</div>

			{/* Enhanced Shadow Effect */}
			<div
				className="absolute -bottom-1 -right-1 w-full h-full rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"
				style={{
					background: `linear-gradient(45deg, ${product.color}20, ${product.color}30)`,
					border: `1px solid ${product.color}40`,
					filter: "blur(2px)",
				}}
			></div>
		</div>
	);
};

export default ProductCard;
