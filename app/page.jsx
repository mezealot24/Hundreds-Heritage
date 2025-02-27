"use client";
import React from "react";
import AboutSection from "@/components/AboutSection";
import ProductPreview from "@/components/ProductPreview";
import TestimonialSection from "@/components/TestimonialSection";
import BannerCarousel from "@/components/BannerCarousel";
import OurStorySection from "@/components/OurstorySection";

const HomePage = () => {
	return (
		<div className="w-full mx-auto">
			<BannerCarousel />
			<AboutSection />
			<OurStorySection />
			<ProductPreview />
			<TestimonialSection />
		</div>
	);
};

export default HomePage;
