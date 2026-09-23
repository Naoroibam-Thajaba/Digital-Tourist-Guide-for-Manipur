import type { ReactNode } from 'react';

/**
 * Badge component based on DaisyUI
 *
 * @component
 * @example
 * // Basic badge
 * <Badge>New</Badge>
 *
 * @example
 * // Badge with color
 * <Badge variant="primary">Primary</Badge>
 *
 * @example
 * // Badge with size and style
 * <Badge size="lg" style="outline" variant="success">Success</Badge>
 *
 * @example
 * // Badge with icon
 * <Badge variant="info">
 *   <svg className="size-[1em]">...</svg>
 *   Info
 * </Badge>
 */

export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BadgeVariant = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
export type BadgeStyle = 'default' | 'outline' | 'dash' | 'soft' | 'ghost';

export interface BadgeProps {
	/** Badge content (text or elements) */
	children?: ReactNode;
	/** Predefined size of the badge */
	size?: BadgeSize;
	/** Color variant */
	variant?: BadgeVariant;
	/** Style variant */
	style?: BadgeStyle;
	/** Additional CSS classes */
	className?: string;
}