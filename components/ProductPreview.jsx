"use client";
import React, { useState, useRef, useEffect } from "react";

const ProductPreview = () => {
	const [visibleImages, setVisibleImages] = useState(new Set());
	const observerRef = useRef(null);

	const products = [
		{
			name: "All Products",
			color: "#f1d180",
			imageDesktop: "/images/products/hh_allproduct-desktop.webp",
			imageMobile: "/images/products/hh_allproduct-mobile.webp",
			description:
				"Discover our complete collection of premium Thai teas, each crafted with organic ingredients and ancient wisdom.",
		},
		{
			name: "Tom Yum Tea",
			color: "#e8782e",
			imageDesktop: "/images/products/tom-yum-tea-desktop.webp",
			imageMobile: "/images/products/tom-yum-tea-mobile.webp",
			description:
				"The iconic Thai flavor reimagined as a vibrant, aromatic tea blend that invigorates the senses.",
		},
		{
			name: "Siam Arun",
			color: "#cc4e42",
			imageDesktop: "/images/products/siam-arun-desktop.webp",
			imageMobile: "/images/products/siam-arun-mobile.webp",
			description:
				"A sunrise of flavors that awakens your spirit with the essence of Thai morning rituals.",
		},
		{
			name: "Buddha Bless",
			color: "#70be51",
			imageDesktop: "/images/products/buddha-bless-desktop.webp",
			imageMobile: "/images/products/buddha-bless-mobile.webp",
			description:
				"Step into a world of tranquility with our all-time favorite tea, a harmonious blend of green tea and jasmine.",
		},
		{
			name: "Please Me",
			color: "#5bc2da",
			imageDesktop: "/images/products/please-me-desktop.webp",
			imageMobile: "/images/products/please-me-mobile.webp",
			description:
				"A delightful blend designed to please your palate and soothe your soul with every sip.",
		},
		{
			name: "Yellow Sapphire",
			color: "#f8d43e",
			imageDesktop: "/images/products/yellow-sapphire-desktop.webp",
			imageMobile: "/images/products/yellow-sapphire-mobile.webp",
			description:
				"A precious blend that shines with golden warmth and offers a treasure of wellness benefits.",
		},
		{
			name: "Peppermint Bliss",
			color: "#43b370",
			imageDesktop: "/images/products/peppermint-bliss-desktop.webp",
			imageMobile: "/images/products/peppermint-bliss-mobile.webp",
			description:
				"Cool, refreshing, and uplifting - this minty blend brings pure bliss in every cup.",
		},
		{
			name: "Ginger Spice",
			color: "#c1a96d",
			imageDesktop: "/images/products/ginger-spice-desktop.webp",
			imageMobile: "/images/products/ginger-spice-mobile.webp",
			description:
				"A revitalizing blend of vibrant ginger and aromatic herbs that invigorates both body and soul.",
		},
		{
			name: "Siam Lady",
			color: "#da69a7",
			imageDesktop: "/images/products/siam-lady-desktop.webp",
			imageMobile: "/images/products/siam-lady-mobile.webp",
			description:
				"An elegant blend crafted for grace and balance, celebrating the essence of Thai femininity.",
		},
	];

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = parseInt(entry.target.getAttribute("data-index"));
						setVisibleImages((prev) => new Set([...prev, index]));
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: "0px 0px -10% 0px",
			}
		);
		const imageElements = document.querySelectorAll("[data-index]");
		imageElements.forEach((el) => {
			if (observerRef.current) {
				observerRef.current.observe(el);
			}
		});
		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, []);
	return (
		<section id="our-collection" className="relative w-full py-20 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Title */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-bold premium-gold-text mb-8">
						OUR COLLECTION
					</h2>
				</div>

				{/* Desktop: Special first image + Single Column Vertical Scroll */}
				<div className="hidden md:block">
					<div className="max-w-5xl mx-auto space-y-12">
						{/* Special Hero Image - All Products */}
						<div
							className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000 ${
								visibleImages.has(0) ? "scale-100" : "scale-95 opacity-70"
							}`}
							data-index="0"
						>
							<div className="relative w-[1024px] h-[724px] overflow-hidden">
								<img
									src={products[0].imageDesktop}
									alt={products[0].name}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500"></div>

								{/* Golden border overlay for special effect */}
								<div className="absolute inset-0 border-4 border-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-3xl opacity-0  transition-opacity duration-500"></div>
							</div>
						</div>

						{/* Rest of the products - larger size */}
						{products.slice(1).map((product, index) => (
							<div
								key={index + 1}
								className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000  ${
									visibleImages.has(index + 1)
										? "scale-100"
										: "scale-95 opacity-70"
								}`}
								data-index={index + 1}
							>
								<div className="relative w-[1024px] h-[724px] overflow-hidden">
									<img
										src={product.imageDesktop}
										alt={product.name}
										className="w-full h-full object-cover transition-transform duration-700 "
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Mobile: Keep original grid layout */}
				<div className="md:hidden grid grid-cols-2 gap-6">
					{products.map((product, index) => (
						<div
							key={index}
							className="group bg-gradient-to-b from-yellow-900/20 to-yellow-800/20 rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500"
							onClick={() => setCurrentIndex(index)}
						>
							<div className="relative h-56 overflow-hidden">
								<img
									src={product.mobileImage}
									alt={product.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							</div>

							<div className="p-4">
								<h3 className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-center">
									{product.name}
								</h3>
							</div>
						</div>
					))}				</div>
			</div>
		</section>
	);
};

export default ProductPreview;
