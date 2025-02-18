import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
	return (
		<div className="min-h-screen p-6 flex items-center justify-center">
			<div className="max-w-6xl mx-auto w-full">
				{/* Main Layout Container */}
				<div className="flex flex-col lg:flex-row gap-8 items-stretch">
					{/* Left Column - Image */}
					<div className="w-full lg:w-1/2">
						<Card className="overflow-hidden border-0 shadow-lg rounded-lg h-full">
							<CardContent className="p-0 h-full">
								<img
									src="/images/About1.jpg"
									alt="Elegant tea brewing ceremony"
									className="w-full h-full object-cover"
								/>
							</CardContent>
						</Card>
					</div>

					{/* Right Column - Content */}
					<div className="w-full lg:w-1/2 space-y-8 p-6 flex flex-col justify-center min-h-[800px]">
						<h2 className="text-4xl lg:text-5xl gold-shine-text font-semibold tracking-tight leading-tight">
							The Art of Premium Tea
						</h2>

						<p className="text-xl lg:text-2xl text-primary leading-relaxed">
							Our carefully selected teas come from the finest estates around
							the world. Each leaf is harvested at the perfect moment, ensuring
							exceptional flavor and aromatic complexity that can only come from
							generations of expertise.
						</p>

						<p className="text-lg lg:text-xl text-primary leading-relaxed">
							Whether you prefer the delicate notes of white tea, the grounded
							earthiness of pu-erh, or the soothing comfort of chamomile, our
							collection offers something for every palate and occasion.
						</p>

						<p className="text-lg lg:text-xl text-primary leading-relaxed">
							We honor traditions that span centuries while embracing modern
							brewing techniques that bring out the best in every cup. Our tea
							masters craft each blend with precision and care, creating an
							experience that transcends the ordinary.
						</p>

						<div className="pt-8">
							<button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg rounded-md transition-colors duration-200 shadow-md">
								Explore Our Collection
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
