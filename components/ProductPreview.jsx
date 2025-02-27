import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductPreviewSection = () => {
	const [activeProduct, setActiveProduct] = useState(null);

	const products = [
		{
			id: 1,
			name: "Tom Yum Tea",
			tagline: "Thai Herbs from Tom Yum Recipe",
			wellness: "Detoxifying & Immunity Boost",
			ingredients: "Organic lemongrass, kaffir lime, galangal, lemon",
			color: "#E67E22",
			image: "/images/products/tom-yum-tea.png",
		},
		{
			id: 2,
			name: "Siam Arun",
			tagline: "The Forest Black Tea from the Sunrise",
			wellness: "Revitalizing Energy & Heart Vitality",
			ingredients: "Organic premium black tea, peppermint, rosemary",
			color: "#C0392B",
			image: "/images/products/siam-arun.png",
		},
		{
			id: 3,
			name: "Buddha Bless",
			tagline: "The Healing Serenity of Green Tea",
			wellness: "Revitalizing Metabolism & Serene Focus",
			ingredients: "Organic green tea, jasmine",
			color: "#27AE60",
			image: "/images/products/buddha-bless.png",
		},
		{
			id: 4,
			name: "Please Me",
			tagline: "Stress Relief and Soothing Sleep",
			wellness: "Relaxation & Restorative Sleep",
			ingredients:
				"Organic chamomile, rose, chrysanthemum, peppermint, mulberry leaves",
			color: "#3498DB",
			image: "/images/products/please-me.png",
		},
		{
			id: 5,
			name: "Yellow Sapphire",
			tagline: "Sparkle in Wisdom, Savor Prosperity",
			wellness: "Anti-Inflammatory & Circulatory Health",
			ingredients: "Organic chrysanthemum, marigold",
			color: "#F1C40F",
			image: "/images/products/yellow-sapphire.png",
		},
		{
			id: 6,
			name: "Peppermint Bliss",
			tagline: "A Daily Dose of Joy",
			wellness: "Refreshment & Digestive Harmony",
			ingredients: "Organic peppermint",
			color: "#1ABC9C",
			image: "/images/products/peppermint-bliss.png",
		},
		{
			id: 7,
			name: "Ginger Spice",
			tagline: "Immune Support, Naturally Healing",
			wellness: "Immunity Boost & Digestive Harmony",
			ingredients: "Organic ginger, lemongrass, lemon",
			color: "#D35400",
			image: "/images/products/ginger-spice.png",
		},
		{
			id: 8,
			name: "Siam Lady",
			tagline: "A Symphony of Thai Elegance and Charm",
			wellness: "Antioxidant & Relaxation",
			ingredients: "Organic rose, jasmine, roselle",
			color: "#D33E96",
			image: "/images/products/siam-lady.png",
		},
	];

	const handleProductHover = (id) => {
		setActiveProduct(id);
	};

	const containerVariants = {
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
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section className="relative py-24 overflow-hidden radial-gradient-bg">
			{/* Decorative background elements */}
			<div
				className="absolute inset-0 opacity-30 pointer-events-none"
				style={{
					backgroundImage: "url('/pattern.svg')",
					backgroundSize: "cover",
				}}
			></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6">
						<span className="gold-shine-text z-10">Our Collection Blends</span>
					</h2>
					<div className="w-32 h-0.5 bg-gradient-to-r from-primary/10 via-primary/80 to-primary/10 mx-auto mb-8"></div>
					<p className="text-lg max-w-2xl mx-auto text-tea-text-secondary">
						Discover the exquisite taste of Thailand's finest teas, crafted with
						ancient wisdom and modern elegance.
					</p>
				</div>

				{/* Products Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					{products.map((product) => (
						<motion.div
							key={product.id}
							variants={itemVariants}
							className="relative"
							onMouseEnter={() => handleProductHover(product.id)}
							onMouseLeave={() => handleProductHover(null)}
						>
							<div
								className="tea-card relative overflow-hidden rounded-lg shadow-xl group transition-all duration-300 hover:shadow-2xl"
								style={{
									background: `linear-gradient(145deg, rgba(30, 25, 15, 0.9), rgba(33, 28, 18, 0.98))`,
									borderTop: `2px solid ${product.color}20`,
								}}
							>
								{/* Product Image */}
								<div className="h-64 w-full overflow-hidden relative flex items-center justify-center p-6">
									<div
										className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-15`}
										style={{
											background: `radial-gradient(circle at center, ${product.color}30 0%, transparent 70%)`,
										}}
									></div>

									<img
										src={product.image || "/api/placeholder/240/240"}
										alt={product.name}
										className="h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
									/>

									{/* Product Label */}
									<div
										className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-medium"
										style={{
											backgroundColor: `${product.color}`,
											color: "#1A120B",
										}}
									>
										{product.name}
									</div>
								</div>

								{/* Product Info */}
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
										<span className="text-xs uppercase tracking-wide text-tea-text-secondary">
											Product Code: HH{product.id.toString().padStart(3, "0")}
										</span>
										<button className="btn-gold text-xs px-3 py-1 rounded-full">
											Explore
										</button>
									</div>
								</div>

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
						</motion.div>
					))}
				</motion.div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<a
						href="/collections"
						className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#746835] to-[#A48957] text-white font-medium hover:from-[#A48957] hover:to-[#746835] transition-all duration-300 shadow-lg hover:shadow-xl"
					>
						Explore Full Collection
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProductPreviewSection;
