"use client";
import React from "react";
import AboutSection from "@/components/AboutSection";
import ProductPreview from "@/components/ProductPreview";
import BannerCarousel from "@/components/BannerCarousel";
import OurStorySection from "@/components/OurstorySection";
import ContactUs from "@/components/Contact";

const HomePage = () => {
	return (
		<div className="w-full mx-auto">
			<BannerCarousel />
			<AboutSection />
			<OurStorySection />
			<ProductPreview />
			<ContactUs />
		</div>
	);
};

export default HomePage;
