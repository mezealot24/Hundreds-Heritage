/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // ใช้ static export
	images: {
		unoptimized: true, // ปิด image optimization
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		return config; // ✅ ต้อง return config
	},
};

export default nextConfig; // ใช้ export default แทน module.exports
