"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Default images configuration with mobile optimization
const DEFAULT_IMAGES = [
	{
		src: "/images/banner/banner-1.webp",

		alt: "Organic Tea Plantation",
		priority: true,
	},
	{
		src: "/images/banner/banner-2.webp",

		alt: "Premium Tea Experience",
	},
	{
		src: "/images/banner/banner-3.webp",

		alt: "Traditional Tea Ceremony",
	},
	{
		src: "/images/banner/banner-4.webp",

		alt: "Handcrafted Tea Process",
	},
	{
		src: "/images/banner/banner-5.webp",

		alt: "Heritage Tea Collection",
	},
	{
		src: "/images/banner/banner-6.webp",

		alt: "Heritage Tea Collection",
	},
];

const ZoomFadeBanner = ({
	images = DEFAULT_IMAGES,
	autoplayDelay = 8000, // Match the zoom duration
	maxZoom = 1.25, // Slightly increased maximum zoom level
	maxZoomMobile = 1.1, // Reduced zoom for mobile performance
	zoomDuration = 8, // Zoom duration in seconds
	zoomDurationMobile = 5, // Shorter duration for mobile
	fadeDuration = 1.2, // Slightly longer fade duration
	className = "",
	children,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isMobile, setIsMobile] = useState(false); // Detect mobile device with improved breakpoints
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		const debouncedResize = debounce(checkMobile, 100);
		window.addEventListener("resize", debouncedResize);

		return () => window.removeEventListener("resize", debouncedResize);
	}, []);

	// Debounce function for performance optimization
	const debounce = useCallback((func, wait) => {
		let timeout;
		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
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
			{/* Responsive container with optimized mobile heights */}
			<div className="relative w-full h-[22rem] xs:h-[25rem] sm:h-[32rem] md:h-[40rem] lg:h-[50rem] xl:h-[60rem] 2xl:h-screen overflow-hidden">
				{/* Background overlay with improved mobile opacity and gradient */}
				<div className="absolute inset-0 z-20 bg-gradient-to-b from-black/40 via-black/50 to-black/60 sm:bg-black/60" />
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
							sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
							quality={isMobile ? 80 : 90}
							className="object-cover object-center transition-transform duration-300 ease-out"
							onLoad={currentIndex === 0 ? handleImageLoad : undefined}
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
						/>
					</motion.div>
				</AnimatePresence>{" "}
				{/* Content Overlay with improved mobile positioning */}
				{children && (
					<motion.div
						initial={{ opacity: 0, y: -60 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.2,
						}}
						className="absolute inset-0 z-50 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8"
					>
						<div className="text-center max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
							{children}
						</div>
					</motion.div>
				)}
				{/* Enhanced loading indicator with mobile optimization */}
				{isLoading && (
					<div className="absolute inset-0 z-60 flex items-center justify-center bg-gray-900/95 backdrop-blur-sm">
						<div className="flex flex-col items-center space-y-4">
							<div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2 sm:border-3 border-white/30 border-t-white"></div>
							<p className="text-white/80 text-sm font-light tracking-wide">
								Loading...
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ZoomFadeBanner;
