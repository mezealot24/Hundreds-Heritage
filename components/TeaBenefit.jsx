import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardTitle, CardDescription } from "@/components/ui/card";

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
		<section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20">
			<h1 className="text-4xl lg:text-5xl gold-shine-text font-semibold tracking-tight leading-tight text-center pb-12">
				Elevate Your Tea Experience
			</h1>

			<BentoGrid className="md:auto-rows-[450px]">
				{benefitData.map((benefit) => (
					<BentoGridItem
						key={benefit.id}
						className={benefit.className}
						title={benefit.title}
						description={benefit.description}
						header={
							<motion.div
								className="relative w-full h-full overflow-hidden rounded-xl"
								initial={
									benefit.id === 1
										? { x: -100, opacity: 0 }
										: benefit.id === 2
										? { y: -100, opacity: 0 }
										: benefit.id === 3
										? { x: 100, opacity: 0 }
										: { y: 100, opacity: 0 }
								}
								whileInView={{ x: 0, y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: benefit.id * 0.2 }}
							>
								<Image
									src={benefit.image}
									alt={benefit.title}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<motion.div
									className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm text-white hidden md:block"
									variants={{
										initial: { y: "100%", opacity: 0 },
										hover: { y: 0, opacity: 1 },
									}}
									initial="initial"
									whileHover="hover"
									transition={{ duration: 0.3 }}
								>
									<CardTitle className="text-white">{benefit.title}</CardTitle>
									<CardDescription className="text-gray-200">
										{benefit.description}
									</CardDescription>
								</motion.div>
							</motion.div>
						}
					/>
				))}
			</BentoGrid>
		</section>
	);
};

export default TeaBenefit;
