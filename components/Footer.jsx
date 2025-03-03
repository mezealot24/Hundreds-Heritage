"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="w-full bg-secondary py-8">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mt-16 pt-8 border-t border-tea-border-accent/20 flex flex-col md:flex-row justify-between items-center">
					<p className=" text-sm">
						&copy; {new Date().getFullYear()} Hundreds Heritage Tea. All rights
						reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link
							href="#"
							className="text-tea-text-secondary hover:text-primary text-sm"
						>
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="text-tea-text-secondary hover:text-primary text-sm"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
