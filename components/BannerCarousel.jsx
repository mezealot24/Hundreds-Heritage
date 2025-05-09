"use client";

import React, { useState } from "react";
import { ImagesSlider } from "@/components/ui/ImagesSlider";
import { motion } from "framer-motion";

// สร้าง Skeleton component
const BannerSkeleton = () => (
	<div className="relative w-full h-[30rem] md:h-[40rem] lg:h-screen bg-gradient-to-b from-gray-800 to-gray-900 animate-pulse flex flex-col justify-center items-center">
		<div className="h-16 w-3/4 md:h-20 md:w-2/3 bg-gray-700/50 rounded-lg mb-4"></div>
		<div className="h-16 w-2/3 md:h-20 md:w-1/2 bg-gray-700/50 rounded-lg mb-8"></div>
		<div className="h-10 w-40 bg-gray-700/50 rounded-full"></div>
	</div>
);

const BannerCarousel = () => {
	const [imagesLoaded, setImagesLoaded] = useState(false);

	const bannerImages = [
		{ src: "/images/banner/banner-1.webp", alt: "Banner 1" },
		{ src: "/images/banner/banner-2.webp", alt: "Banner 2" },
		{ src: "/images/banner/banner-3.webp", alt: "Banner 3" },
		{ src: "/images/banner/banner-4.webp", alt: "Banner 4" },
		{ src: "/images/banner/banner-5.webp", alt: "Banner 5" },
		{ src: "/images/banner/banner-6.webp", alt: "Banner 6" },
	];

	const handleImagesLoaded = () => {
		setImagesLoaded(true);
	};

	return (
		<>
			{!imagesLoaded && <BannerSkeleton />}

			<div className={`relative w-full  ${!imagesLoaded ? "hidden" : ""}`}>
				<ImagesSlider
					className="w-full h-[30rem] md:h-[50rem] lg:h-screen z-20"
					images={bannerImages}
					mobileAspectRatio="3/4"
					onImagesLoaded={handleImagesLoaded}
				>
					<motion.div
						initial={{ opacity: 0, y: -80 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="z-50 flex flex-col justify-center items-center px-4"
					>
						{/* ปรับเนื้อหาหรือปุ่มเพิ่มเติมได้ที่นี่ */}
					</motion.div>
				</ImagesSlider>
			</div>
		</>
	);
};

export default BannerCarousel;
