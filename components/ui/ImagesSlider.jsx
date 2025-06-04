"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const ImagesSlider = ({
	images,
	children,
	overlay = true,
	overlayClassName,
	className,
	autoplay = true,
	mobileAspectRatio = "4/3",
	onImagesLoaded,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [loadedImages, setLoadedImages] = useState([]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
		);
	};

	// Process images on component mount
	useEffect(() => {
		// Since we're using Next.js Image, we don't need to manually preload
		// but we'll still keep track of images for our slider
		setLoadedImages(images);

		// Immediately set loading to false since Next.js Image handles loading
		setLoading(false);
		if (typeof onImagesLoaded === "function") {
			onImagesLoaded(images);
		}
	}, [images, onImagesLoaded]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "ArrowRight") {
				handleNext();
			} else if (event.key === "ArrowLeft") {
				handlePrevious();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		// autoplay
		let interval;
		if (autoplay && !loading) {
			interval = setInterval(() => {
				handleNext();
			}, 5000);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			clearInterval(interval);
		};
	}, [loading]);

	// Animation variants for fade in/out with zoom
	const fadeZoomVariants = {
		initial: {
			opacity: 0,
			scale: 1,
		},
		visible: {
			opacity: 1,
			scale: 1.05,
			transition: {
				opacity: { duration: 2, ease: "easeInOut" },
				scale: { duration: 5, ease: "linear" },
			},
		},
		exit: {
			opacity: 0,
			transition: {
				opacity: { duration: 1, ease: "easeInOut" },
			},
		},
	};

	const areImagesLoaded = loadedImages.length > 0 && !loading;

	// Get current image data
	const getCurrentImage = () => {
		const currentImage = loadedImages[currentIndex];
		if (!currentImage) return null;

		return {
			src:
				typeof currentImage === "object" && currentImage.src
					? currentImage.src
					: currentImage,
			alt:
				typeof currentImage === "object" && currentImage.alt
					? currentImage.alt
					: "",
		};
	};

	// Loading indicator component
	const LoadingIndicator = () => (
		<div className="absolute inset-0 bg-gray-900/80 z-40 flex flex-col items-center justify-center">
			<div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
				<div
					className="h-full bg-emerald-500 transition-all duration-300 ease-out"
					style={{ width: `100%` }}
				></div>
			</div>
			<div className="text-gray-300 mt-4 text-sm">กำลังโหลด...</div>
		</div>
	);

	const currentImage = getCurrentImage();

	return (
		<div
			className={cn(
				"relative overflow-hidden w-full h-full rounded-lg",
				className
			)}
		>
			{loading && <LoadingIndicator />}

			{areImagesLoaded && children}

			{areImagesLoaded && overlay && (
				<div
					className={cn("absolute inset-0 bg-black/60 z-20", overlayClassName)}
				/>
			)}

			{areImagesLoaded && currentImage && (
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial="initial"
						animate="visible"
						exit="exit"
						variants={fadeZoomVariants}
						className="h-full w-full absolute inset-0 z-10"
					>
						<Image
							src={currentImage.src}
							alt={currentImage.alt}
							fill
							priority={currentIndex === 0} // ให้ priority กับรูปแรก
							sizes="100vw"
							quality={85}
							className={cn(
								"object-cover",
								"md:object-center",
								"object-center"
							)}
							style={{
								objectPosition: "center center",
							}}
						/>
					</motion.div>
				</AnimatePresence>
			)}

			{/* Use CSS custom properties for mobile aspect ratio */}
			<style jsx global>{`
				.image-container {
					/* Default styles */
				}

				@media (max-width: 768px) {
					.image-container {
						aspect-ratio: ${mobileAspectRatio};
						height: auto !important;
						max-height: 100%;
						width: 100%;
					}
				}
			`}</style>
		</div>
	);
};
