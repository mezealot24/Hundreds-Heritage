"use client";

import React, { useState, useEffect } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const bannerImages = [
	{ src: "/images/banner-1.jpg", alt: "Banner 1" },
	{ src: "/images/banner-2.jpg", alt: "Banner 2" },
	{ src: "/images/banner-3.jpg", alt: "Banner 3" },
	{ src: "/images/banner-4.jpg", alt: "Banner 4" },
];

const BannerCarousel = () => {
	const [api, setApi] = useState();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className="w-full max-w-[1440px] mt-28 mx-auto px-4">
			<Card className="border-none">
				<Carousel
					setApi={setApi}
					className="relative"
					opts={{
						loop: true,
					}}
				>
					<CarouselContent>
						{bannerImages.map((image, index) => (
							<CarouselItem key={index}>
								<div className="relative aspect-[21/9]">
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className="object-contain rounded-lg"
										priority={index === 0}
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-4" />
					<CarouselNext className="right-4" />

					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
						{bannerImages.map((_, index) => (
							<button
								key={index}
								className={`w-2 h-2 rounded-full transition-all ${
									current === index ? "bg-white w-4" : "bg-white/50"
								}`}
								onClick={() => api?.scrollTo(index)}
							/>
						))}
					</div>
				</Carousel>
			</Card>
		</div>
	);
};

export default BannerCarousel;
