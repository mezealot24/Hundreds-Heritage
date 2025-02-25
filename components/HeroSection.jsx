"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const teaBoxes = [
		{
			id: 1,
			name: "Peppermint Bliss",
			image: "/images/hero/peppermint-bliss.svg",
		},

		{
			id: 2,
			name: "Bhuddha Bless",
			image: "/images/hero/buddha-bless.png",
		},

		{
			id: 3,
			name: "Ginger Spice",
			image: "/images/hero/ginger_spice.svg",
		},
		{
			id: 4,
			name: "Please Me",
			image: "/images/hero/please-me.png",
		},
		{
			id: 5,
			name: "Yellow Sapphire",
			image: "/images/hero/yellow-sapphire.png",
		},
		{
			id: 6,
			name: "Tom Yum Tea",
			image: "/images/hero/tom-yum-tea.svg",
		},
		{
			id: 7,
			name: "Siam Lady",
			image: "/images/hero/siam-lady.svg",
		},
		{ id: 8, name: "Siam Arun", image: "/images/hero/siam-arun.svg" },
	];

	return (
		<section className="relative w-full h-[calc(100vh-27vh)] hidden lg:block  radial-gradient-bg ">
			<div className="container mx-auto h-full relative">
				{/* Logo */}
				<motion.div
					className="absolute left-1/2 top-0 w-64 z-20"
					initial={{
						opacity: 0,
						scale: 1.2,
						x: "-50%", // ใช้ x แทน -translate-x-1/2
					}}
					animate={{
						opacity: 1,
						scale: 1,
						x: "-50%",
					}}
					transition={{
						duration: 1.2,
						ease: "easeOut",
					}}
				>
					<img
						src="/images/logo_HH.svg"
						alt="Hundreds Heritage Logo"
						className="w-full h-auto"
					/>
				</motion.div>

				{/* Tea Boxes Container */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full max-w-7xl">
					<div className="relative h-[28rem]">
						{teaBoxes.map((tea, index) => {
							const centerOffset = index - 4;
							const xOffset = centerOffset * (index >= 4 ? 140 : 120);

							return (
								<div
									key={tea.id}
									className={`absolute transition-all duration-700 ease-out
										${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
									style={{
										left: `calc(50% + ${xOffset}px)`,
										transform: `translateX(-50%) translateY(0%) scale(${
											index === 4 ? 1.05 : 1 - Math.abs(centerOffset) * 0.05
										})`,
										zIndex:
											index === 4
												? 20
												: index >= 4
												? 8 - index
												: 10 - Math.abs(centerOffset),
										transitionDelay: `${index * 100}ms`,
									}}
								>
									<img
										src={tea.image}
										alt={tea.name}
										className="w-60 h-80 object-contain"
									/>
								</div>
							);
						})}
					</div>

					{/* Table Surface */}
					<div className="absolute bottom-0 w-full">
						<div className="w-full h-28 rounded-lg" />
						<img
							src="/images/hero/table-surface.png"
							alt="Table Surface"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
