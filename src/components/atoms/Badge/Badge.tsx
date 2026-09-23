import type { BadgeProps } from './BadgeProps';

/**
 * Badge component for displaying status indicators and labels
 *
 * @param props - Component props
 * @returns Badge component
 */
export const Badge = ({
	children,
	size = 'md',
	variant,
	style = 'default',
	className = ''
}: BadgeProps) => {
	// Size mapping
	const sizeClasses: Record<string, string> = {
		xs: 'badge-xs',
		sm: 'badge-sm',
		md: 'badge-md',
		lg: 'badge-lg',
		xl: 'badge-xl'
	};

	// Variant mapping
	const variantClasses: Record<string, string> = {
		neutral: 'badge-neutral',
		primary: 'badge-primary',
		secondary: 'badge-secondary',
		accent: 'badge-accent',
		info: 'badge-info',
		success: 'badge-success',
		warning: 'badge-warning',
		error: 'badge-error'
	};

	// Style mapping
	const styleClasses: Record<string, string> = {
		default: '',
		outline: 'badge-outline',
		dash: 'badge-dash',
		soft: 'badge-soft',
		ghost: 'badge-ghost'
	};

	// Build badge classes
	const badgeClasses = [
		'badge',
		sizeClasses[size],
		variant && variantClasses[variant],
		styleClasses[style],
		className
	].filter(Boolean).join(' ');

	return (
		<span className={badgeClasses} role="status">
			{children}
		</span>
	);
};