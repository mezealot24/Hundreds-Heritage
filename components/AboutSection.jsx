"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
	return (
		<section className="relative w-full min-h-screen py-24 overflow-hidden">
			{/* Pattern Background - ปรับให้เต็มพื้นที่ */}
			<div className="fixed inset-0 w-full h-full">
				<img
					src="/pattern.svg"
					alt="Pattern Background"
					className="w-full h-full object-cover opacity-20"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						objectFit: "cover",
						zIndex: -1,
					}}
				/>
			</div>

			{/* Content Container - เพิ่ม glass effect */}
			<div className="relative z-10 container mx-auto px-4 glass-card rounded-lg py-8">
				{/* Certificates */}
				<motion.div
					className="flex justify-center items-center gap-4 mb-16"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					{[...Array(5)].map((_, index) => (
						<motion.div
							key={index}
							className={`relative ${
								index === 2 ? "scale-150 z-10" : "scale-100"
							}`}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: index === 2 ? 1.5 : 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2, duration: 0.8 }}
						>
							<div
								className="w-24 h-24 rounded-full bg-primary/20 border border-primary/30 gold-shine-svg"
								style={{
									background:
										"linear-gradient(45deg, rgba(116, 104, 53, 0.2), rgba(164, 137, 87, 0.3))",
								}}
							/>
						</motion.div>
					))}
				</motion.div>

				{/* Background Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<h2 className="text-4xl font-playfair text-center mb-8">
						<span className="hover-underline gold-shine-text">Background</span>
					</h2>
					<div className="max-w-3xl mx-auto space-y-6 text-lg text-tea-text-secondary">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
				</motion.div>

				{/* Our Story Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<h2 className="text-4xl font-playfair text-center mb-8">
						<span className="hover-underline gold-shine-text">Our Story</span>
					</h2>
					<div className="max-w-3xl mx-auto relative">
						<img
							src="/images/logo_HH.svg"
							alt="Hundreds Heritage Logo"
							className="float-right ml-8 mb-8 w-48 opacity-80"
						/>
						<div className="space-y-6 text-lg text-tea-text-secondary">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<p>
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<p>
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Quote */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<blockquote className="text-2xl font-playfair gold-shine-text italic">
						"Every sip tells a story of heritage and tradition"
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
