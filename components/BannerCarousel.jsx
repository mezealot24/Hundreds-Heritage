"use client";

import React from "react";
import { ImagesSlider } from "@/components/ui/ImagesSlider";
import { motion } from "framer-motion";

const BannerCarousel = () => {
	const bannerImages = [
		{ src: "/images/banner-1.jpg", alt: "Banner 1" },
		{ src: "/images/banner-2.jpg", alt: "Banner 2" },
		{ src: "/images/banner-3.jpg", alt: "Banner 3" },
		{ src: "/images/banner-4.jpg", alt: "Banner 4" },
		{ src: "/images/banner-5.jpg", alt: "Banner 5" },
		{ src: "/images/banner-6.jpg", alt: "Banner 6" },
	];
	return (
		<div className="relative">
			<ImagesSlider
				className="md:h-[50rem] h-[30rem] top-0 md:-top-4 z-20"
				images={bannerImages}
				mobileAspectRatio="3/4" // ปรับสัดส่วนภาพสำหรับมือถือ (คุณสามารถเปลี่ยนเป็น "16/9", "1/1" หรือค่าอื่นๆ ตามต้องการ)
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
					className="z-50 flex flex-col justify-center items-center px-4" // เพิ่ม padding ด้านข้างเพื่อให้ข้อความไม่ชิดขอบจอบนมือถือ
				>
					<motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 ">
						The Art of Waiting <br />
						The Reward of Tasting
					</motion.p>
					<button className="px-4 py-2 backdrop-blur-sm border btn-gold gold-shine-text  mx-auto text-center rounded-full relative mt-4">
						<span>Our Collection. →</span>
						<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
					</button>
				</motion.div>
			</ImagesSlider>
		</div>
	);
};

export default BannerCarousel;
