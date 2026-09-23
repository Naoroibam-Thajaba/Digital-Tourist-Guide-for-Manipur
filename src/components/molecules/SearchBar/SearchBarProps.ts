/**
 * SearchBar component for search interfaces with optional filter button
 *
 * @component
 * @example
 * // Basic search bar
 * <SearchBar placeholder="Search destinations..." onSearch={(query) => console.log(query)} />
 *
 * @example
 * // Search bar with filter button
 * <SearchBar
 *   placeholder="Search homestays..."
 *   showFilterButton
 *   onFilterClick={() => setFiltersOpen(true)}
 *   onSearch={handleSearch}
 * />
 *
 * @example
 * // Controlled search bar
 * <SearchBar
 *   value={searchQuery}
 *   onChange={setSearchQuery}
 *   onSearch={handleSearch}
 * />
 */

export type SearchBarSize = 'sm' | 'md' | 'lg';

export interface SearchBarProps {
	/** Controlled value */
	value?: string;
	/** Default value for uncontrolled mode */
	defaultValue?: string;
	/** Placeholder text */
	placeholder?: string;
	/** Callback when search is submitted */
	onSearch?: (query: string) => void;
	/** Callback when value changes */
	onChange?: (value: string) => void;
	/** Callback when filter button is clicked */
	onFilterClick?: () => void;
	/** Show filter button */
	showFilterButton?: boolean;
	/** Size variant */
	size?: SearchBarSize;
	/** Additional CSS classes */
	className?: string;
}
