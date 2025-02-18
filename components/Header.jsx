"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
	{ name: "หน้าหลัก", href: "/" },
	{ name: "บริการ", href: "/services" },
	{ name: "สินค้า", href: "/products" },
	{ name: "เกี่ยวกับเรา", href: "/about" },
	{ name: "ติดต่อ", href: "/contact" },
];

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="relative w-full h-screen">
			<div
				className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center bg-no-repeat  md:bg-contain"
				style={{ backgroundImage: "url('/images/HeroBanner02.jpg')" }}
			></div>

			<AnimatePresence>
				<motion.nav
					className="fixed top-0 left-0 w-full z-50"
					style={{
						background: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
						padding: scrolled ? "15px 0" : "25px 0", // ลด padding เมื่อลง scroll
						boxShadow: scrolled ? "0 2px 5px -2px rgba(0,0,0,0.1)" : "none",
						transition: "background-color 0.5s ease, padding 0.5s ease",
					}}
				>
					<div className="container mx-auto flex items-center justify-between px-4">
						<Link href="/">
							<div className="flex items-center">
								<img
									src={"/images/LogoNavbar.ico"}
									alt="Logo"
									className="h-12 lg:h-24"
								/>
							</div>
						</Link>

						<ul className="hidden md:flex space-x-8">
							{navItems.map((item) => (
								<motion.li key={item.name} whileHover={{ scale: 1.05 }}>
									<Link
										href={item.href}
										className={`font-medium text-3xl hover:text-primary transition-colors ${
											scrolled
												? "text-gray-700 hover:text-primary"
												: "text-white hover:text-primary-light"
										}`}
									>
										{item.name}
									</Link>
								</motion.li>
							))}
						</ul>

						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className={`md:hidden ${
										scrolled ? "text-gray-900" : "text-white"
									}`}
								>
									<Menu className="h-12 w-6" />
									<span className="sr-only">เมนู</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px]">
								<SheetHeader>
									<SheetTitle>เมนู</SheetTitle>
									<SheetDescription>เลือกหัวข้อที่คุณสนใจ</SheetDescription>
								</SheetHeader>
								<div className="grid gap-6 py-6">
									{navItems.map((item) => (
										<motion.div
											key={item.name}
											whileHover={{ x: 5, color: "hsl(var(--primary))" }}
											transition={{ duration: 0.2 }}
										>
											<Link
												href={item.href}
												className="block text-lg font-medium transition-colors hover:text-primary"
											>
												{item.name}
											</Link>
										</motion.div>
									))}
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</motion.nav>
			</AnimatePresence>
		</header>
	);
};
