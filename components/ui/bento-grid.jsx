import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardTitle, CardDescription } from "@/components/ui/card";

const variants = {
	1: { opacity: 0, x: -50 }, // เลื่อนมาจากซ้าย
	2: { opacity: 0, y: -50 }, // เลื่อนลงมาจากบน
	3: { opacity: 0, x: 50 }, // เลื่อนมาจากขวา
	4: { opacity: 0, y: 50 }, // เลื่อนขึ้นมาจากล่าง
};

export const BentoGrid = ({ className, children }) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
				"row-span-1 rounded-xl overflow-hidden transition-shadow duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-accent-foreground border border-transparent",
				className
			)}
			initial={variants[benefit.id]}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration: 0.6, delay: benefit.id * 0.2 }}
			viewport={{ once: true }}
		>
			<div className="relative w-full h-full overflow-hidden rounded-xl group">
				<Image
					src={benefit.image}
					alt={benefit.title}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-110"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<motion.div className="absolute bottom-0 left-0 right-0 h-[80px] bg-black/60 p-4 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<CardTitle className="text-white">{benefit.title}</CardTitle>
					<CardDescription className="text-gray-200">
						{benefit.description}
					</CardDescription>
				</motion.div>
			</div>
		</motion.div>
	);
};
