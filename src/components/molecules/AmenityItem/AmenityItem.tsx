import { Icon } from '../../atoms/Icon';
import type { AmenityItemProps } from './AmenityItemProps';

/**
 * AmenityItem component for displaying amenities
 *
 * @param props - Component props
 * @returns AmenityItem component
 */
export const AmenityItem = ({
	icon,
	label,
	available = true,
	size = 'md',
	className = ''
}: AmenityItemProps) => {
	// Size mapping for icons
	const iconSizes: Record<string, 'sm' | 'md' | 'lg'> = {
		sm: 'sm',
		md: 'md',
		lg: 'lg'
	};

	// Size mapping for text
	const textSizes: Record<string, string> = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	};

	// Build container classes
	const containerClasses = [
		'flex',
		'items-center',
		'gap-2',
		!available && 'opacity-50',
		className
	].filter(Boolean).join(' ');

	// Build label classes
	const labelClasses = [
		textSizes[size],
		!available && 'line-through'
	].filter(Boolean).join(' ');

	return (
		<div
			className={containerClasses}
			aria-disabled={!available || undefined}
			role="listitem"
		>
			<Icon
				name={icon}
				size={iconSizes[size]}
				color={available ? 'base-content' : 'neutral'}
				ariaLabel={available ? label : `${label} (unavailable)`}
			/>
			<span className={labelClasses}>
				{label}
				{!available && <span className="sr-only"> (unavailable)</span>}
			</span>
		</div>
	);
};
