import { Icon } from '../../atoms/Icon';
import type { FilterChipProps } from './FilterChipProps';

/**
 * FilterChip component for displaying active filters
 *
 * @param props - Component props
 * @returns FilterChip component
 */
export const FilterChip = ({
	label,
	onRemove,
	variant = 'neutral',
	size = 'md',
	icon,
	className = ''
}: FilterChipProps) => {
	// Size mapping
	const sizeClasses: Record<string, string> = {
		sm: 'badge-sm',
		md: 'badge-md',
		lg: 'badge-lg'
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

	// Icon size based on chip size
	const iconSizes: Record<string, 'xs' | 'sm' | 'md'> = {
		sm: 'xs',
		md: 'xs',
		lg: 'sm'
	};

	// Build classes
	const chipClasses = [
		'badge',
		'badge-outline',
		sizeClasses[size],
		variantClasses[variant],
		'gap-1',
		onRemove && 'pr-1',
		className
	].filter(Boolean).join(' ');

	// Handle remove click
	const handleRemove = (e: React.MouseEvent) => {
		e.stopPropagation();
		onRemove?.();
	};

	return (
		<span className={chipClasses}>
			{icon && (
				<Icon
					name={icon}
					size={iconSizes[size]}
				/>
			)}
			{label}
			{onRemove && (
				<button
					type="button"
					onClick={handleRemove}
					className="btn btn-ghost btn-xs btn-circle -mr-1 hover:bg-base-content/10"
					aria-label={`Remove ${label} filter`}
				>
					<Icon name="close" size="xs" />
				</button>
			)}
		</span>
	);
};
