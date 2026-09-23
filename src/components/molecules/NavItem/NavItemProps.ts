/**
 * NavItem component for navigation menu items with icon, label, and optional badge
 *
 * @component
 * @example
 * // Basic nav item
 * <NavItem icon="home" label="Home" href="/" />
 *
 * @example
 * // Active nav item
 * <NavItem icon="cottage" label="Homestays" href="/homestays" isActive />
 *
 * @example
 * // Nav item with badge
 * <NavItem
 *   icon="shopping_cart"
 *   label="Cart"
 *   href="/cart"
 *   badge={3}
 *   badgeVariant="error"
 * />
 */

export type NavItemBadgeVariant = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

export interface NavItemProps {
	/** Material icon name */
	icon: string;
	/** Navigation label text */
	label: string;
	/** Navigation URL */
	href: string;
	/** Badge content (text or number) */
	badge?: string | number;
	/** Badge color variant */
	badgeVariant?: NavItemBadgeVariant;
	/** Whether this item is currently active */
	isActive?: boolean;
	/** Click handler */
	onClick?: () => void;
	/** Additional CSS classes */
	className?: string;
}
