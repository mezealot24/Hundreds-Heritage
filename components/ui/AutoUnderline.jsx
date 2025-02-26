"use client";
import React from "react";
import { motion } from "framer-motion";

const AutoUnderline = ({
	children,
	className = "",
	as = "span",
	delay = 0.2,
}) => {
	// Dynamically determine which HTML element to render
	const Component = as;

	return (
		<Component className={`relative inline-block ${className}`}>
			{children}
			<motion.span
				className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#746835] to-[#A48957]"
				initial={{ width: "0%" }}
				whileInView={{ width: "100%" }}
				viewport={{ once: true }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
					delay: delay,
				}}
			/>
		</Component>
	);
};

export default AutoUnderline;
