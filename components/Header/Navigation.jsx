import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Define navigation items
export const navItems = [
	{ href: "#background", label: "Background" },
	{ href: "#our-story", label: "Our Story" },
	{ href: "#our-collection", label: "Our Collection" },
	{ href: "#contact-us", label: "Contact Us" },
];

// Define the component
export const Navigation = ({ mobile, onClick, className }) => {
	const [activeItem, setActiveItem] = useState(null);

	const handleClick = (e) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute("href");
		const target = document.querySelector(href || "");

		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
			if (onClick) onClick();
		}
	};

	return (
		<div className="flex-grow flex justify-center">
			<div className="h-full flex items-center w-full max-w-[800px]">
				<div
					className="flex flex-wrap gap-y-2 justify-center items-center w-full uppercase transition-all duration-300 transform"
					style={
						mobile
							? {
									animationDelay: `${index * 100}ms`,
									transform: isScrolled ? "translateY(-5vh)" : "translateY(0)",
							  }
							: undefined
					}
				>
					{navItems.map((item, index) => (
						<motion.div
							key={item.href}
							onHoverStart={() => setActiveItem(item.label)}
							onHoverEnd={() => setActiveItem(null)}
							className="relative px-4 py-1"
							style={
								mobile ? { animationDelay: `${index * 100}ms` } : undefined
							}
						>
							<a
								href={item.href}
								onClick={handleClick}
								className={`text-tea-text-secondary hover:text-primary transition-colors whitespace-nowrap group ${
									className || ""
								}`}
							>
								{item.label}
							</a>
							{activeItem === item.label && (
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

// Export default for convenience
export default Navigation;
