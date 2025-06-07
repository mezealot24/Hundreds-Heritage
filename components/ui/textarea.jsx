import * as React from "react";

import { cn } from "../../lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				"w-full px-4 py-3 rounded-lg focus:ring-2 text-base min-h-[120px] border border-white/10 focus:border-accent font-light bg-accent/50 placeholder:text-white/60 outline-none",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
