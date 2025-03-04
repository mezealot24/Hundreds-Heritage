"use client";

import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from "@/components/ui/sheet";

import Link from "next/link";
import { IconMenuDeep } from "@tabler/icons-react";
import { navItems } from "@/components/Header/Navigation";
import { motion } from "framer-motion";
import { SocialIcons } from "@/components/Header/SocialIcons";
import { useState } from "react";

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavClick = (e) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute("href");
		const target = document.querySelector(href || "");

		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false); // Close sheet after clicking
		}
	};

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger className="flex justify-center items-center">
				<IconMenuDeep className="text-[32px] text-yellow-100" />
			</SheetTrigger>
			<SheetContent className="flex flex-col bg-primary backdrop-blur-sm">
				<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
				{/* logo */}
				<div className="mt-12 mb-16 text-center">
					<Link href="/" onClick={() => setIsOpen(false)}>
						<motion.img
							src="/images/logo_HH.svg"
							alt="Hundreds Heritage"
							className="h-[300px] w-auto mx-auto gold-shine-svg"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						/>

						<motion.h2
							className="text-md font-semibold gold-shine-text mt-4"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							"THE WONDER OF SIAMESE WISDOM TEA"
						</motion.h2>
					</Link>
				</div>
				{/* nav links */}
				<nav className="flex flex-col justify-center items-center gap-6 mb-8">
					{navItems.map((item, index) => (
						<motion.a
							key={index}
							href={item.href}
							onClick={handleNavClick}
							className="text-tea-text-secondary text-xl uppercase"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							{item.label}
						</motion.a>
					))}
				</nav>
				{/* social icons */}
				<motion.div
					className="flex justify-center items-center gap-6 mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<SocialIcons />
				</motion.div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
