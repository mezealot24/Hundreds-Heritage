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
		<>
			{/* Desktop Header - Hidden on mobile */}
			<header
				className={`fixed w-full z-30 transition-all duration-300 hidden md:block ${
					isScrolled
						? "bg-background/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0"
						: "bg-background/50" // Changed from 80 to 50 for more transparency at start
				}`}
			>
				<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
					<div className="grid grid-cols-12 gap-4">
						{/* Logo Column */}
						<div className="col-span-2 flex items-center justify-end relative">
							<Logo />
						</div>

						{/* Center Content */}
						<div className="col-span-8">
							{/* Top Row - Motto */}
							<div className="flex justify-center items-center h-16">
								<Motto isScrolled={isScrolled} />
							</div>
							{/* Bottom Row - Navigation */}
							<div
								className={`flex justify-center items-center h-16 transition-all duration-300 transform ${
									isScrolled ? "translate-y-[-30px]" : "translate-y-0"
								}`}
							>
								<Navigation />
							</div>
						</div>

						{/* Social Icons Column */}
						<div className="col-span-2 flex items-center justify-center h-16 mt-8">
							<SocialIcons />
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Header - Only visible on mobile */}
			<header className="fixed top-0 left-0 right-0 h-24 md:hidden z-30 w-full bg-background">
				<div className="flex items-center justify-between h-24 px-4">
					{/* Empty div to maintain space balance (Left) */}
					<div className="w-10 h-10" aria-hidden="true" />

					{/* Centered Mobile Logo */}
					<div className="absolute left-1/2 transform -translate-x-1/2 z-40">
						<a href="/">
							<img
								src="/images/logo_HH.svg"
								alt="Hundreds Heritage"
								className="h-24 w-auto pb-2"
							/>
						</a>
					</div>
					{/* Mobile Nav (Right) */}
					<div className="z-50">
						<MobileNav />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
