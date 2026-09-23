import type { IconProps } from './IconProps';

/**
 * Icon component using Google Material Symbols
 *
 * @param props - Component props
 * @returns Icon component
 */
export const Icon = ({
	name,
	size = 'md',
	variant = 'outlined',
	color,
	weight = 400,
	fill = false,
	opticalSize = 24,
	grade = 0,
	className = '',
	onClick,
	ariaLabel
}: IconProps) => {
	// Size mapping (in pixels and rem)
	const sizeClasses: Record<string, string> = {
		xs: 'text-base', // 16px / 1rem
		sm: 'text-lg',   // 18px / 1.125rem
		md: 'text-2xl',  // 24px / 1.5rem
		lg: 'text-3xl',  // 30px / 1.875rem
		xl: 'text-4xl',  // 36px / 2.25rem
		'2xl': 'text-5xl', // 48px / 3rem
		'3xl': 'text-6xl'  // 60px / 3.75rem
	};

	// Color mapping to DaisyUI theme colors
	const colorClasses: Record<string, string> = {
		primary: 'text-primary',
		secondary: 'text-secondary',
		accent: 'text-accent',
		neutral: 'text-neutral',
		info: 'text-info',
		success: 'text-success',
		warning: 'text-warning',
		error: 'text-error',
		'base-content': 'text-base-content'
	};

	// Variant mapping to Material Symbols font families
	const variantClasses: Record<string, string> = {
		outlined: 'material-symbols-outlined',
		rounded: 'material-symbols-rounded',
		sharp: 'material-symbols-sharp'
	};

	// Build icon classes
	const iconClasses = [
		variantClasses[variant],
		sizeClasses[size],
		color && colorClasses[color],
		onClick && 'cursor-pointer',
		className
	].filter(Boolean).join(' ');

	// Build inline style for font variation settings
	const iconStyle = {
		fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`
	};

	// Keyboard handler for accessibility (Enter and Space activate the button)
	const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
		if (onClick && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			onClick();
		}
	};

	return (
		<span
			className={iconClasses}
			style={iconStyle}
			onClick={onClick}
			onKeyDown={onClick ? handleKeyDown : undefined}
			role={onClick ? 'button' : undefined}
			tabIndex={onClick ? 0 : undefined}
			aria-label={ariaLabel || name}
		>
			{name}
		</span>
	);
};
