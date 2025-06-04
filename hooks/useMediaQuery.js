"use client";
import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
	// Initialize with null to avoid hydration mismatch
	const [matches, setMatches] = useState(null);

	useEffect(() => {
		// Set initial value once mounted
		const media = window.matchMedia(query);
		setMatches(media.matches);

		// Use the more efficient 'change' event instead of resize
		const listener = (e) => setMatches(e.matches);
		media.addEventListener("change", listener);

		return () => media.removeEventListener("change", listener);
	}, [query]); // Only re-run if query changes

	return matches;
};
