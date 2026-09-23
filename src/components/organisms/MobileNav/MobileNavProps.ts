/**
 * MobileNav organism component for mobile bottom navigation
 *
 * @component
 * @example
 * // Basic mobile nav
 * <MobileNav activeItem="home" />
 *
 * @example
 * // With cart badge
 * <MobileNav activeItem="cart" cartItemCount={3} />
 */

export type MobileNavItem = 'home' | 'search' | 'saved' | 'cart' | 'profile';

export interface MobileNavProps {
	/** Currently active navigation item */
	activeItem?: MobileNavItem;
	/** Number of items in cart (shows badge) */
	cartItemCount?: number;
	/** Additional CSS classes */
	className?: string;
}
