import { useState, useEffect } from "react";

const FlavorCarousel = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [activeSlide, setActiveSlide] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const flavors = [
		{
			name: "Tom Yum Tea",
			color: "#e8782e",
			image: "/images/products/tom-yum-tea.jpg",
		},
		{
			name: "Siam Arun",
			color: "#cc4e42",
			image: "/images/products/siam-arun.jpg",
		},
		{
			name: "Buddha Bless",
			color: "#70be51",
			image: "/images/products/buddha-bless.jpg",
		},
		{
			name: "Please Me",
			color: "#5bc2da",
			image: "/images/products/please-me.jpg",
		},
		{
			name: "Yellow Sapphire",
			color: "#f8d43e",
			image: "/images/products/yellow-sapphire.jpg",
		},
		{
			name: "Peppermint Bliss",
			color: "#43b370",
			image: "/images/products/peppermint-bliss.jpg",
		},
		{
			name: "Ginger Spice",
			color: "#c1a96d",
			image: "/images/products/ginger-spice.jpg",
		},
		{
			name: "Siam Lady",
			color: "#da69a7",
			image: "/images/products/siam-lady.jpg",
		},
	];

	// Auto-rotate slides every 5 seconds
	useEffect(() => {
		const timer = setInterval(() => {
			if (!isAnimating) {
				nextSlide();
			}
		}, 5000);

		return () => clearInterval(timer);
	}, [isAnimating]);

	const nextSlide = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		setActiveSlide((prev) => (prev === flavors.length - 1 ? 0 : prev + 1));
		setActiveTab((prev) => (prev === flavors.length - 1 ? 0 : prev + 1));

		setTimeout(() => {
			setIsAnimating(false);
		}, 700); // Match with transition duration
	};

	const prevSlide = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		setActiveSlide((prev) => (prev === 0 ? flavors.length - 1 : prev - 1));
		setActiveTab((prev) => (prev === 0 ? flavors.length - 1 : prev - 1));

		setTimeout(() => {
			setIsAnimating(false);
		}, 700); // Match with transition duration
	};

	const handleTabClick = (index) => {
		if (isAnimating || index === activeTab) return;

		setIsAnimating(true);
		setActiveTab(index);
		setActiveSlide(index);

		setTimeout(() => {
			setIsAnimating(false);
		}, 700); // Match with transition duration
	};

	return (
		<div className="w-full max-w-4xl mx-auto px-4">
			{/* Background Text */}
			<div className="relative mb-8 text-center">
				<h2 className="text-5xl font-bold opacity-10 uppercase tracking-wider">
					OUR COLLECTION
				</h2>
				<div className="absolute inset-0 flex items-center justify-center">
					<p className="text-lg font-medium italic text-amber-100">
						Discover the exquisite taste of Thailand's finest teas, crafted with
						ancient wisdom and modern elegance.
					</p>
				</div>
			</div>

			{/* Flavor Selection Tabs */}
			<div className="flex justify-center overflow-x-auto mb-6 py-2">
				{flavors.map((flavor, index) => (
					<button
						key={index}
						onClick={() => handleTabClick(index)}
						className={`group px-4 py-2 font-medium transition-all duration-500 text-sm whitespace-nowrap mx-1 border-b-2 ${
							activeTab === index
								? "border-current"
								: "border-transparent text-gray-300 hover:text-white"
						}`}
						style={{
							color: activeTab === index ? "#40241c" : undefined,
							borderColor: activeTab === index ? flavor.color : "transparent",
						}}
					>
						<div className="flex items-center">
							<div
								className="w-3 h-3 rounded-full mr-2 transition-transform duration-300 group-hover:scale-125"
								style={{
									backgroundColor: flavor.color,
									boxShadow:
										activeTab === index ? `0 0 8px ${flavor.color}` : "none",
								}}
							></div>
							{flavor.name}
						</div>
					</button>
				))}
			</div>

			{/* Carousel */}
			<div
				className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
				style={{ backgroundColor: "rgba(30, 20, 10, 0.5)" }}
			>
				{/* Carousel wrapper */}
				<div className="relative h-96 overflow-hidden rounded-2xl">
					{flavors.map((flavor, index) => (
						<div
							key={index}
							className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
								activeSlide === index
									? "opacity-100 transform-none"
									: index > activeSlide
									? "opacity-0 translate-x-full"
									: "opacity-0 -translate-x-full"
							}`}
						>
							<div
								className="absolute inset-0 opacity-30"
								style={{ backgroundColor: flavor.color }}
							></div>

							<div className="grid grid-cols-1 md:grid-cols-2 h-full">
								{/* Product Image */}
								<div className="flex items-center justify-center p-8">
									<img
										src={flavor.image || "/api/placeholder/400/400"}
										className="max-h-full object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
										alt={flavor.name}
										style={{
											filter: "drop-shadow(0 0 10px rgba(0,0,0,0.2))",
											maxWidth: "90%",
										}}
									/>
								</div>

								{/* Product Details */}
								<div className="flex flex-col justify-center p-8 text-white">
									<div className="mb-2">
										<span
											className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider"
											style={{ backgroundColor: flavor.color }}
										>
											{flavor.name.toUpperCase()}
										</span>
									</div>

									<p className="my-4 text-sm opacity-90">
										{flavor.longDescription ||
											`"${flavor.name}" seamlessly blends the bold, aromatic flavors of Thailand's iconic soup with the soothing, healing qualities of an artisanal herbal tea. Inspired by Thailand's beloved tradition, this tea brings together lemongrass, kaffir lime, galangal, and a refreshing touch of lemon to create a harmonious balance of spicy, sour, and savory notes.`}
									</p>

									{flavor.wellness && (
										<div className="mt-2">
											<span className="font-bold text-amber-200">
												Wellness:{" "}
											</span>
											<span>{flavor.wellness}</span>
										</div>
									)}

									{flavor.ingredients && (
										<div className="mt-1">
											<span className="font-bold text-amber-200">
												Ingredients:{" "}
											</span>
											<span>{flavor.ingredients}</span>
										</div>
									)}

									<div className="flex mt-4">
										{Array(5)
											.fill()
											.map((_, i) => (
												<div
													key={i}
													className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mx-1 opacity-80 hover:opacity-100"
												>
													<img
														src="/api/placeholder/24/24"
														alt="Certification"
														className="w-6 h-6 rounded-full"
													/>
												</div>
											))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Slider controls */}
				<button
					type="button"
					className="absolute top-1/2 -translate-y-1/2 start-4 z-30 flex items-center justify-center w-12 h-12 cursor-pointer group focus:outline-none"
					onClick={prevSlide}
				>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/30 group-hover:bg-primary/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition-all duration-300 backdrop-blur-sm">
						<svg
							className="w-4 h-4 text-white rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 1 1 5l4 4"
							/>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="absolute top-1/2 -translate-y-1/2 end-4 z-30 flex items-center justify-center w-12 h-12 cursor-pointer group focus:outline-none"
					onClick={nextSlide}
				>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/30 group-hover:bg-primary/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition-all duration-300 backdrop-blur-sm">
						<svg
							className="w-4 h-4 text-white rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m1 9 4-4-4-4"
							/>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>

			{/* Indicators */}
			<div className="flex justify-center mt-6">
				{flavors.map((flavor, index) => (
					<button
						key={index}
						type="button"
						className="w-3 h-3 rounded-full mx-1 transition-all duration-300 hover:scale-125 focus:ring-2 focus:ring-white"
						style={{
							backgroundColor:
								activeSlide === index ? flavor.color : "rgba(255,255,255,0.2)",
							transform: activeSlide === index ? "scale(1.3)" : "scale(1)",
							boxShadow:
								activeSlide === index ? `0 0 6px ${flavor.color}` : "none",
						}}
						onClick={() => handleTabClick(index)}
					></button>
				))}
			</div>
		</div>
	);
};

export default FlavorCarousel;
