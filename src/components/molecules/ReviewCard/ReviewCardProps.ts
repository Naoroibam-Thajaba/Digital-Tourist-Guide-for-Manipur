/**
 * ReviewCard component for displaying user reviews
 *
 * @component
 * @example
 * // Basic review card
 * <ReviewCard
 *   author="John Doe"
 *   rating={4.5}
 *   content="Great place to stay! The hospitality was amazing."
 *   date="2025-01-15"
 * />
 *
 * @example
 * // Review card with avatar
 * <ReviewCard
 *   author="Jane Smith"
 *   avatarSrc="/images/jane.jpg"
 *   rating={5}
 *   content="Wonderful experience. Highly recommend!"
 *   date="2025-01-10"
 * />
 */

export interface ReviewCardProps {
	/** Name of the review author */
	author: string;
	/** Rating value (1-5, can be decimal for half stars) */
	rating: number;
	/** Review content text */
	content: string;
	/** Review date (can be a string or Date object) */
	date: string | Date;
	/** Optional avatar image URL */
	avatarSrc?: string;
	/** Optional avatar placeholder (e.g., initials) */
	avatarPlaceholder?: string;
	/** Additional CSS classes for the card container */
	className?: string;
}
