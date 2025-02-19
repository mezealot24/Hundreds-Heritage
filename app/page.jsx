"use client";
import React from "react";
import AboutSection from "@/components/AboutSection";
import TeaBenefit from "@/components/TeaBenefit";
import ProductPreview from "@/components/ProductPreview";
import TestimonialSection from "@/components/TestimonialSection";

const HomePage = () => {
	return (
		<>
			{/* Main Product Section */}
			<main className="w-full mx-auto px-4 py-8">
				<TeaBenefit />
				<AboutSection />
				<ProductPreview />
				<TestimonialSection />
			</main>
		</>
	);
};

export default HomePage;
