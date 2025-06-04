import Image from "next/image";

export const CertificateDisplay = ({ className = "", size = "normal" }) => {
	return (
		<div className={`relative w-full px-4 ${className}`} data-size={size}>
			<Image
				src="/images/certificates.png"
				alt="Organic and Non-GMO Certificates"
				fill
				style={{ objectFit: "contain", objectPosition: "center" }}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
				priority
			/>
		</div>
	);
};
