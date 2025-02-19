import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardTitle, CardDescription } from "@/components/ui/card";

export const BentoGrid = ({ className, children }) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
				"auto-rows-[250px] md:auto-rows-[350px] lg:auto-rows-[450px]",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({ className, benefit }) => {
	return (
		<motion.div
			className={cn(
				"row-span-1 rounded-xl overflow-hidden transition-shadow duration-200 shadow-input",
				"dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-accent-foreground border border-transparent",
				className
			)}
			initial={{
				opacity: 0,
				...(benefit.id === 1
					? { x: -50 }
					: benefit.id === 2
					? { y: -50 }
					: benefit.id === 3
					? { y: 50 }
					: benefit.id === 4
					? { x: 50 }
					: { x: 50 }), // Desktop Animation
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				y: 0,
			}}
			transition={{ duration: 0.6, delay: benefit.id * 0.2 }}
			viewport={{ once: true }}
		>
			<div className="relative w-full h-full overflow-hidden rounded-xl">
				<Image
					src={benefit.image}
					alt={benefit.title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				{/* Overlay: แสดงเฉพาะ Desktop */}
				<div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white lg:block">
					<CardTitle className="text-lg md:text-xl lg:text-2xl text-white">
						{benefit.title}
					</CardTitle>
					<CardDescription className="text-sm md:text-base text-gray-200">
						{benefit.description}
					</CardDescription>
				</div>
			</div>
		</motion.div>
	);
};
