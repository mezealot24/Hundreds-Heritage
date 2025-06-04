"use client";
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
		<h2
			className={`brand-heading transition-all duration-500 opacity-100 transform translate-y-0 ${
				isScrolled ? "text-lg" : "text-xl"
			}`}
		>
			"THE WONDER OF SIAMESE WISDOM TEA"
		</h2>
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
						<img
							src="/images/logo_HH.svg"
							alt="Hundreds Heritage"
							className="transition-all duration-300 h-24 w-auto gold-shine-svg hover:scale-105"
						/>
					</Link>

					{/* Top Row */}
					<div className="col-span-2 px-4 h-16">
						<div className="flex-grow flex justify-center items-center">
							<Motto isScrolled={false} />

							{/* Social Icons */}
							<div className="flex items-center justify-end space-x-4">
								{socialIcons.map(({ Icon, href }, index) => (
									<a
										key={href}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-tea-text-secondary hover:text-primary hover:scale-110 transition duration-300 opacity-0 translate-x-5 animate-fade-in-right"
										style={{ animationDelay: `${index * 100}ms` }}
									>
										<Icon size={26} stroke={1.5} />
									</a>
								))}
							</div>
						</div>
					</div>
					{/* Bottom Row */}
					<div className="flex px-4 h-16">
						{/* Logo */}
						<Link href="/" className="flex-shrink-0 w-auto">
							<img
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
										<div
											key={item.title}
											onMouseEnter={() => setActiveItem(item.title)}
											onMouseLeave={() => setActiveItem(null)}
											className="relative"
										>
											<Link
												href={item.href}
												className="text-tea-text-secondary font-semibold hover:text-primary transition-colors px-2 py-1"
											>
												{item.title}
											</Link>
											{activeItem === item.title && (
												<div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-fade-in transition-opacity duration-200" />
											)}
										</div>
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
