import {
	IconBrandInstagram,
	IconBrandFacebook,
	IconBrandTiktok,
} from "@tabler/icons-react";
import LineIcon from "../LineIcon";

const socialIcons = [
	{
		Icon: IconBrandInstagram,
		href: "https://www.instagram.com/hundredsheritage_th?igsh=djNjcjMxczdo&utm_source=qr",
	},
	{
		Icon: IconBrandFacebook,
		href: "https://www.facebook.com/share/19QRjTRofu/?mibextid=wwXIfr",
	},
	{ Icon: LineIcon, href: "https://lin.ee/Rxte6r9" },
	{
		Icon: IconBrandTiktok,
		href: "https://www.tiktok.com/@hundredsheritage?_t=ZS-8uJMm5x0Hua&_r=1",
	},
];

export const SocialIcons = () => (
	<div className="flex items-center justify-end space-x-4">
		{socialIcons.map(({ Icon, href }, index) => (
			<a
				key={href}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-[#f1d180] transition-all duration-300 hover:scale-110 opacity-0 translate-x-5 animate-fade-in-right"
				style={{ animationDelay: `${index * 100}ms` }}
			>
				<Icon size={36} stroke={1.5} />
			</a>
		))}
	</div>
);
