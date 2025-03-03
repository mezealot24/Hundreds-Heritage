import { motion } from "framer-motion";
import {
	IconBrandInstagram,
	IconBrandFacebook,
	IconBrandLine,
	IconBrandTiktok,
} from "@tabler/icons-react";

const socialIcons = [
	{
		Icon: IconBrandInstagram,
		href: "https://www.instagram.com/hundredsheritage_th?igsh=djNjcjMxczdo&utm_source=qr",
	},
	{
		Icon: IconBrandFacebook,
		href: "hhttps://www.facebook.com/share/19QRjTRofu/?mibextid=wwXIfr",
	},
	{ Icon: IconBrandLine, href: "https://lin.ee/Rxte6r9" },
	{ Icon: IconBrandTiktok, href: "https://tiktok.com" },
];

export const SocialIcons = () => (
	<div className="flex items-center justify-end space-x-4">
		{socialIcons.map(({ Icon, href }, index) => (
			<motion.a
				key={href}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				whileHover={{ scale: 1.1 }}
				className="text-tea-text-secondary hover:text-primary transition-colors"
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3, delay: index * 0.1 }}
			>
				<Icon size={36} stroke={1.5} />
			</motion.a>
		))}
	</div>
);
