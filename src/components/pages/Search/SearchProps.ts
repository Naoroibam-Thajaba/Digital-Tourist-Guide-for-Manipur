import type { ListingCardProps } from '../../molecules/ListingCard';

/**
 * Search page component for searching homestays, guides, and products
 *
 * @component
 * @example
 * // Basic usage - reads query from URL params
 * <Search />
 *
 * @example
 * // With external results (API-driven)
 * <Search
 *   results={searchResults}
 *   totalCount={totalCount}
 *   loading={isLoading}
 *   onSearch={handleSearch}
 * />
 */

export interface SearchProps {
	/** Initial search query (if not using URL params) */
	initialQuery?: string;
	/** Search results */
	results?: Omit<ListingCardProps, 'isSaved' | 'onSave'>[];
	/** Total count of results */
	totalCount?: number;
	/** Loading state */
	loading?: boolean;
	/** IDs of saved/favorited items */
	savedIds?: string[];
	/** Callback when item is saved/unsaved */
	onSave?: (id: string) => void;
	/** Callback when search is submitted */
	onSearch?: (query: string) => void;
	/** Additional CSS classes */
	className?: string;
}
