import React from "react";
const BackgroundPattern = () => (
	<>
		<div
			className="absolute top-0 bottom-0 left-0 w-1/6 opacity-30 pointer-events-none"
			style={{
				backgroundImage: "url('/pattern.svg')",
				backgroundSize: "cover",
				backgroundPosition: "left center",
				zIndex: "0",
			}}
		></div>

		<div
			className="absolute top-0 bottom-0 right-0 w-1/6 opacity-30 pointer-events-none"
			style={{
				backgroundImage: "url('/pattern.svg')",
				backgroundSize: "cover",
				backgroundPosition: "right center",
				zIndex: "0",
			}}
		></div>
	</>
);

export default BackgroundPattern;
