import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

// ProductGrid Component with ShadCN Carousel for Mobile
const ProductGrid = ({
	products,
	handleProductHover,
	containerVariants,
	itemVariants,
}) => {
	const [isMobile, setIsMobile] = useState(false);

	// Check if we're on mobile
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initial check
		checkIfMobile();

		// Add event listener for window resize
		window.addEventListener("resize", checkIfMobile);

		// Cleanup
		return () => {
			window.removeEventListener("resize", checkIfMobile);
		};
	}, []);

	// Render mobile carousel using ShadCN
	if (isMobile) {
		return (
			<div className="w-full max-w-md mx-auto mt-6 mb-10">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full"
				>
					<CarouselContent>
						{products.map((product) => (
							<CarouselItem
								key={product.id}
								className="pl-4 md:basis-1/2 lg:basis-1/3"
							>
								<div
									className="p-1"
									onMouseEnter={() => handleProductHover(product.id)}
									onMouseLeave={() => handleProductHover(null)}
								>
									<ProductCard product={product} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="flex items-center justify-center gap-2 mt-4">
						<CarouselPrevious className="relative  left-auto right-auto translate-x-0 bg-[#746835] hover:bg-[#A48957] border-none text-white" />
						<CarouselNext className="relative  left-auto right-auto translate-x-0 bg-[#746835] hover:bg-[#A48957] border-none text-white" />
					</div>
				</Carousel>
			</div>
		);
	}

	// Render desktop grid
	return (
		<motion.div
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{products.map((product) => (
				<motion.div
					key={product.id}
					variants={itemVariants}
					className="relative"
					onMouseEnter={() => handleProductHover(product.id)}
					onMouseLeave={() => handleProductHover(null)}
				>
					<ProductCard product={product} />
				</motion.div>
			))}
		</motion.div>
	);
};

export default ProductGrid;
