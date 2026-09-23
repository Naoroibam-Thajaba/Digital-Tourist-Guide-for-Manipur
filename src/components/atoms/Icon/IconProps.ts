/**
 * Icon component based on Google Material Symbols
 *
 * @component
 * @example
 * // Basic icon
 * <Icon name="home" />
 *
 * @example
 * // Icon with size and color
 * <Icon name="favorite" size="lg" color="error" />
 *
 * @example
 * // Icon with custom styling
 * <Icon name="search" variant="rounded" weight={300} fill />
 *
 * @example
 * // Icon with optical size adjustment
 * <Icon name="settings" opticalSize={40} />
 */

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type IconVariant = 'outlined' | 'rounded' | 'sharp';
export type IconColor = 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' | 'base-content';

export interface IconProps {
	/** Name of the Material Symbol icon */
	name: string;
	/** Predefined size of the icon */
	size?: IconSize;
	/** Icon style variant (outlined, rounded, sharp) */
	variant?: IconVariant;
	/** Color variant from DaisyUI theme */
	color?: IconColor;
	/** Font weight (100-700) */
	weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
	/** Whether the icon should be filled */
	fill?: boolean;
	/** Optical size (20-48) - adjusts icon for different sizes */
	opticalSize?: number;
	/** Grade (-25 to 200) - fine-tune weight */
	grade?: number;
	/** Additional CSS classes */
	className?: string;
	/** Click handler */
	onClick?: () => void;
	/** ARIA label for accessibility */
	ariaLabel?: string;
}
