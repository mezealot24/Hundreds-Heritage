"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
	images,
	children,
	overlay = true,
	overlayClassName,
	className,
	autoplay = true,
	mobileAspectRatio = "4/3", // เพิ่มตัวเลือกสำหรับอัตราส่วนภาพบนมือถือ
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(false);
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

	useEffect(() => {
		loadImages();
	}, []);

	const loadImages = () => {
		setLoading(true);
		const loadPromises = images.map((image) => {
			// Check if image is an object with src property or a direct string URL
			const imageUrl =
				typeof image === "object" && image.src ? image.src : image;

			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = imageUrl;
				img.onload = () => resolve(image); // Resolve with original image (object or string)
				img.onerror = reject;
			});
		});

		Promise.all(loadPromises)
			.then((loadedImages) => {
				setLoadedImages(loadedImages);
				setLoading(false);
			})
			.catch((error) => console.error("Failed to load images", error));
	};

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
		if (autoplay) {
			interval = setInterval(() => {
				handleNext();
			}, 5000);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			clearInterval(interval);
		};
	}, []);

	// New animation variants for fade in/out with zoom
	const fadeZoomVariants = {
		initial: {
			opacity: 0,
			scale: 1,
		},
		visible: {
			opacity: 1,
			scale: 1.05, // Subtle zoom effect
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

	const areImagesLoaded = loadedImages.length > 0;

	// Get current image URL regardless of whether it's an object or string
	const getCurrentImageUrl = () => {
		const currentImage = loadedImages[currentIndex];
		return typeof currentImage === "object" && currentImage.src
			? currentImage.src
			: currentImage;
	};

	// Get alt text if available
	const getCurrentImageAlt = () => {
		const currentImage = loadedImages[currentIndex];
		return typeof currentImage === "object" && currentImage.alt
			? currentImage.alt
			: "";
	};

	return (
		<div
			className={cn(
				"overflow-hidden h-full w-full relative flex items-center justify-center z-30",
				className
			)}
		>
			{areImagesLoaded && children}
			{areImagesLoaded && overlay && (
				<div
					className={cn("absolute inset-0 bg-black/60 z-20", overlayClassName)}
				/>
			)}
			{areImagesLoaded && (
				<AnimatePresence mode="wait">
					<motion.img
						key={currentIndex}
						src={getCurrentImageUrl()}
						alt={getCurrentImageAlt()}
						initial="initial"
						animate="visible"
						exit="exit"
						variants={fadeZoomVariants}
						className={cn(
							"image h-full w-full absolute inset-0 object-cover z-10",
							// ปรับตำแหน่งและสัดส่วนของรูปภาพตามขนาดหน้าจอ
							"md:object-center", // บนจอขนาดกลางและใหญ่ใช้ object-center
							"object-center" // ค่าเริ่มต้นสำหรับมือถือ
							// สามารถปรับเพิ่มเติมตามต้องการได้
						)}
						style={{
							// ปรับอัตราส่วนของรูปภาพเฉพาะบนอุปกรณ์มือถือ
							"--mobile-aspect-ratio": mobileAspectRatio,
						}}
					/>
				</AnimatePresence>
			)}

			{/* เพิ่ม CSS สำหรับควบคุมอัตราส่วนของรูปภาพบนมือถือ */}
			<style jsx global>{`
				@media (max-width: 768px) {
					.image {
						aspect-ratio: var(--mobile-aspect-ratio, 4/3);
						height: auto !important;
						max-height: 100%;
						width: 100%;
					}
				}
			`}</style>
		</div>
	);
};
