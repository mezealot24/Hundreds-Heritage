import Link from "next/link";
import { motion } from "framer-motion";

export const Logo = () => (
	<Link href="/" className="flex items-center justify-end w-full">
		<motion.img
			src="/images/logo_HH.svg"
			alt="Hundreds Heritage"
			className="transition-all duration-300 h-24 w-auto gold-shine-svg"
			whileHover={{ scale: 1.05 }}
		/>
	</Link>
);
