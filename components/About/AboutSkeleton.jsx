import { Skeleton } from "../ui/skeleton";

export const AboutSkeleton = () => {
	return (
		<div className="h-max w-full md:min-h-[calc(100vh-110px-88px)]">
			<div className="relative z-10 glass-card rounded-lg">
				{/* Title skeleton */}
				<div className="text-center mb-16 md:mb-24">
					<Skeleton className="h-10 w-3/4 mx-auto" />
				</div>

				{/* Main Content skeleton */}
				<div className="container px-4 max-w-3xl mx-auto">
					<div className="mb-10 md:mb-16">
						{/* H2 Title skeleton */}
						<div className="text-center mb-8 md:mb-12">
							<Skeleton className="h-8 w-1/3 mx-auto" />
						</div>

						{/* Paragraph 1 skeleton - Image Left, Content Right */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12">
							<div className="md:w-1/3">
								<Skeleton className="w-full h-[300px] rounded-lg" />
							</div>
							<div className="md:w-2/3">
								<Skeleton className="h-6 w-1/3 mb-4" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-4/5" />
							</div>
						</div>

						{/* Paragraph 2 skeleton - Image Right, Content Left */}
						<div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 mb-12">
							<div className="md:w-1/3">
								<Skeleton className="w-full h-[300px] rounded-lg" />
							</div>
							<div className="md:w-2/3">
								<Skeleton className="h-6 w-1/3 mb-4" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-4/5" />
							</div>
						</div>

						{/* Paragraph 3 skeleton - Full Paragraph */}
						<div className="mb-12">
							<Skeleton className="h-4 w-full mb-2" />
							<Skeleton className="h-4 w-full mb-2" />
							<Skeleton className="h-4 w-full mb-2" />
							<Skeleton className="h-4 w-4/5" />
						</div>

						{/* Paragraph 4 skeleton - Left Picture, Right Full Paragraph */}
						<div className="flex flex-col md:flex-row gap-6 md:gap-10">
							<div className="md:w-1/4">
								<Skeleton className="w-32 sm:w-48 h-32 mx-auto sm:mx-0" />
							</div>
							<div className="md:w-3/4">
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-full mb-2" />
								<Skeleton className="h-4 w-4/5" />
							</div>
						</div>
					</div>

					{/* Quote skeleton */}
					<div className="text-center px-4">
						<Skeleton className="h-6 w-3/4 mx-auto mb-2" />
						<Skeleton className="h-6 w-2/3 mx-auto mb-16" />
						{/* Certificates skeleton */}
						<Skeleton className="h-40 lg:h-52 w-full max-w-4xl mx-auto" />
					</div>
				</div>
			</div>
		</div>
	);
};
