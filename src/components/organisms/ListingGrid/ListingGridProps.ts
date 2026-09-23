/**
 * ListingGrid organism component for displaying listing cards in a responsive grid
 *
 * @component
 * @example
 * // Basic grid with listings
 * <ListingGrid listings={listings} />
 *
 * @example
 * // Loading state
 * <ListingGrid listings={[]} loading={true} />
 *
 * @example
 * // With save functionality
 * <ListingGrid
 *   listings={listings}
 *   savedIds={['1', '3']}
 *   onSave={(id) => toggleSave(id)}
 * />
 */

import type { ListingCardProps } from '../../molecules/ListingCard';

export interface GridColumns {
	/** Columns on small screens (default: 1) */
	sm?: number;
	/** Columns on medium screens (default: 2) */
	md?: number;
	/** Columns on large screens (default: 3) */
	lg?: number;
	/** Columns on extra large screens (default: 4) */
	xl?: number;
}

export interface ListingGridProps {
	/** Array of listings to display */
	listings: Omit<ListingCardProps, 'isSaved' | 'onSave'>[];
	/** Show loading state with skeleton cards */
	loading?: boolean;
	/** Number of skeleton cards to show when loading */
	skeletonCount?: number;
	/** Message to show when listings array is empty */
	emptyMessage?: string;
	/** Empty state title */
	emptyTitle?: string;
	/** Custom responsive column configuration */
	columns?: GridColumns;
	/** Callback when save button is clicked on a card */
	onSave?: (id: string) => void;
	/** Array of saved listing IDs */
	savedIds?: string[];
	/** Additional CSS classes */
	className?: string;
}
