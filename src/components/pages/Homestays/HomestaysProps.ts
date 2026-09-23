/**
 * Homestays page component for browsing homestay listings
 *
 * @component
 * @example
 * // Basic usage
 * <Homestays />
 *
 * @example
 * // With pre-loaded data
 * <Homestays
 *   homestays={homestayList}
 *   totalCount={150}
 *   onFilter={(filters) => fetchFiltered(filters)}
 * />
 */

import type { FilterState } from '../../organisms/SearchFilters';
import type { Homestay } from "../../../types/api.types.ts";

export interface HomestaysProps {
	/** Array of homestay listings */
	homestays?: Homestay[];
	/** Total count of listings (for pagination info) */
	totalCount?: number;
	/** Whether data is loading */
	loading?: boolean;
	/** Current filter state */
	filters?: FilterState;
	/** Callback when filters change */
	onFilterChange?: (filters: FilterState) => void;
	/** Callback when filters are applied (mobile) */
	onApplyFilters?: () => void;
	/** Callback when filters are cleared */
	onClearFilters?: () => void;
	/** Array of saved listing IDs */
	savedIds?: string[];
	/** Callback when a listing is saved/unsaved */
	onSave?: (id: string) => void;
	/** Current page number */
	page?: number;
	/** Total pages */
	totalPages?: number;
	/** Callback when page changes */
	onPageChange?: (page: number) => void;
	/** Additional CSS classes */
	className?: string;
}
