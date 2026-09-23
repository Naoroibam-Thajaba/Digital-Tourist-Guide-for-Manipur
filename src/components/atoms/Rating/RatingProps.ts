import type { InputHTMLAttributes } from 'react';

/**
 * Rating component based on DaisyUI
 *
 * @component
 * @example
 * // Basic rating
 * <Rating name="rating-1" totalStars={5} />
 *
 * @example
 * // Rating with default value
 * <Rating name="rating-2" totalStars={5} defaultValue={3} />
 *
 * @example
 * // Read-only rating
 * <Rating name="rating-3" totalStars={5} value={4} readOnly />
 *
 * @example
 * // Rating with custom color
 * <Rating name="rating-4" totalStars={5} mask="star-2" color="bg-orange-400" />
 *
 * @example
 * // Half star rating
 * <Rating name="rating-5" totalStars={5} half mask="star-2" color="bg-green-500" />
 */

export type RatingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type RatingMask = 'star' | 'star-2' | 'heart';

export interface RatingProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
	/** Unique name for the rating group (required to avoid conflicts) */
	name: string;
	/** Total number of stars/items to display */
	totalStars?: number;
	/** Predefined size of the rating */
	size?: RatingSize;
	/** Shape mask to use (star, star-2, or heart) */
	mask?: RatingMask;
	/** Tailwind color class for the rating items */
	color?: string;
	/** Enable half-star ratings */
	half?: boolean;
	/** Show hidden radio button at start for clearing rating */
	showClearButton?: boolean;
	/** Make the rating read-only (uses divs instead of inputs) */
	readOnly?: boolean;
	/** Current value for read-only or controlled rating (1-based index) */
	value?: number;
	/** Default value for uncontrolled rating (1-based index) */
	defaultValue?: number;
	/** Additional CSS classes for the rating container */
	className?: string;
	/** Callback when rating changes */
	onChange?: (value: number) => void;
	/** Add gap between rating items */
	gap?: boolean;
}
