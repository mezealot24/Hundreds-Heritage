"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
	IconBrandInstagram,
	IconBrandFacebook,
	IconBrandLine,
	IconBrandTiktok,
} from "@tabler/icons-react";
import MobileNav from "./MobileNav";

const navItems = [
	{ title: "Background", href: "#background" },
	{ title: "Our Story", href: "#our-story" },
	{ title: "Collection Blends", href: "#our-collection" },
	{ title: "Contact Us", href: "#contact-us" },
];

const socialIcons = [
	{
		Icon: IconBrandInstagram,
		href: "https://www.instagram.com/hundredsheritage_th?igsh=djNjcjMxczdo&utm_source=qr",
	},
	{
		Icon: IconBrandFacebook,
		href: "https://www.facebook.com/share/19QRjTRofu/?mibextid=wwXIfr",
	},
	{ Icon: IconBrandLine, href: "https://lin.ee/Rxte6r9" },
	{
		Icon: IconBrandTiktok,
		href: "https://www.tiktok.com/@hundredsheritage?_t=ZS-8uJMm5x0Hua&_r=1",
	},
];

const Motto = ({ isScrolled }) => {
	return (
		<motion.h2
			className={`brand-heading transition-all duration-300 ${
				isScrolled ? "text-lg" : "text-xl"
			}`}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			"THE WONDER OF SIAMESE WISDOM TEA"
		</motion.h2>
	);
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState(null);

	return (
		<>
			{/* Desktop Navbar - show on md and up */}
			<nav className="hidden lg:block fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20">
				<div className="grid grid-flow-col grid-rows-4 gap-4">
					{/* Logo space placeholder */}
					<div className="w-48 row-span-4" />
					<Link href="/" className="absolute left-0 top-4">
						<motion.img
							src="/images/logo_HH.svg"
							alt="Hundreds Heritage"
							className={`transition-all duration-300 h-24 w-auto gold-shine-svg`}
							whileHover={{ scale: 1.05 }}
						/>
					</Link>

					{/* Top Row */}
					<div className="col-span-2 px-4 h-16">
						<div className="flex-grow flex justify-center items-center">
							<Motto isScrolled={false} />

							{/* Social Icons */}
							<div className="flex items-center justify-end space-x-4">
								{socialIcons.map(({ Icon, href }, index) => (
									<motion.a
										key={href}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1 }}
										className="text-tea-text-secondary hover:text-primary transition-colors"
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: index * 0.1 }}
									>
										<Icon size={26} stroke={1.5} />
									</motion.a>
								))}
							</div>
						</div>
					</div>
					{/* Bottom Row */}
					<div className="flex px-4 h-16">
						{/* Logo */}
						<Link href="/" className="flex-shrink-0 w-auto">
							<motion.img
								src="/images/logo_HH.svg"
								alt="Hundreds Heritage"
								className="h-24 w-auto gold-shine-svg"
							/>
						</Link>

						{/* Navigation Menu Container */}
						<div className="flex-grow flex justify-center">
							<div className="h-full flex items-center w-[800px]">
								<div className="flex space-x-12 w-full justify-center -ml-12">
									{navItems.map((item) => (
										<motion.div
											key={item.title}
											onHoverStart={() => setActiveItem(item.title)}
											onHoverEnd={() => setActiveItem(null)}
											className="relative"
										>
											<Link
												href={item.href}
												className="text-tea-text-secondary font-semibold hover:text-primary transition-colors px-2 py-1"
											>
												{item.title}
											</Link>
											{activeItem === item.title && (
												<motion.div
													className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
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
					</div>
				</div>
			</nav>

			{/* Mobile Navbar - show on tablet and below */}
			<div className="block lg:hidden fixed top-0 left-0 right-0 z-50 w-full bg-background">
				<MobileNav />
			</div>
		</>
	);
};

export default Navbar;
