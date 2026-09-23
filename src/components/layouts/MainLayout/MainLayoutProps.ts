/**
 * MainLayout component for standard page wrapper
 *
 * @component
 * @example
 * // Basic usage
 * <MainLayout>
 *   <HomePage />
 * </MainLayout>
 *
 * @example
 * // With user and cart
 * <MainLayout
 *   user={{ id: '1', name: 'John', role: 'tourist' }}
 *   cartItemCount={3}
 *   onLogout={() => logout()}
 * >
 *   <HomePage />
 * </MainLayout>
 *
 * @example
 * // Narrow container without footer
 * <MainLayout containerWidth="narrow" showFooter={false}>
 *   <ArticlePage />
 * </MainLayout>
 */

import type { NavbarUser } from '../../organisms/Navbar';
import type { MobileNavItem } from '../../organisms/MobileNav';

export type ContainerWidth = 'full' | 'default' | 'narrow';

export interface MainLayoutProps {
	/** Page content (optional when using with React Router Outlet) */
	children?: React.ReactNode;
	/** Container width variant */
	containerWidth?: ContainerWidth;
	/** Whether to show the footer */
	showFooter?: boolean;
	/** Whether to show the mobile navigation */
	showMobileNav?: boolean;
	/** Current user (passed to Navbar) */
	user?: NavbarUser | null;
	/** Number of items in cart (passed to Navbar and MobileNav) */
	cartItemCount?: number;
	/** Active mobile nav item */
	activeMobileNavItem?: MobileNavItem;
	/** Callback when user logs out */
	onLogout?: () => void;
	/** Callback when search is submitted */
	onSearch?: (query: string) => void;
	/** Callback when newsletter is submitted */
	onNewsletterSubmit?: (email: string) => void;
	/** Additional CSS classes */
	className?: string;
}
