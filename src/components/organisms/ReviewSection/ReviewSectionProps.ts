/**
 * ReviewSection organism component for displaying reviews
 *
 * @component
 * @example
 * <ReviewSection
 *   reviews={reviewsArray}
 *   averageRating={4.8}
 *   totalCount={42}
 * />
 */

export interface Review {
	/** Unique identifier */
	id: string;
	/** Reviewer name */
	author: string;
	/** Reviewer avatar URL */
	avatar?: string;
	/** Review rating (1-5) */
	rating: number;
	/** Review text */
	content: string;
	/** Review date */
	date: string;
	/** Whether the review is from a verified stay */
	verified?: boolean;
}

export interface RatingBreakdown {
	/** Rating category name */
	category: string;
	/** Rating value (1-5) */
	value: number;
}

export interface ReviewSectionProps {
	/** Array of reviews to display */
	reviews: Review[];
	/** Overall average rating */
	averageRating: number;
	/** Total number of reviews */
	totalCount: number;
	/** Rating breakdown by category */
	breakdown?: RatingBreakdown[];
	/** Number of reviews to show initially */
	initialCount?: number;
	/** Callback to load more reviews */
	onLoadMore?: () => void;
	/** Whether more reviews are available */
	hasMore?: boolean;
	/** Whether reviews are loading */
	loading?: boolean;
	/** Additional CSS classes */
	className?: string;
}
