"use client";
import { useState, useEffect } from "react";
import { Logo } from "./Header/Logo";
import { Motto } from "./Header/Motto";
import { Navigation } from "./Header/Navigation";
import { SocialIcons } from "./Header/SocialIcons";
import MobileNav from "./MobileNav";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/95 backdrop-blur-sm shadow-sm"
					: "bg-background/80"
			}`}
		>
			<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
				{/* Desktop Navbar */}
				<div className="hidden md:block">
					<div className="grid grid-cols-12 gap-4">
						{/* Logo Column */}
						<div className="col-span-2 relative">
							<Logo isScrolled={isScrolled} />
						</div>

						{/* Center Content */}
						<div className="col-span-8">
							{/* Top Row - Motto */}
							<div className="flex justify-center items-center h-16">
								<Motto isScrolled={isScrolled} />
							</div>
							{/* Bottom Row - Navigation */}
							<div className="flex justify-center items-center h-16">
								<Navigation />
							</div>
						</div>

						{/* Social Icons Column */}
						<div className="col-span-2 flex items-center justify-end h-16">
							<SocialIcons />
						</div>
					</div>
				</div>

				{/* Mobile Navbar */}
				<div className="md:hidden flex items-center justify-between h-14 mb-0">
					<div className="flex-1 flex justify-end">
						<MobileNav />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
