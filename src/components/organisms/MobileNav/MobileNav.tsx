import { NavLink } from 'react-router';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';
import type { MobileNavItem, MobileNavProps } from './MobileNavProps';

/**
 * MobileNav organism component for mobile bottom navigation
 *
 * @param props - Component props
 * @returns MobileNav component
 */
export const MobileNav = ({
	cartItemCount = 0,
	className = ''
}: MobileNavProps) => {
	// Navigation items configuration
	const navItems: Array<{
		id: MobileNavItem;
		label: string;
		icon: string;
		href: string;
	}> = [
		{ id: 'home', label: 'Home', icon: 'home', href: '/' },
		{ id: 'search', label: 'Search', icon: 'search', href: '/search' },
		{ id: 'saved', label: 'Saved', icon: 'favorite', href: '/saved' },
		{ id: 'cart', label: 'Cart', icon: 'shopping_cart', href: '/cart' },
		{ id: 'profile', label: 'Profile', icon: 'person', href: '/profile' },
	];

	return (
		<nav
			className={`btm-nav btm-nav-sm md:hidden z-50 ${className}`.trim()}
			aria-label="Mobile navigation"
		>
			{navItems.map((item) => (
				<NavLink
					key={item.id}
					to={item.href}
					end={item.href === '/'}
					className={({ isActive }) =>
						`${isActive ? 'active text-primary' : 'text-base-content/70'}`
					}
				>
					{({ isActive }) => (
						<>
							<div className="indicator">
								<Icon
									name={item.icon}
									size="md"
									fill={isActive}
								/>
								{item.id === 'cart' && cartItemCount > 0 && (
									<Badge
										variant="error"
										size="xs"
										className="indicator-item"
									>
										{cartItemCount > 9 ? '9+' : cartItemCount}
									</Badge>
								)}
							</div>
							<span className="btm-nav-label text-xs">{item.label}</span>
						</>
					)}
				</NavLink>
			))}
		</nav>
	);
};
