import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const bookmanOldStyle = localFont({
	src: [
		{
			path: "./fonts/bookmanoldstyle.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/bookmanoldstyle_italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/bookmanoldstyle_bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-bookman-old-style",
});

const sukhumvitSet = localFont({
	src: "./fonts/SukhumvitSet-Regular.woff2",
	variable: "--font-sukhumvit-set",
});

export const metadata = {
	title: "Hundreds Heritage Tea - Premium Thai Tea Experience",
	description:
		"Discover the finest Thai tea traditions with our premium tea collections. Handcrafted and ethically sourced.",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${bookmanOldStyle.variable} ${sukhumvitSet.variable}`}
		>
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
