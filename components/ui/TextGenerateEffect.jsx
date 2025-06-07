"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
	textAlign = "center",
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");

	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.2),
			}
		);
	}, [scope.current, animate, duration, filter]);
	const renderWords = () => {
		return (
			<motion.div
				ref={scope}
				className={cn({
					"text-left": textAlign === "left",
					"text-center": textAlign === "center",
					"text-right": textAlign === "right",
				})}
			>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="premium-gold-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div
			className={cn(
				"font-bookmanoldstyle font-bold leading-snug tracking-wide",
				className
			)}
		>
			{renderWords()}
		</div>
	);
};
