import { cn } from "@/lib/utils";

// Base Skeleton Component - Optimized
const Skeleton = ({ className, ...props }) => {
	return (
		<div
			className={cn("animate-pulse rounded-md bg-primary/10", className)}
			{...props}
		/>
	);
};

// Reusable skeleton patterns
const SkeletonText = ({ lines = 3, className = "" }) => (
	<div className={`space-y-2 ${className}`}>
		{Array.from({ length: lines }, (_, i) => (
			<Skeleton
				key={i}
				className={`h-4 ${i === lines - 1 ? "w-4/5" : "w-full"}`}
			/>
		))}
	</div>
);

const SkeletonCard = ({ className = "" }) => (
	<div className={`p-6 space-y-4 ${className}`}>
		<Skeleton className="h-6 w-1/3" />
		<SkeletonText lines={3} />
	</div>
);

const SkeletonImage = ({ aspectRatio = "16/9", className = "" }) => (
	<Skeleton className={`w-full ${className}`} style={{ aspectRatio }} />
);

// Banner Skeleton - Lightweight version
const BannerSkeleton = ({ className = "" }) => (
	<div
		className={`relative w-full h-[30rem] md:h-[40rem] lg:h-screen bg-gradient-to-b from-gray-800 to-gray-900 animate-pulse flex flex-col justify-center items-center ${className}`}
	>
		<Skeleton className="h-16 w-3/4 md:h-20 md:w-2/3 mb-4" />
		<Skeleton className="h-16 w-2/3 md:h-20 md:w-1/2 mb-8" />
		<Skeleton className="h-10 w-40 rounded-full" />
	</div>
);

// About Section Skeleton - Optimized
const AboutSkeleton = () => (
	<div className="section-spacing container-padding max-w-4xl mx-auto">
		<div className="text-center mb-16">
			<Skeleton className="h-10 w-3/4 mx-auto mb-4" />
			<Skeleton className="h-6 w-1/2 mx-auto" />
		</div>

		<div className="space-y-12">
			{/* Image + Text Pattern */}
			<div className="flex flex-col md:flex-row gap-8">
				<SkeletonImage className="md:w-1/3" aspectRatio="4/3" />
				<div className="md:w-2/3">
					<Skeleton className="h-6 w-1/3 mb-4" />
					<SkeletonText lines={4} />
				</div>
			</div>

			{/* Reverse Pattern */}
			<div className="flex flex-col md:flex-row-reverse gap-8">
				<SkeletonImage className="md:w-1/3" aspectRatio="4/3" />
				<div className="md:w-2/3">
					<Skeleton className="h-6 w-1/3 mb-4" />
					<SkeletonText lines={4} />
				</div>
			</div>

			{/* Full Width Text */}
			<SkeletonText lines={5} />

			{/* Certificate Section */}
			<div className="text-center">
				<Skeleton className="h-6 w-2/3 mx-auto mb-8" />
				<SkeletonImage aspectRatio="3/1" />
			</div>
		</div>
	</div>
);

// Product Grid Skeleton
const ProductGridSkeleton = ({ items = 6, className = "" }) => (
	<div
		className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
	>
		{Array.from({ length: items }, (_, i) => (
			<div key={i} className="tea-card">
				<SkeletonImage aspectRatio="4/3" />
				<SkeletonCard />
			</div>
		))}
	</div>
);

// Contact Form Skeleton
const ContactSkeleton = () => (
	<div className="max-w-2xl mx-auto space-y-6">
		<div className="text-center mb-8">
			<Skeleton className="h-8 w-1/2 mx-auto mb-4" />
			<SkeletonText lines={2} />
		</div>

		<div className="space-y-4">
			<Skeleton className="h-12 w-full" />
			<Skeleton className="h-12 w-full" />
			<Skeleton className="h-32 w-full" />
			<Skeleton className="h-12 w-1/3" />
		</div>
	</div>
);

// Loading States Hook
const useLoadingState = (delay = 300) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, delay);

		return () => clearTimeout(timer);
	}, [delay]);

	return isLoading;
};

export {
	Skeleton,
	SkeletonText,
	SkeletonCard,
	SkeletonImage,
	BannerSkeleton,
	AboutSkeleton,
	ProductGridSkeleton,
	ContactSkeleton,
	useLoadingState,
};
