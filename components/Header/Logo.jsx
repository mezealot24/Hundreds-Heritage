import Link from "next/link";
import { motion } from "framer-motion";

export const Logo = ({ isScrolled }) => (
	<Link href="/" className="absolute left-0 top-4">
		<motion.img
			src="/images/logo_HH.svg"
			alt="Hundreds Heritage"
			className={`transition-all duration-300 ${
				isScrolled ? "h-20" : "h-24"
			} w-auto gold-shine-svg`}
			whileHover={{ scale: 1.05 }}
		/>
	</Link>
);
