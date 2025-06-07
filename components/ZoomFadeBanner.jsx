"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Default images configuration with mobile optimization
const DEFAULT_IMAGES = [
	{
		src: "/images/banner/banner-1.webp",
		srcMobile: "/images/banner/mobile/banner-1-mobile.webp",
		alt: "Organic Tea Plantation",
		priority: true,
	},
	{
		src: "/images/banner/banner-2.webp",
		srcMobile: "/images/banner/mobile/banner-2-mobile.webp",
		alt: "Premium Tea Experience",
	},
	{
		src: "/images/banner/banner-3.webp",
		srcMobile: "/images/banner/mobile/banner-3-mobile.webp",
		alt: "Traditional Tea Ceremony",
	},
	{
		src: "/images/banner/banner-4.webp",
		srcMobile: "/images/banner/mobile/banner-4-mobile.webp",
		alt: "Handcrafted Tea Process",
	},
	{
		src: "/images/banner/banner-5.webp",
		srcMobile: "/images/banner/mobile/banner-5-mobile.webp",
		alt: "Heritage Tea Collection",
	},
	{
		src: "/images/banner/banner-6.webp",
		srcMobile: "/images/banner/mobile/banner-6-mobile.webp",
		alt: "Heritage Tea Collection",
	},
];

export default function ZoomFadeBanner({
	images = DEFAULT_IMAGES,
	autoplayDelay = 8000, // Match the zoom duration
	maxZoom = 1.2, // Maximum zoom level
	maxZoomMobile = 1.15, // Reduced zoom for mobile
	zoomDuration = 8, // Zoom duration in seconds
	zoomDurationMobile = 6, // Shorter duration for mobile
	fadeDuration = 1, // Fade duration in seconds
	className = "",
	children,
}) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	// Detect mobile device
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Auto-advance to next image with mobile-optimized timing
	useEffect(() => {
		const delay = isMobile
			? (zoomDurationMobile + fadeDuration) * 1000
			: autoplayDelay;
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, delay);

		return () => clearInterval(timer);
	}, [
		autoplayDelay,
		images.length,
		isMobile,
		zoomDurationMobile,
		fadeDuration,
	]);

	// Handle image load completion
	const handleImageLoad = useCallback(() => {
		setIsLoading(false);
	}, []);

	// Memoized animation variants with dynamic values and mobile optimization
	const animationVariants = useMemo(
		() => ({
			initial: {
				opacity: 0,
				scale: 1,
			},
			animate: {
				opacity: 1,
				scale: isMobile ? maxZoomMobile : maxZoom,
				transition: {
					opacity: {
						duration: fadeDuration,
						ease: "easeInOut",
					},
					scale: {
						duration: isMobile ? zoomDurationMobile : zoomDuration,
						ease: "linear",
					},
				},
			},
			exit: {
				opacity: 0,
				scale: isMobile ? maxZoomMobile : maxZoom,
				transition: {
					opacity: {
						duration: fadeDuration,
						ease: "easeInOut",
					},
					scale: {
						duration: 0,
					},
				},
			},
		}),
		[
			maxZoom,
			maxZoomMobile,
			zoomDuration,
			zoomDurationMobile,
			fadeDuration,
			isMobile,
		]
	);

	// Preload next image for smoother transition with mobile optimization
	useEffect(() => {
		const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
		const img = new window.Image();
		const nextImage = images[nextIndex];

		// Preload appropriate image based on device type
		img.src =
			isMobile && nextImage.srcMobile ? nextImage.srcMobile : nextImage.src;
	}, [currentIndex, images, isMobile]);

	return (
		<div className={`relative w-full ${className}`}>
			<div className="relative w-full h-[25rem] sm:h-[30rem] md:h-[45rem] lg:h-[55rem] xl:h-screen overflow-hidden">
				{/* Background overlay with mobile-optimized opacity */}
				<div
					className={`absolute inset-0 z-20 ${
						isMobile ? "bg-black/50" : "bg-black/60"
					}`}
				/>

				{/* Image Container with AnimatePresence for smooth transitions */}
				<AnimatePresence mode="wait">
					<motion.div
						key={`zoom-fade-${currentIndex}`}
						initial="initial"
						animate="animate"
						exit="exit"
						variants={animationVariants}
						className="absolute inset-0 z-10"
					>
						<Image
							src={
								isMobile && images[currentIndex].srcMobile
									? images[currentIndex].srcMobile
									: images[currentIndex].src
							}
							alt={images[currentIndex].alt}
							fill
							priority={images[currentIndex].priority || currentIndex === 0}
							sizes={
								isMobile
									? "(max-width: 768px) 100vw, 100vw"
									: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
							}
							quality={isMobile ? 75 : 85}
							className={`object-cover ${
								isMobile ? "object-center" : "object-center"
							}`}
							onLoad={currentIndex === 0 ? handleImageLoad : undefined}
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
						/>
					</motion.div>
				</AnimatePresence>

				{/* Content Overlay */}
				{children && (
					<motion.div
						initial={{ opacity: 0, y: -80 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="absolute inset-0 z-50 flex flex-col justify-center items-center px-4"
					>
						{children}
					</motion.div>
				)}

				{/* Loading indicator */}
				{isLoading && (
					<div className="absolute inset-0 z-60 flex items-center justify-center bg-gray-900">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
					</div>
				)}

				{/* Progress indicators with mobile optimization */}
				<div
					className={`absolute z-30 flex space-x-2 ${
						isMobile
							? "bottom-3 left-1/2 transform -translate-x-1/2"
							: "bottom-4 left-1/2 transform -translate-x-1/2"
					}`}
				>
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`rounded-full transition-all duration-300 ${
								isMobile ? "w-1.5 h-1.5" : "w-2 h-2"
							} ${
								index === currentIndex
									? `bg-white ${isMobile ? "w-4" : "w-6"}`
									: "bg-white/50 hover:bg-white/75"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
