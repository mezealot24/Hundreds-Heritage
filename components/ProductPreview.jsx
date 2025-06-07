"use client";
import React, { useState, useRef, useEffect } from "react";
import ProductImageModal from "./ProductImageModal";

const ProductPreview = () => {
	const [visibleImages, setVisibleImages] = useState(new Set());
	const [selectedProduct, setSelectedProduct] = useState(null);
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

	// Handle mobile image click
	const handleMobileImageClick = (product) => {
		setSelectedProduct(product);
	};

	// Close modal
	const closeModal = () => {
		setSelectedProduct(null);
	};

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
				</div>{" "}
				{/* Mobile */}
				<div className="md:hidden flex flex-col gap-6">
					{products.map((product, index) => (
						<div
							key={index}
							className="w-full relative overflow-visible cursor-pointer"
							data-index={index}
							onClick={() => handleMobileImageClick(product)}
						>
							<div className="relative h-full overflow-visible rounded-lg">
								<img
									src={product.imageMobile}
									alt={product.name}
									className="w-full h-full object-cover rounded-lg "
								/>

								{/* Click indicator */}
								<div className="absolute top-4 right-4 bg-black/40 rounded-full p-2">
									<svg
										className="w-5 h-5 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
										/>
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Image Modal for Mobile */}
			{selectedProduct && (
				<ProductImageModal
					product={{
						...selectedProduct,
						image: selectedProduct.imageMobile,
					}}
					onClose={closeModal}
				/>
			)}
		</section>
	);
};

export default ProductPreview;
