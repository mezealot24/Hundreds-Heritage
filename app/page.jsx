"use client";
import React from "react";
import AboutSection from "@/components/AboutSection";
import TeaBenefit from "@/components/TeaBenefit";

const HomePage = () => {
	return (
		<>
			{/* Main Product Section */}
			<main className="w-full mx-auto px-4 py-8">
				<TeaBenefit />
				<AboutSection />
			</main>
		</>
	);
};

export default HomePage;
