"use client";
import React from "react";
import ZoomFadeBanner from "../components/ZoomFadeBanner";
import AboutSection from "../components/AboutSection";
import OurstorySection from "../components/OurstorySection";
import ProductPreview from "../components/ProductPreview";
import Contact from "../components/Contact";

const HomePage = () => {
	return (
		<>
			<ZoomFadeBanner />
			<AboutSection />
			<OurstorySection />
			<ProductPreview />
			<Contact />
		</>
	);
};

export default HomePage;
