/**
 * GuestSelector component for selecting number of guests (adults, children)
 *
 * @component
 * @example
 * // Basic guest selector
 * <GuestSelector onChange={(guests) => console.log(guests)} />
 *
 * @example
 * // Controlled with limits
 * <GuestSelector
 *   value={{ adults: 2, children: 1 }}
 *   onChange={setGuests}
 *   maxAdults={8}
 *   maxChildren={4}
 *   minAdults={1}
 * />
 */

export interface GuestCount {
	/** Number of adults */
	adults: number;
	/** Number of children */
	children: number;
}

export interface GuestSelectorProps {
	/** Controlled value */
	value?: GuestCount;
	/** Callback when guest count changes */
	onChange?: (guests: GuestCount) => void;
	/** Maximum number of adults allowed */
	maxAdults?: number;
	/** Maximum number of children allowed */
	maxChildren?: number;
	/** Minimum number of adults required */
	minAdults?: number;
	/** Additional CSS classes */
	className?: string;
}
