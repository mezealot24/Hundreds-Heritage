import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			// Get current scroll position
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			// Find the section that is currently in view
			const currentSection = navItems.find((item) => {
				const section = document.querySelector(item.href);
				if (!section) return false;

				const rect = section.getBoundingClientRect();
				return (
					rect.top <= window.innerHeight / 3 &&
					rect.bottom >= window.innerHeight / 3
				);
			});

			// Update active section
			setActiveSection(currentSection ? currentSection.label : null);
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Initial check
		handleScroll();

		// Cleanup
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
									animationDelay: navItems
										.map((_, index) => `${index * 100}ms`)
										.join(", "),
									transform: activeSection
										? "translateY(-5vh)"
										: "translateY(0)",
							  }
							: undefined
					}
				>
					{navItems.map((item, index) => (
						<motion.div
							key={item.href}
							onHoverStart={() => setActiveItem(item.label)}
							onHoverEnd={() => setActiveItem(null)}
							className="relative px-4 py-1 group"
							style={
								mobile ? { animationDelay: `${index * 100}ms` } : undefined
							}
						>
							<a
								href={item.href}
								onClick={handleClick}
								className={`
                                    relative
                                    text-tea-text-secondary 
                                    transition-colors 
                                    duration-300
                                    whitespace-nowrap 
                                    ${
																			activeSection === item.label
																				? "text-gold-500"
																				: "hover:text-gold-500/70"
																		}
                                    ${className || ""}
                                `}
							>
								{item.label}
								<span
									className={`
                                        absolute 
                                        bottom-0 
                                        left-0 
                                        right-0 
                                        h-[1px] 
                                        origin-center 
                                        scale-x-0 
                                        transition-transform 
                                        duration-300 
                                        ease-out
                                        ${
																					activeSection === item.label
																						? "bg-gold-500 scale-x-100"
																						: "bg-gold-500/30 group-hover:scale-x-100"
																				}
                                    `}
								/>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navigation;
