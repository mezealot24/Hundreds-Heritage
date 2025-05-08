import Image from "next/image"

export const CertificateDisplay = ({ className = "", size = "normal" }) => {
  // Calculate height classes based on size
  const heightClasses =
    size === "normal"
      ? "h-12 md:h-20 lg:h-28" // Normal size (100%)
      : "h-7 md:h-12 lg:h-16" // Small size (approximately 60% of normal)

  return (
    <div className={`relative w-full ${heightClasses} px-4 ${className}`}>
      <Image
        src="/images/certificates.png"
        alt="Organic and Non-GMO Certificates"
        fill
        style={{ objectFit: "contain", objectPosition: "center" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        priority
      />
    </div>
  )
}