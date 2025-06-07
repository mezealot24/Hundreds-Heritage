import Link from "next/link";
import { motion } from "framer-motion";

export const Logo = ({ isScrolled }) => (
	<Link href="/" className="flex items-center justify-end w-full">
		<motion.img
			src="/images/logo_HH.svg"
			alt="Hundreds Heritage"
			className="transition-all duration-500 ease-out h-32 w-auto"
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.2 },
			}}
			// Remove conflicting animations
			style={{
				filter: isScrolled
					? "brightness(0.9) contrast(1.1) saturate(1.05)"
					: "brightness(0.85) contrast(1.2) saturate(1.1)",
			}}
		/>
	</Link>
);
