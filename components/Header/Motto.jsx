import { motion } from "framer-motion";

export const Motto = () => (
	<motion.h2
		className="font-semibold transition-all duration-500 ease-out text-xl"
		initial={{ opacity: 0, y: -10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{
			duration: 0.6,
			ease: "easeOut",
		}}
		style={{
			background:
				"linear-gradient(90deg, hsl(36, 40%, 50%) 0%, hsl(45, 90%, 65%) 50%, hsl(36, 40%, 50%) 100%)",
			backgroundSize: "200% auto",
			color: "transparent",
			WebkitBackgroundClip: "text",
			backgroundClip: "text",
			// Control animation timing to prevent conflicts
			animation: "gold-shimmer 8s linear infinite",
		}}
	>
		"THE WONDER OF SIAMESE WISDOM TEA"
	</motion.h2>
);
