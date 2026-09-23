import { useState } from 'react';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Skeleton } from '../../atoms/Skeleton';
import { ReviewCard } from '../../molecules/ReviewCard';
import type { ReviewSectionProps, RatingBreakdown } from './ReviewSectionProps';

// Default rating categories
const defaultBreakdown: RatingBreakdown[] = [
	{ category: 'Cleanliness', value: 4.8 },
	{ category: 'Communication', value: 4.9 },
	{ category: 'Check-in', value: 4.7 },
	{ category: 'Accuracy', value: 4.8 },
	{ category: 'Location', value: 4.9 },
	{ category: 'Value', value: 4.6 }
];

/**
 * ReviewSection organism for displaying reviews with ratings
 *
 * Shows overall rating, breakdown by category, and individual reviews
 *
 * @param props - Component props
 * @returns ReviewSection component
 */
export const ReviewSection = ({
	reviews,
	averageRating,
	totalCount,
	breakdown = defaultBreakdown,
	initialCount = 6,
	onLoadMore,
	hasMore = false,
	loading = false,
	className = ''
}: ReviewSectionProps) => {
	const [showAll, setShowAll] = useState(false);

	// Determine which reviews to display
	const displayedReviews = showAll ? reviews : reviews.slice(0, initialCount);

	return (
		<section className={`space-y-6 ${className}`.trim()}>
			{/* Section Header */}
			<div className="flex items-center gap-2">
				<Icon name="star" size="md" className="text-warning" fill />
				<h2 className="font-heading text-2xl font-bold">
					{averageRating.toFixed(1)} · {totalCount} review{totalCount !== 1 ? 's' : ''}
				</h2>
			</div>

			{/* Rating Breakdown Grid */}
			{breakdown.length > 0 && (
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-6 border-b border-base-200">
					{breakdown.map((item) => (
						<div key={item.category} className="flex items-center justify-between gap-2">
							<span className="text-sm">{item.category}</span>
							<div className="flex items-center gap-2">
								<progress
									className="progress progress-primary w-16 h-1"
									value={item.value}
									max={5}
								/>
								<span className="text-sm font-medium w-8">{item.value.toFixed(1)}</span>
							</div>
						</div>
					))}
				</div>
			)}

			{/* Reviews Grid */}
			{loading ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{Array.from({ length: initialCount }).map((_, i) => (
						<div key={i} className="space-y-3">
							<div className="flex items-center gap-3">
								<Skeleton shape="circle" width="w-12" height="h-12" />
								<div className="space-y-1">
									<Skeleton variant="text" className="w-24 h-4" />
									<Skeleton variant="text" className="w-16 h-3" />
								</div>
							</div>
							<Skeleton variant="text" className="w-full h-4" />
							<Skeleton variant="text" className="w-3/4 h-4" />
						</div>
					))}
				</div>
			) : displayedReviews.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{displayedReviews.map((review) => (
						<ReviewCard
							key={review.id}
							author={review.author}
							avatarSrc={review.avatar}
							rating={review.rating}
							content={review.content}
							date={review.date}
						/>
					))}
				</div>
			) : (
				<div className="text-center py-8">
					<Icon name="rate_review" size="lg" className="text-base-content/30 mb-3" />
					<p className="text-base-content/60">No reviews yet</p>
					<p className="text-sm text-base-content/40 mt-1">
						Be the first to leave a review!
					</p>
				</div>
			)}

			{/* Show More / Load More */}
			{!loading && reviews.length > 0 && (
				<div className="flex justify-center pt-4">
					{!showAll && reviews.length > initialCount ? (
						<Button
							style="outline"
							onClick={() => setShowAll(true)}
						>
							Show all {totalCount} reviews
						</Button>
					) : hasMore && onLoadMore ? (
						<Button
							style="outline"
							onClick={onLoadMore}
						>
							<Icon name="add" size="sm" />
							Load more reviews
						</Button>
					) : null}
				</div>
			)}
		</section>
	);
};
