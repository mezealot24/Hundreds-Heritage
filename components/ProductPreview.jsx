import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const teaCollections = [
	{
		name: "Heritage Collection",
		description: "Ancient Siamese tea traditions",
		imageSrc: "/images/heritage-collection.jpg",
		imageAlt:
			"Traditional Thai tea ceremony with ornate teapots and cups on a wooden table.",
		href: "/collections/heritage",
	},
	{
		name: "Wellness Blends",
		description: "Herbal remedies for mind & body",
		imageSrc: "/images/wellness-collection.jpg",
		imageAlt:
			"Assortment of dried herbs, flowers, and tea leaves arranged in wooden bowls.",
		href: "/collections/wellness",
	},
	{
		name: "Premium Single Origin",
		description: "Exceptional teas from Northern Thailand",
		imageSrc: "/images/premium-collection.jpg",
		imageAlt:
			"Lush tea plantation with morning mist rising over the hills at sunrise.",
		href: "/collections/premium",
	},
];

export default function ProductPreview() {
	return (
		<section className="w-full py-24 tea-pattern-bg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl gold-shine-text font-semibold tracking-tight mb-4">
						Curated Tea Collections
					</h2>
					<p className="text-tea-text-secondary max-w-2xl mx-auto text-lg">
						Discover our exclusive selections, handcrafted to elevate your tea
						experience
					</p>
				</div>

				<div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
					{teaCollections.map((collection, index) => (
						<motion.div
							key={collection.name}
							className="tea-card group relative rounded-xl overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<div className="aspect-square w-full overflow-hidden rounded-t-xl bg-gray-200">
								<Image
									src={collection.imageSrc}
									alt={collection.imageAlt}
									width={500}
									height={500}
									className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<div className="p-6 border-t border-tea-border-accent/20">
								<h3 className="text-xl font-semibold text-tea-text-primary mb-2">
									<Link href={collection.href} className="stretched-link">
										{collection.name}
									</Link>
								</h3>
								<p className="text-tea-text-secondary">
									{collection.description}
								</p>

								<div className="mt-6 flex items-center">
									<span className="btn-gold text-sm px-4 py-2 rounded-sm">
										Explore Collection
									</span>
									<motion.div
										className="ml-2 text-primary"
										initial={{ x: 0 }}
										whileHover={{ x: 5 }}
										transition={{ type: "spring", stiffness: 400 }}
									>
										→
									</motion.div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div className="flex justify-center mt-16">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg rounded-md transition-colors duration-200 shadow-md"
					>
						View All Collections
					</motion.button>
				</div>
			</div>
		</section>
	);
}
