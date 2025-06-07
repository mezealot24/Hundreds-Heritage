"use client";
import { useState, useEffect, useCallback } from "react";
import { Logo } from "./Header/Logo";
import { Motto } from "./Header/Motto";
import { Navigation } from "./Header/Navigation";
import { SocialIcons } from "./Header/SocialIcons";
import MobileNav from "./MobileNav";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	// Throttled scroll handler to prevent excessive re-renders
	const handleScroll = useCallback(() => {
		const scrollY = window.scrollY;
		const shouldBeScrolled = scrollY > 50;

		// Only update state if it actually changes
		setIsScrolled((prev) => {
			if (prev !== shouldBeScrolled) {
				return shouldBeScrolled;
			}
			return prev;
		});
	}, []);

	useEffect(() => {
		// Throttle scroll events for better performance
		let timeoutId = null;
		const throttledScroll = () => {
			if (timeoutId === null) {
				timeoutId = setTimeout(() => {
					handleScroll();
					timeoutId = null;
				}, 16); // ~60fps
			}
		};

		window.addEventListener("scroll", throttledScroll, { passive: true });

		// Initial check
		handleScroll();

		return () => {
			window.removeEventListener("scroll", throttledScroll);
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [handleScroll]);
	return (
		<>
			{/* Mobile Header - < 768px */}
			<header
				className={`fixed top-0 left-0 right-0 h-20 md:hidden z-30 w-full transition-[background-color,box-shadow] duration-500 ease-out ${
					isScrolled ? "bg-background/95 shadow-sm" : "bg-transparent"
				}`}
			>
				<div className="flex items-center justify-between h-20 px-4">
					<div className="w-8 h-8" aria-hidden="true" />

					{/* Centered Mobile Logo */}
					<div className="absolute left-1/2 transform -translate-x-1/2 z-40">
						<a href="/">
							<img
								src="/images/logo_HH.svg"
								alt="Hundreds Heritage"
								className="h-16 w-auto"
							/>
						</a>
					</div>

					{/* Mobile Navigation */}
					<div className="z-50">
						<MobileNav />
					</div>
				</div>
			</header>

			{/* Tablet Header - 768px to 1024px */}
			<header
				className={`fixed w-full z-30 transition-[background-color,box-shadow] duration-500 ease-out hidden md:block lg:hidden ${
					isScrolled
						? "bg-background/70 shadow-sm"
						: "bg-transparent shadow-none"
				}`}
			>
				<div className="max-w-[1200px] mx-auto px-6">
					<div className="flex items-center justify-between py-4">
						{/* Logo Section */}
						<div className="flex-shrink-0">
							<Logo isScrolled={isScrolled} />
						</div>

						{/* Center Content: Motto and Navigation */}
						<div className="flex-grow flex flex-col items-center space-y-2">
							<Motto />
							<Navigation />
						</div>

						{/* Social Icons Section */}
						<div className="flex-shrink-0">
							<SocialIcons />
						</div>
					</div>
				</div>
			</header>

			{/* Desktop Header - > 1024px */}
			<header
				className={`fixed w-full z-30 transition-[background-color,box-shadow] duration-500 ease-out hidden lg:block ${
					isScrolled
						? "bg-background/60 shadow-sm"
						: "bg-transparent shadow-none"
				}`}
			>
				<div className="max-w-[1440px] mx-auto px-8 xl:px-12">
					<div className="grid grid-cols-12 gap-4">
						{/* Logo Section */}
						<div className="col-span-2 flex items-center justify-end">
							<Logo isScrolled={isScrolled} />
						</div>

						{/* Center Content: Motto and Navigation */}
						<div className="col-span-8">
							{/* Motto Row */}
							<div className="flex justify-center items-center h-16 lg:h-[70px]">
								<Motto />
							</div>
							{/* Navigation Row */}
							<div className="flex justify-center items-center h-16 lg:h-[70px]">
								<Navigation />
							</div>
						</div>

						{/* Social Icons Section */}
						<div className="col-span-2 flex items-center justify-center h-16 mt-8">
							<SocialIcons />
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
