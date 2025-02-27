/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	// หากคุณใช้ Image component จาก Next.js ต้องตั้งค่า unoptimized เป็น true
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
