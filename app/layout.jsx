import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// นำเข้า Inter จาก Google Fonts
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const stixTwoText = localFont({
	src: [
		{
			path: "./fonts/STIXTwoText-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/STIXTwoText-Italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/STIXTwoText-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/STIXTwoText-MediumItalic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/STIXTwoText-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/STIXTwoText-BoldItalic.ttf",
			weight: "700",
			style: "italic",
		},
		{
			path: "./fonts/STIXTwoText-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/STIXTwoText-SemiBoldItalic.ttf",
			weight: "600",
			style: "italic",
		},
	],
	variable: "--font-stix",
	display: "swap",
});

export const metadata = {
	title: "Hundreds Heritage Tea - Premium Thai Tea Experience",
	description:
		"Discover the finest Thai tea traditions with our premium tea collections. Handcrafted and ethically sourced.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={stixTwoText.variable}>
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
