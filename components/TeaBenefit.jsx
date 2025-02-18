import { motion } from "framer-motion";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

const benefitData = [
	{
		id: 1,
		image: "/images/traditional.jpg",
		title: "Traditional Heritage",
		description: "Ancient Siamese wisdom meets modern wellness",
		className: "md:col-span-2",
	},
	{
		id: 2,
		image: "/images/organic.jpg",
		title: "Premium Ingredients",
		description: "100% organic ginger, lemongrass, and lemon",
		className: "md:col-span-1",
	},
	{
		id: 3,
		image: "/images/handpicked.jpg",
		title: "Handpicked Quality",
		description: "Carefully selected from Northern Thailand",
		className: "md:col-span-1",
	},
	{
		id: 4,
		image: "/images/wellness.jpg",
		title: "Holistic Wellness",
		description: "Natural healing for body and soul",
		className: "md:col-span-2",
	},
];

const TeaBenefit = () => {
	return (
		<section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20">
			<h1 className="text-4xl lg:text-5xl gold-shine-text font-semibold tracking-tight leading-tight text-center pb-12">
				Elevate Your Tea Experience
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{benefitData.map((benefit) => (
					<motion.div
						key={benefit.id}
						className={`relative overflow-hidden rounded-lg ${benefit.className}`}
						whileHover="hover"
						initial="initial"
					>
						<Card className="h-full">
							<div className="relative h-[300px] overflow-hidden">
								<Image
									src={benefit.image}
									alt={benefit.title}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
							{/* Mobile and Tablet View - Static Title */}
							<CardHeader className="md:hidden">
								<CardTitle>{benefit.title}</CardTitle>
								<CardDescription>{benefit.description}</CardDescription>
							</CardHeader>
							{/* Desktop View - Hover Effect */}
							<motion.div
								className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm text-white hidden md:block"
								variants={{
									initial: { y: "100%", opacity: 0 },
									hover: { y: 0, opacity: 1 },
								}}
								transition={{ duration: 0.3 }}
							>
								<CardTitle className="text-white">{benefit.title}</CardTitle>
								<CardDescription className="text-gray-200">
									{benefit.description}
								</CardDescription>
							</motion.div>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default TeaBenefit;
