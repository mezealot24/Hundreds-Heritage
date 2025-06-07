"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full bg-destructive-foreground/10">
			<div className="max-w-7xl mx-auto py-4 px-4">
				<div className="mt-2 pt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<h4 className="text-sm">
						&copy; {new Date().getFullYear()} Hundreds Heritage Tea. All rights
						reserved.
					</h4>
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
}
