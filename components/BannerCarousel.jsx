"use client";

import React, { useState } from "react";
import { ImagesSlider } from "@/components/ui/ImagesSlider";
import { motion } from "framer-motion";

// สร้าง Skeleton component
const BannerSkeleton = () => (
	<div className="relative md:mt-[-36px] mt-[-16px] md:h-[50rem] h-[30rem] lg:top-14 bg-gradient-to-b from-gray-800 to-gray-900 animate-pulse flex flex-col justify-center items-center">
		<div className="h-16 w-3/4 md:h-20 md:w-2/3 bg-gray-700/50 rounded-lg mb-4"></div>
		<div className="h-16 w-2/3 md:h-20 md:w-1/2 bg-gray-700/50 rounded-lg mb-8"></div>
		<div className="h-10 w-40 bg-gray-700/50 rounded-full"></div>
	</div>
);

const BannerCarousel = () => {
	const [imagesLoaded, setImagesLoaded] = useState(false);

	const bannerImages = [
		{ src: "/images/banner-1.jpg", alt: "Banner 1" },
		{ src: "/images/banner-2.jpg", alt: "Banner 2" },
		{ src: "/images/banner-3.jpg", alt: "Banner 3" },
		{ src: "/images/banner-4.jpg", alt: "Banner 4" },
		{ src: "/images/banner-5.jpg", alt: "Banner 5" },
		{ src: "/images/banner-6.jpg", alt: "Banner 6" },
	];

	const handleImagesLoaded = () => {
		setImagesLoaded(true);
	};

	return (
		<>
			{!imagesLoaded && <BannerSkeleton />}

			<div
				className={`relative md:mt-[-36px] mt-[-16px] ${
					!imagesLoaded ? "hidden" : ""
				}`}
			>
				<ImagesSlider
					className="md:h-[50rem] h-[30rem] lg:top-14 z-20"
					images={bannerImages}
					mobileAspectRatio="3/4"
					onImagesLoaded={handleImagesLoaded}
				>
					<motion.div
						initial={{
							opacity: 0,
							y: -80,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.6,
						}}
						className="z-50 flex flex-col justify-center items-center px-4"
					>
						<motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 ">
							The Art of Waiting <br />
							The Reward of Tasting
						</motion.p>
						<button className="px-4 py-2 backdrop-blur-sm border btn-gold gold-shine-text mx-auto text-center rounded-full relative mt-4">
							<span>Our Collection. →</span>
							<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
						</button>
					</motion.div>
				</ImagesSlider>
			</div>
		</>
	);
};

export default BannerCarousel;
