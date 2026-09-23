/**
 * FilterChip component for displaying active filters with remove button
 *
 * @component
 * @example
 * // Basic filter chip
 * <FilterChip label="$50 - $100" onRemove={() => clearPriceFilter()} />
 *
 * @example
 * // With icon and variant
 * <FilterChip
 *   label="Netarhat"
 *   icon="location_on"
 *   variant="primary"
 *   onRemove={() => clearLocationFilter()}
 * />
 *
 * @example
 * // Non-dismissible chip
 * <FilterChip label="All Results" variant="accent" />
 */

export type FilterChipVariant = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
export type FilterChipSize = 'sm' | 'md' | 'lg';

export interface FilterChipProps {
	/** Filter label text */
	label: string;
	/** Callback when remove button is clicked */
	onRemove?: () => void;
	/** Color variant */
	variant?: FilterChipVariant;
	/** Size variant */
	size?: FilterChipSize;
	/** Optional Material icon name */
	icon?: string;
	/** Additional CSS classes */
	className?: string;
}
