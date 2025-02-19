"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="w-full bg-secondary py-16">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Logo and about */}
					<div className="space-y-6">
						<Link href="/">
							<div className="flex items-center">
								<img
									src={"/images/LogoNavbar.ico"}
									alt="Logo"
									className="h-16"
								/>
							</div>
						</Link>
						<p className="text-tea-text-secondary max-w-xs">
							Honoring centuries of Thai tea tradition through premium,
							ethically sourced blends that bring harmony to body and spirit.
						</p>
						<div className="flex space-x-4">
							{["instagram", "facebook", "twitter"].map((social) => (
								<motion.a
									key={social}
									href={`https://${social}.com`}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-tea-text-primary"
									whileHover={{ y: -5, scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									<span className="sr-only">{social}</span>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
											clipRule="evenodd"
										/>
									</svg>
								</motion.a>
							))}
						</div>
					</div>

					{/* Quick links */}
					<div>
						<h3 className="text-lg font-medium text-tea-text-primary mb-6">
							Quick Links
						</h3>
						<ul className="space-y-4">
							{["Shop", "About Us", "FAQ", "Contact", "Shipping"].map(
								(link) => (
									<li key={link}>
										<Link
											href="#"
											className="text-tea-text-secondary hover:text-primary transition-colors hover-underline"
										>
											{link}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Collections */}
					<div>
						<h3 className="text-lg font-medium text-tea-text-primary mb-6">
							Collections
						</h3>
						<ul className="space-y-4">
							{[
								"Heritage Blends",
								"Wellness Teas",
								"Premium Origin",
								"Gift Sets",
								"Accessories",
							].map((link) => (
								<li key={link}>
									<Link
										href="#"
										className="text-tea-text-secondary hover:text-primary transition-colors hover-underline"
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-lg font-medium text-tea-text-primary mb-6">
							Newsletter
						</h3>
						<p className="text-tea-text-secondary mb-4">
							Subscribe for exclusive offers and brewing tips
						</p>
						<form className="space-y-4">
							<div className="relative">
								<input
									type="email"
									placeholder="Your email"
									className="w-full py-3 px-4 bg-accent/50 border border-tea-border-accent/20 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-tea-text-primary"
								/>
							</div>
							<button
								type="submit"
								className="w-full py-3 px-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-md transition-colors"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				<div className="mt-16 pt-8 border-t border-tea-border-accent/20 flex flex-col md:flex-row justify-between items-center">
					<p className="text-tea-text-secondary text-sm">
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
