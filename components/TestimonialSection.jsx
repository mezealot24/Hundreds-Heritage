"use client";
// TestimonialSection.jsx - เพิ่มใหม่
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
	{
		quote:
			"This tea reconnected me with traditions I had almost forgotten. A truly transcendent experience with every sip.",
		author: "Siriporn C.",
		title: "Tea Connoisseur",
		avatar: "/images/testimonial1.jpg",
	},
	{
		quote:
			"The aroma and flavor profiles are unlike anything I've experienced. Their commitment to quality is evident in every blend.",
		author: "Alex M.",
		title: "Wellness Enthusiast",
		avatar: "/images/testimonial2.jpg",
	},
	{
		quote:
			"As someone who values both tradition and innovation, I've found the perfect balance in these remarkable tea blends.",
		author: "Nattapong T.",
		title: "Culinary Expert",
		avatar: "/images/testimonial3.jpg",
	},
];

export default function TestimonialSection() {
	const [active, setActive] = useState(0);

	return (
		<section className="w-full py-24 bg-secondary/30">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl gold-shine-text font-semibold tracking-tight mb-4">
						Voices of Experience
					</h2>
					<p className="text-tea-text-secondary max-w-2xl mx-auto">
						Discover what our community of tea lovers has to say
					</p>
				</div>

				<div className="relative">
					{/* Large quote mark */}
					<div className="absolute -top-16 left-0 text-primary/10 text-[150px] font-serif">
						"
					</div>

					<div className="relative z-10">
						{testimonials.map((testimonial, idx) => (
							<motion.div
								key={idx}
								className="absolute inset-0 flex flex-col items-center text-center"
								initial={{ opacity: 0, x: 20 }}
								animate={{
									opacity: active === idx ? 1 : 0,
									x: active === idx ? 0 : 20,
									pointerEvents: active === idx ? "auto" : "none",
								}}
								transition={{ duration: 0.5 }}
							>
								<p className="text-xl md:text-2xl text-primary-foreground italic mb-8 max-w-3xl">
									"{testimonial.quote}"
								</p>
								<div className="flex items-center">
									<div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
										<img
											src={testimonial.avatar}
											alt={testimonial.author}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="text-left">
										<h4 className="font-medium text-lg">
											{testimonial.author}
										</h4>
										<p className="text-tea-text-secondary text-sm">
											{testimonial.title}
										</p>
									</div>
								</div>
							</motion.div>
						))}

						{/* Placeholder for height */}
						<div className="opacity-0 pointer-events-none flex flex-col items-center text-center">
							<p className="text-xl md:text-2xl text-primary-foreground italic mb-8 max-w-3xl">
								"{testimonials[0].quote}"
							</p>
							<div className="flex items-center">
								<div className="w-16 h-16 rounded-full overflow-hidden mr-4">
									<img
										src={testimonials[0].avatar}
										alt={testimonials[0].author}
									/>
								</div>
								<div className="text-left">
									<h4 className="font-medium text-lg">
										{testimonials[0].author}
									</h4>
									<p className="text-tea-text-secondary text-sm">
										{testimonials[0].title}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation dots */}
					<div className="flex justify-center mt-12 space-x-3">
						{testimonials.map((_, idx) => (
							<button
								key={idx}
								onClick={() => setActive(idx)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									active === idx ? "bg-primary w-8" : "bg-primary/30"
								}`}
								aria-label={`View testimonial ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
