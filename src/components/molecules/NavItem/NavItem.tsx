import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';
import type { NavItemProps } from './NavItemProps';

/**
 * NavItem component for navigation menu items
 *
 * @param props - Component props
 * @returns NavItem component
 */
export const NavItem = ({
	icon,
	label,
	href,
	badge,
	badgeVariant = 'primary',
	isActive = false,
	onClick,
	className = ''
}: NavItemProps) => {
	// Build link classes
	const linkClasses = [
		'flex',
		'items-center',
		'gap-2',
		'px-3',
		'py-2',
		'rounded-lg',
		'transition-colors',
		'duration-200',
		isActive ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-base-200',
		className
	].filter(Boolean).join(' ');

	return (
		<li>
			<a
				href={href}
				className={linkClasses}
				onClick={onClick}
				aria-current={isActive ? 'page' : undefined}
			>
				<Icon
					name={icon}
					size="md"
					color={isActive ? 'primary' : undefined}
				/>
				<span className="flex-1">{label}</span>
				{badge !== undefined && (
					<Badge variant={badgeVariant} size="sm">
						{badge}
					</Badge>
				)}
			</a>
		</li>
	);
};
