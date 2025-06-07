"use client";
import React from "react";
import ZoomFadeBanner from "@/components/ZoomFadeBanner";
import AboutSection from "@/components/AboutSection";
import OurStorySection from "@/components/OurStorySection";
import ProductPreview from "@/components/ProductPreview";
import Contact from "@/components/Contact";

const HomePage = () => {
	return (
		<>
			<ZoomFadeBanner />
			<AboutSection />
			<OurStorySection />
			<ProductPreview />
			<Contact />
		</>
	);
};

export default HomePage;
