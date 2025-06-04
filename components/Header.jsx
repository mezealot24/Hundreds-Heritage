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
			{/* Desktop Header - Visible on medium screens and above */}
			<header
				className={`fixed w-full z-30 transition-all duration-500 hidden sm:block animate-fade-in
				${
					isScrolled
						? "bg-background/95 backdrop-blur-sm shadow-sm -translate-y-2"
						: "bg-background/0"
				}`}
			>
				<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
					<div className="grid grid-cols-12 gap-4">
						{/* Logo Section */}
						<div className="col-span-2 flex items-center justify-end transition-all duration-700 delay-100 animate-fade-in">
							<Logo isScrolled={isScrolled} />
						</div>
						{/* Center Content: Motto and Navigation */}
						<div className="col-span-8">
							{/* Motto Row - Height increased by ~10% on md: screens */}
							<div className="flex justify-center items-center h-16 md:h-[70px] transition-all duration-700 delay-200 animate-fade-in">
								<Motto />
							</div>
							{/* Navigation Row with scroll effect - Height increased by ~10% on md: screens */}
							<div className="flex justify-center items-center h-16 md:h-[70px] transition-all duration-700 delay-300 animate-fade-in transform">
								<Navigation />
							</div>
						</div>
						{/* Social Icons Section */}
						<div className="col-span-2 flex items-center justify-center h-16 mt-8 transition-all duration-700 delay-400 animate-fade-in">
							<SocialIcons />
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Header - Visible below medium screens */}
			<header
				className={`fixed top-0 left-0 right-0 h-24 lg:hidden z-30 w-full transition-all duration-500 animate-fade-in ${
					isScrolled
						? "bg-background/95 backdrop-blur-sm shadow-sm"
						: "bg-background/0"
				}`}
			>
				<div className="flex items-center justify-between h-24 px-4">
					{/* Empty div for layout balance */}
					<div
						className="w-10 h-10 transition-all duration-700 delay-100 animate-fade-in"
						aria-hidden="true"
					/>
					{/* Centered Mobile Logo */}
					<div className="absolute left-1/2 transform -translate-x-1/2 z-40 transition-all duration-700 delay-200 animate-fade-in">
						<a href="/">
							<img
								src="/images/logo_HH.svg"
								alt="Hundreds Heritage"
								className="h-24 w-auto pb-2"
							/>
						</a>
					</div>
					{/* Mobile Navigation */}
					<div className="z-50 transition-all duration-700 delay-300 animate-fade-in">
						<MobileNav />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
