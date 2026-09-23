/**
 * NotFound page component for 404 errors
 *
 * @component
 * @example
 * // Basic usage
 * <NotFound />
 *
 * @example
 * // With custom home link
 * <NotFound homeUrl="/" />
 */

export interface QuickLink {
	/** Link label */
	label: string;
	/** Link URL */
	href: string;
	/** Material icon name */
	icon?: string;
}

export interface NotFoundProps {
	/** Custom title */
	title?: string;
	/** Custom description */
	description?: string;
	/** Home page URL */
	homeUrl?: string;
	/** Quick links to display */
	quickLinks?: QuickLink[];
	/** Additional CSS classes */
	className?: string;
}
