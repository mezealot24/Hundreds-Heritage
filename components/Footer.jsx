"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="w-full bg-destructive-foreground/10 py-8">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mt-16 pt-8 border-t border-tea-border-accent/20 flex flex-col md:flex-row justify-between items-center">
					<p className=" text-sm">
						&copy; {new Date().getFullYear()} Hundreds Heritage Tea. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
