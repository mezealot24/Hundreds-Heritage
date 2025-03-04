import { motion } from "framer-motion";

export const Motto = () => (
	<motion.h2
		className="font-semibold gold-shine-text transition-all duration-300 text-xl"
		initial={{ opacity: 0, y: -20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		"THE WONDER OF SIAMESE WISDOM TEA"
	</motion.h2>
);
