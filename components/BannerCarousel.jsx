"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Skeleton component for loading state

// Default images configuration
const DEFAULT_IMAGES = [
	{
		src: "/images/banner/banner-1.webp",
		alt: "Organic Tea Plantation",
		priority: true,
	},
	{ src: "/images/banner/banner-2.webp", alt: "Premium Tea Experience" },
	{ src: "/images/banner/banner-3.webp", alt: "Traditional Tea Ceremony" },
	{ src: "/images/banner/banner-4.webp", alt: "Handcrafted Tea Process" },
	{ src: "/images/banner/banner-5.webp", alt: "Heritage Tea Collection" },
	{ src: "/images/banner/banner-6.webp", alt: "Heritage Tea Collection" },
];

// Animation variants (memoized to prevent re-creation)
const fadeZoomVariants = {
	initial: { opacity: 0, scale: 1 },
	animate: {
		opacity: 1,
		scale: 1.05,
		transition: {
			opacity: { duration: 1.5, ease: "easeInOut" },
			scale: { duration: 8, ease: "linear" },
		},
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.8, ease: "easeInOut" },
	},
};

const BannerCarousel = ({
	images = DEFAULT_IMAGES,
	autoplayDelay = 5000,
	className = "",
	children,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [api, setApi] = useState(null);

	// Memoized autoplay plugin
	const autoplayPlugin = useMemo(
		() =>
			Autoplay({
				delay: autoplayDelay,
				stopOnInteraction: true,
				stopOnMouseEnter: true,
			}),
		[autoplayDelay]
	);

	// Handle image load completion
	const handleImageLoad = useCallback(() => {
		setIsLoading(false);
	}, []);

	// Handle slide change for current index tracking
	const handleSlideChange = useCallback(() => {
		if (api) {
			setCurrentIndex(api.selectedScrollSnap());
		}
	}, [api]);

	// Setup carousel API listeners
	useEffect(() => {
		if (!api) return;

		api.on("select", handleSlideChange);
		handleSlideChange(); // Set initial index

		return () => {
			api.off("select", handleSlideChange);
		};
	}, [api, handleSlideChange]);

	// Memoized carousel options
	const carouselOptions = useMemo(
		() => ({
			loop: true,
			align: "center",
			skipSnaps: false,
			dragFree: false,
		}),
		[]
	);

	// Render the carousel
	return (
		<div className={`relative w-full ${className}`}>
			<Carousel
				setApi={setApi}
				className="w-full h-[30rem] md:h-[50rem] lg:h-screen"
				opts={carouselOptions}
				plugins={[autoplayPlugin]}
			>
				<CarouselContent className="-ml-0">
					{images.map((image, index) => (
						<CarouselItem key={`${image.src}-${index}`} className="pl-0">
							<div className="relative w-full h-[30rem] md:h-[50rem] lg:h-screen overflow-hidden">
								{/* Overlay */}
								<div className="absolute inset-0 bg-black/60 z-20" />

								{/* Animated Image Container */}
								<AnimatePresence mode="wait">
									{currentIndex === index && (
										<motion.div
											key={`motion-${index}`}
											initial="initial"
											animate="animate"
											exit="exit"
											variants={fadeZoomVariants}
											className="absolute inset-0 z-10"
										>
											<Image
												src={image.src}
												alt={image.alt}
												fill
												priority={image.priority || index === 0}
												sizes="100vw"
												quality={85}
												className="object-cover object-center"
												onLoad={index === 0 ? handleImageLoad : undefined}
												placeholder="blur"
												blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

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
			</Carousel>
		</div>
	);
};

export default BannerCarousel;
