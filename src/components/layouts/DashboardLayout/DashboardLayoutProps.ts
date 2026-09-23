/**
 * DashboardLayout component for provider dashboard pages
 *
 * Features a sidebar navigation on desktop and drawer on mobile,
 * with a header containing user info and notifications.
 *
 * @component
 * @example
 * // Basic dashboard
 * <DashboardLayout
 *   user={{ id: '1', name: 'Host Name', role: 'provider' }}
 *   activeRoute="/dashboard"
 * >
 *   <DashboardContent />
 * </DashboardLayout>
 *
 * @example
 * // Listings page
 * <DashboardLayout
 *   user={user}
 *   activeRoute="/dashboard/listings"
 *   onLogout={() => logout()}
 * >
 *   <ListingsPage />
 * </DashboardLayout>
 */

export interface DashboardUser {
	/** User ID */
	id: string;
	/** User's display name */
	name: string;
	/** User's avatar URL */
	avatar?: string;
	/** User role (should be provider for dashboard) */
	role: 'provider';
}

export interface SidebarItem {
	/** Display label */
	label: string;
	/** Route path */
	href: string;
	/** Material icon name */
	icon: string;
	/** Optional badge count */
	badge?: number;
}

export interface DashboardLayoutProps {
	/** Page content (optional when using with React Router Outlet) */
	children?: React.ReactNode;
	/** Current user */
	user: { name: string; avatar?: string };
	/** Callback when user logs out */
	onLogout?: () => void;
	/** Notification count */
	notificationCount?: number;
	/** Additional CSS classes */
	className?: string;
}
