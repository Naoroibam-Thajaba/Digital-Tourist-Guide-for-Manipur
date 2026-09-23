/**
 * Navbar organism component for site-wide navigation
 *
 * @component
 * @example
 * // Basic navbar (logged out)
 * <Navbar />
 *
 * @example
 * // Navbar with logged in user
 * <Navbar
 *   user={{ id: '1', name: 'John Doe', avatar: '/avatar.jpg' }}
 *   cartItemCount={3}
 *   onLogout={() => logout()}
 * />
 *
 * @example
 * // Navbar with search callback
 * <Navbar
 *   onSearch={(query) => navigate(`/search?q=${query}`)}
 * />
 */

export interface NavbarUser {
	/** User ID */
	id: string;
	/** User display name */
	name: string;
	/** User avatar URL */
	avatar?: string;
	/** User role */
	role?: 'tourist' | 'provider' | 'admin';
}

export interface NavbarProps {
	/** Current logged in user (null if not logged in) */
	user?: NavbarUser | null;
	/** Number of items in cart */
	cartItemCount?: number;
	/** Callback when user logs out */
	onLogout?: () => void;
	/** Callback when search is submitted */
	onSearch?: (query: string) => void;
	/** Additional CSS classes */
	className?: string;
}
