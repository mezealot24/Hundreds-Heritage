import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const navItems = [
	{ title: "Background", href: "/background" },
	{ title: "Our Story", href: "/our-story" },
	{ title: "Our Collection", href: "/collection" },
	{ title: "Contact Us", href: "/contact" },
];

export const Navigation = () => {
	const [activeItem, setActiveItem] = useState(null);

	return (
		<div className="flex-grow flex justify-center">
			<div className="h-full flex items-center w-full max-w-[800px]">
				<div className="flex flex-wrap gap-y-2 justify-center items-center w-full">
					{navItems.map((item) => (
						<motion.div
							key={item.title}
							onHoverStart={() => setActiveItem(item.title)}
							onHoverEnd={() => setActiveItem(null)}
							className="relative px-4 py-1"
						>
							<Link
								href={item.href}
								className="text-tea-text-secondary hover:text-primary transition-colors whitespace-nowrap"
							>
								{item.title}
							</Link>
							{activeItem === item.title && (
								<motion.div
									className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary"
									layoutId="navbar-underline"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								/>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
