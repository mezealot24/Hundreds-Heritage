"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="w-full bg-destructive-foreground/10 py-8">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mt-16 pt-8 border-t border-tea-border-accent/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p className="text-sm">
						&copy; {new Date().getFullYear()} Hundreds Heritage Tea. All rights
						reserved.
					</p>
					<div className="flex space-x-6">
						<Link
							href="/terms"
							className="text-sm hover:text-primary transition-colors"
						>
							Terms & Conditions
						</Link>
						<Link
							href="/privacy"
							className="text-sm hover:text-primary transition-colors"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
