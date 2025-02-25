import { motion } from "framer-motion";

export const Motto = ({ isScrolled }) => (
	<motion.p
		className={`text-tea-text-secondary font-playfair transition-all duration-300 ${
			isScrolled ? "text-lg" : "text-xl"
		}`}
		initial={{ opacity: 0, y: -20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		"THE WONDER OF SIAMES WISDOM TEA"
	</motion.p>
);
