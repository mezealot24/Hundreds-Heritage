// HeaderProduct.jsx
import React from "react";

const HeaderProduct = ({ title, description }) => (
	<div className="text-center mb-16">
		<h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6">
			<span className="gold-shine-text z-10">{title}</span>
		</h2>
		<div className="w-32 h-0.5 bg-gradient-to-r from-primary/10 via-primary/80 to-primary/10 mx-auto mb-8"></div>
		<p className="text-lg max-w-2xl mx-auto text-tea-text-secondary">
			{description}
		</p>
	</div>
);

export default HeaderProduct;
