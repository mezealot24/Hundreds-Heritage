"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconMenuDeep } from "@tabler/icons-react";
import { navItems } from "@/components/Header/Navigation";

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<IconMenuDeep className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* logo */}
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Wiriya<span className="text-accent">.</span>
						</h1>
					</Link>
				</div>
				{/* nav links */}
				<nav className="flex flex-col justify-center items-center gap-6">
					{navItems.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className={`${
								pathname === link.href ? "text-accent" : "text-white"
							} text-2xl capitalize`}
						>
							{link.title}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
