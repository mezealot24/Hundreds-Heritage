"use client";
import React, { useState, useEffect } from "react";

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
		<div className="relative w-full h-screen radial-gradient-bg overflow-hidden z-10">
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl">
				{/* Container สำหรับกล่องชาทั้งหมด */}
				<div className="relative h-[28rem] mt-32">
					{teaBoxes.map((tea, index) => {
						const centerOffset = index - 4;
						const xOffset = centerOffset * (index >= 4 ? 140 : 120);

						return (
							<div
								key={tea.id}
								className={`absolute transition-all duration-700 ease-out
                              ${
																isLoaded
																	? "opacity-100 translate-y-0"
																	: "opacity-0 translate-y-12"
															}`}
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
									className="w-60 h-80 object-contain bg-transparent outline-none border-none"
								/>
							</div>
						);
					})}
				</div>

				{/* โต๊ะไม้ - ปรับความสูงและตำแหน่ง */}
				<div className="absolute bottom-0 w-full -z-10">
					<div className="w-full h-28 rounded-lg" />
					<img
						src="images/hero/table-surface.png"
						alt="Table-Surface"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>

			{/* พร็อพประกอบ */}
			<div className="absolute bottom-0 w-full">
				<div className="relative h-24">
					{/* ดอกไม้และใบไม้ */}
					<div className="absolute left-8 bottom-4 w-12 h-12 bg-yellow-300 rounded-full animate-bounce" />
					<div className="absolute right-8 bottom-4 w-12 h-12 bg-green-500 rounded-full animate-pulse" />

					{/* กาน้ำชา */}
					<div className="absolute right-1/4 bottom-8 w-16 h-16 bg-gray-100 rounded-lg transform -rotate-12" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
