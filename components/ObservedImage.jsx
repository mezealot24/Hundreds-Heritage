"use client";
import { useEffect, useRef, useState } from "react";

const ObservedImage = ({ src, alt, className, fetchpriority, eagerLoad }) => {
	const imgRef = useRef(null);
	// If eagerLoad is true, set actualSrc immediately. Otherwise, use placeholder or undefined.
	// Using a placeholder like "/placeholder.svg" is good if you have one.
	// If not, actualSrc can be initially undefined, but ensure your CSS handles empty image space.
	const [actualSrc, setActualSrc] = useState(
		eagerLoad ? src : "/placeholder.svg"
	);
	const [hasBeenObserved, setHasBeenObserved] = useState(false);

	useEffect(() => {
		// If eagerLoad is true, or src is not provided, or it has already been observed and src set, do nothing.
		if (eagerLoad || !src || (hasBeenObserved && actualSrc === src)) {
			if (eagerLoad && src) setActualSrc(src); // Ensure actualSrc is set if eagerLoad and src valid
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setActualSrc(src);
					setHasBeenObserved(true); // Mark as observed
					if (imgRef.current) {
						observer.unobserve(imgRef.current);
					}
				}
			},
			{
				rootMargin: "0px 0px 500px 0px", // Start loading when 500px from bottom of viewport
				threshold: 0.01, // Trigger as soon as 1% of the element is visible
			}
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, [src, eagerLoad, hasBeenObserved, actualSrc]); // Add actualSrc to dependencies

	return (
		<img
			ref={imgRef}
			src={actualSrc} // Will be placeholder or actual image src
			alt={alt}
			className={className}
			fetchPriority={fetchpriority} // Note: React DOM attribute is fetchPriority (camelCase)
		/>
	);
};

export default ObservedImage;
