"use client";
import React from "react";
import AboutSection from "@/components/AboutSection";
import ProductPreview from "@/components/ProductPreview";
import TestimonialSection from "@/components/TestimonialSection";
import BannerCarousel from "@/components/BannerCarousel";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
	return (
		<div className="w-full mx-auto">
			<HeroSection />
			<BannerCarousel />
			<AboutSection />
			<ProductPreview />
			<TestimonialSection />
		</div>
	);
};

export default HomePage;
