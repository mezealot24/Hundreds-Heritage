import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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
			<h2 className="text-2xl lg:text-3xl gold-shine-text font-semibold tracking-tight leading-tight text-center pb-12">
				"Indulge in the Art of Tea: A Symphony of Flavors Awaits"
			</h2>

			<BentoGrid className="md:auto-rows-[450px]">
				{benefitData.map((benefit) => (
					<BentoGridItem
						key={benefit.id}
						className={benefit.className}
						benefit={benefit}
					/>
				))}
			</BentoGrid>
		</section>
	);
};

export default TeaBenefit;
