"use client";

import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, {
	useEffect,
	useState,
	useCallback,
	useMemo,
	useRef,
} from "react";
import Image from "next/image";

/**
 * ImagesSlider Component - Optimized for Next.js 14+
 * High-performance responsive image slider with security measures
 * Supports 3 device breakpoints: Mobile, Tablet, Desktop
 */
export const ImagesSlider = ({
	images = [],
	children,
	overlay = true,
	overlayClassName = "",
	className = "",
	autoplay = true,
	interval = 5000,
	mobileAspectRatio = "4/3",
	tabletAspectRatio = "16/10",
	desktopAspectRatio = "16/9",
	preloadCount = 1,
	lazy = true,
	onImagesLoaded,
	...props
}) => {
	// State management with performance optimization
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [loadedImages, setLoadedImages] = useState([]);
	const [isVisible, setIsVisible] = useState(true);

	// Refs for cleanup and performance
	const intervalRef = useRef(null);
	const containerRef = useRef(null);

	// Input validation and security measures
	const validatedImages = useMemo(() => {
		if (!Array.isArray(images) || images.length === 0) {
			console.warn("ImagesSlider: No valid images provided");
			return [];
		}

		return images
			.filter((img) => {
				const src = typeof img === "object" ? img.src : img;
				// Security: Basic validation for image sources
				return (
					src &&
					typeof src === "string" &&
					(src.startsWith("/") || src.startsWith("http"))
				);
			})
			.map((img, index) => ({
				src: typeof img === "object" ? img.src : img,
				alt: typeof img === "object" ? img.alt : `Slide ${index + 1}`,
				priority: typeof img === "object" ? img.priority : index === 0,
			}));
	}, [images]);

	// Navigation handlers with bounds checking
	const handleNext = useCallback(() => {
		if (validatedImages.length === 0) return;
		setCurrentIndex((prev) => (prev + 1) % validatedImages.length);
	}, [validatedImages.length]);

	const handlePrevious = useCallback(() => {
		if (validatedImages.length === 0) return;
		setCurrentIndex((prev) =>
			prev === 0 ? validatedImages.length - 1 : prev - 1
		);
	}, [validatedImages.length]);

	// Keyboard navigation with security measures
	const handleKeyDown = useCallback(
		(event) => {
			// Security: Only handle specific keys to prevent injection
			const allowedKeys = ["ArrowRight", "ArrowLeft", "Escape"];
			if (!allowedKeys.includes(event.key)) return;

			switch (event.key) {
				case "ArrowRight":
					handleNext();
					break;
				case "ArrowLeft":
					handlePrevious();
					break;
				case "Escape":
					// Stop autoplay on escape
					if (intervalRef.current) {
						clearInterval(intervalRef.current);
						intervalRef.current = null;
					}
					break;
			}
		},
		[handleNext, handlePrevious]
	);

	// Intersection Observer for performance
	const handleVisibilityChange = useCallback((entries) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	}, []);

	// Initialize images and setup
	useEffect(() => {
		if (validatedImages.length === 0) {
			setLoading(false);
			return;
		}

		setLoadedImages(validatedImages);
		setLoading(false);

		// Notify parent component
		if (typeof onImagesLoaded === "function") {
			try {
				onImagesLoaded(validatedImages);
			} catch (error) {
				console.error("ImagesSlider: Error in onImagesLoaded callback:", error);
			}
		}
	}, [validatedImages, onImagesLoaded]);

	// Keyboard event listeners
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	// Intersection Observer setup
	useEffect(() => {
		if (!containerRef.current) return;

		const observer = new IntersectionObserver(handleVisibilityChange, {
			threshold: 0.1,
		});

		observer.observe(containerRef.current);

		return () => observer.disconnect();
	}, [handleVisibilityChange]);

	// Autoplay with visibility and performance optimizations
	useEffect(() => {
		if (!autoplay || loading || !isVisible || validatedImages.length <= 1) {
			return;
		}

		// Security: Validate interval value
		const safeInterval = Math.max(1000, Math.min(interval, 30000));

		intervalRef.current = setInterval(handleNext, safeInterval);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [
		autoplay,
		loading,
		isVisible,
		validatedImages.length,
		interval,
		handleNext,
	]);

	// Animation variants optimized for performance
	const slideVariants = useMemo(
		() => ({
			initial: {
				opacity: 0,
				scale: 1,
			},
			visible: {
				opacity: 1,
				scale: 1.02, // Reduced scale for better performance
				transition: {
					opacity: { duration: 1.2, ease: "easeInOut" },
					scale: {
						duration: 8,
						ease: "linear",
						repeat: 0, // Prevent infinite scaling
					},
				},
			},
			exit: {
				opacity: 0,
				transition: {
					opacity: { duration: 0.8, ease: "easeInOut" },
				},
			},
		}),
		[]
	);

	// Get current image with error handling
	const getCurrentImage = useCallback(() => {
		if (!loadedImages[currentIndex]) return null;
		return loadedImages[currentIndex];
	}, [loadedImages, currentIndex]);

	// Loading indicator component
	const LoadingIndicator = React.memo(() => (
		<div className="absolute inset-0 bg-gray-900/80 z-40 flex flex-col items-center justify-center">
			<div className="w-48 sm:w-64 md:w-80 h-2 bg-gray-700 rounded-full overflow-hidden">
				<motion.div
					className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
					initial={{ width: 0 }}
					animate={{ width: "100%" }}
					transition={{ duration: 2, ease: "easeInOut" }}
				/>
			</div>
			<div className="text-gray-300 mt-4 text-sm sm:text-base">
				Loading images...
			</div>
		</div>
	));

	// Generate responsive CSS for aspect ratios
	const aspectRatioStyles = useMemo(
		() => `
		/* Mobile: 320px-639px */
		@media (max-width: 639px) {
			.responsive-image-container {
				aspect-ratio: ${mobileAspectRatio};
				height: auto !important;
				min-height: 400px;
			}
		}
		
		/* Tablet: 640px-1023px */
		@media (min-width: 640px) and (max-width: 1023px) {
			.responsive-image-container {
				aspect-ratio: ${tabletAspectRatio};
				height: auto !important;
				min-height: 500px;
			}
		}
		
		/* Desktop: 1024px+ */
		@media (min-width: 1024px) {
			.responsive-image-container {
				aspect-ratio: ${desktopAspectRatio};
			}
		}
	`,
		[mobileAspectRatio, tabletAspectRatio, desktopAspectRatio]
	);

	const currentImage = getCurrentImage();
	const hasValidImages = validatedImages.length > 0;

	if (!hasValidImages && !loading) {
		return (
			<div
				className={cn(
					"relative w-full h-96 bg-gray-200 flex items-center justify-center",
					className
				)}
			>
				<p className="text-gray-500">No images to display</p>
			</div>
		);
	}

	return (
		<div
			ref={containerRef}
			className={cn(
				"relative overflow-hidden w-full h-full rounded-lg responsive-image-container",
				className
			)}
			role="img"
			aria-label="Image carousel"
			{...props}
		>
			{/* Loading State */}
			{loading && <LoadingIndicator />}

			{/* Children Content (Overlay content) */}
			{!loading && children && <div className="relative z-30">{children}</div>}

			{/* Background Overlay */}
			{!loading && overlay && (
				<div
					className={cn(
						"absolute inset-0 z-20",
						"bg-gradient-to-b from-black/30 via-black/20 to-black/50",
						overlayClassName
					)}
				/>
			)}

			{/* Image Slider */}
			{!loading && currentImage && (
				<AnimatePresence mode="wait">
					<motion.div
						key={`${currentIndex}-${currentImage.src}`}
						initial="initial"
						animate="visible"
						exit="exit"
						variants={slideVariants}
						className="absolute inset-0 z-10"
						style={{
							// Performance optimizations
							willChange: "transform, opacity",
							backfaceVisibility: "hidden",
							transform: "translateZ(0)", // Force GPU acceleration
						}}
					>
						<Image
							src={currentImage.src}
							alt={currentImage.alt}
							fill
							priority={currentImage.priority}
							sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 100vw"
							quality={85}
							className={cn(
								"object-cover transition-transform duration-300",
								// Responsive object positioning
								"object-center", // Mobile
								"sm:object-center", // Tablet
								"lg:object-center" // Desktop
							)}
							style={{
								objectPosition: "center center",
							}}
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
							onError={(e) => {
								console.error("Image failed to load:", currentImage.src);
								// Handle image load error gracefully
								e.target.style.display = "none";
							}}
							onLoad={() => {
								// Preload next images for better performance
								if (preloadCount > 0) {
									for (let i = 1; i <= preloadCount; i++) {
										const nextIndex =
											(currentIndex + i) % validatedImages.length;
										const nextImage = validatedImages[nextIndex];
										if (nextImage && nextImage.src) {
											const link = document.createElement("link");
											link.rel = "preload";
											link.as = "image";
											link.href = nextImage.src;
											document.head.appendChild(link);
										}
									}
								}
							}}
						/>
					</motion.div>
				</AnimatePresence>
			)}

			{/* Navigation Dots */}
			{!loading && validatedImages.length > 1 && (
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
					{validatedImages.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={cn(
								"w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
								"focus:outline-none focus:ring-2 focus:ring-white/50",
								index === currentIndex
									? "bg-white scale-125"
									: "bg-white/50 hover:bg-white/75"
							)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}

			{/* Custom Styles */}
			<style jsx>{aspectRatioStyles}</style>
		</div>
	);
};
