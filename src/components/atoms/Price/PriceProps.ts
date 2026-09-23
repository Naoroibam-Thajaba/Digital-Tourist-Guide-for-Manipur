/**
 * Price component for displaying currency amounts
 *
 * @component
 * @example
 * // Basic price
 * <Price amount={5000} />
 *
 * @example
 * // Price with discount
 * <Price amount={5000} originalAmount={7000} />
 *
 * @example
 * // Price with period
 * <Price amount={5000} period="per night" />
 *
 * @example
 * // Large price with discount and period
 * <Price amount={5000} originalAmount={7000} period="per night" size="lg" />
 */

export type PriceSize = 'sm' | 'md' | 'lg' | 'xl';

export interface PriceProps {
	/** Price amount in INR */
	amount: number;
	/** Original price for showing discount */
	originalAmount?: number;
	/** Price period (e.g., "per night", "per day") */
	period?: string;
	/** Size variant */
	size?: PriceSize;
	/** Additional CSS classes */
	className?: string;
}
