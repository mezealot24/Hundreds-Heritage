"use client";

import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
	SheetClose,
} from "@/components/ui/sheet";

import Link from "next/link";
import { IconMenuDeep } from "@tabler/icons-react";
import { navItems } from "@/components/Header/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SocialIcons } from "@/components/Header/SocialIcons";
import { useState } from "react";

const mobileNavVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.1,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
};

const navItemVariants = {
	hidden: { opacity: 0, x: 20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20,
		},
	},
};

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavClick = (e) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute("href");
		const target = href ? document.querySelector(href) : null;

		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			setIsOpen(false); // Close sheet after clicking
		}
	};

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger
				aria-label="Open Navigation Menu"
				className="flex justify-center items-center touch-manipulation active:scale-95 transition-transform"
			>
				<IconMenuDeep className="text-[32px] text-yellow-100" />
			</SheetTrigger>
			<SheetContent
				className="flex flex-col bg-primary backdrop-blur-sm overflow-y-auto"
				side="right"
			>
				<SheetTitle className="sr-only">Navigation Menu</SheetTitle>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={mobileNavVariants}
							className="flex flex-col h-full"
						>
							{/* Logo */}
							<div className="mt-12 mb-16 text-center">
								<SheetClose asChild>
									<Link href="/">
										<motion.img
											src="/images/logo_HH.svg"
											alt="Hundreds Heritage"
											className="h-[250px] w-auto mx-auto gold-shine-svg"
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{
												duration: 0.3,
												type: "spring",
												stiffness: 300,
											}}
										/>

										<motion.h2
											className="text-md font-semibold gold-shine-text mt-4"
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3, delay: 0.2 }}
										>
											"THE WONDER OF SIAMESE WISDOM TEA"
										</motion.h2>
									</Link>
								</SheetClose>
							</div>

							{/* Nav Links */}
							<nav className="flex flex-col justify-center items-center gap-6 mb-8 flex-grow">
								{navItems.map((item, index) => (
									<motion.a
										key={index}
										href={item.href}
										onClick={handleNavClick}
										variants={navItemVariants}
										className="text-tea-text-secondary text-xl uppercase 
                                            touch-manipulation active:scale-95 
                                            transition-transform hover:text-yellow-100"
									>
										{item.label}
									</motion.a>
								))}
							</nav>

							{/* Social Icons */}
							<motion.div
								className="flex justify-center items-center gap-6 mb-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.4 }}
							>
								<SocialIcons />
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
