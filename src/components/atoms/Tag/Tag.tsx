import type { TagProps } from './TagProps';

/**
 * Tag component for labels, categories, and filters
 *
 * @param props - Component props
 * @returns Tag component
 */
export const Tag = ({
	children,
	size = 'md',
	variant,
	tagStyle = 'default',
	dismissible = false,
	interactive = false,
	onClick,
	onDismiss,
	className = '',
	dismissIcon,
	...rest
}: TagProps) => {
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
		soft: 'badge-soft',
		ghost: 'badge-ghost'
	};

	// Build tag classes
	const tagClasses = [
		'badge',
		'gap-1',
		sizeClasses[size],
		variant && variantClasses[variant],
		styleClasses[tagStyle],
		interactive && 'cursor-pointer hover:scale-105 transition-transform',
		className
	].filter(Boolean).join(' ');

	// Handle tag click
	const handleClick = () => {
		if (interactive && onClick) {
			onClick();
		}
	};

	// Handle dismiss click
	const handleDismiss = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (onDismiss) {
			onDismiss();
		}
	};

	// Keyboard handler for accessibility (Enter and Space activate the tag)
	const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
		if (interactive && onClick && (e.key === 'Enter' || e.key === ' ')) {
			e.preventDefault();
			onClick();
		}
	};

	// Default dismiss icon
	const defaultDismissIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="2.5"
			stroke="currentColor"
			className="size-3"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);

	return (
		<span
			className={tagClasses}
			onClick={handleClick}
			onKeyDown={interactive ? handleKeyDown : undefined}
			role={interactive ? 'button' : undefined}
			tabIndex={interactive ? 0 : undefined}
			{...rest}
		>
			{children}
			{dismissible && (
				<button
					type="button"
					className="hover:opacity-70 transition-opacity"
					onClick={handleDismiss}
					aria-label="Remove tag"
				>
					{dismissIcon || defaultDismissIcon}
				</button>
			)}
		</span>
	);
};