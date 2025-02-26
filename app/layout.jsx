import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
});

export const metadata = {
	title: "Hundreds Heritage Tea - Premium Thai Tea Experience",
	description:
		"Discover the finest Thai tea traditions with our premium tea collections. Handcrafted and ethically sourced.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${inter.variable} ${playfair.variable}`}>
			<body className="antialiased min-h-screen flex flex-col overflow-x-hidden">
				<Header />
				<div className="pt-16 md:pt-28 flex-grow w-full">
					<main className="w-full">{children}</main>
				</div>
				<Footer />
			</body>
		</html>
	);
}
