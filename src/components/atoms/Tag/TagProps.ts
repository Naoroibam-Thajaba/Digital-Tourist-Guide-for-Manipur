import type { ReactNode, HTMLAttributes } from 'react';

/**
 * Tag component based on DaisyUI Badge patterns
 *
 * @component
 * @example
 * // Basic tag
 * <Tag>React</Tag>
 *
 * @example
 * // Tag with color
 * <Tag variant="primary">JavaScript</Tag>
 *
 * @example
 * // Dismissible tag
 * <Tag dismissible onDismiss={() => console.log('dismissed')}>TypeScript</Tag>
 *
 * @example
 * // Interactive tag
 * <Tag interactive onClick={() => console.log('clicked')}>Next.js</Tag>
 *
 * @example
 * // Tag with icon
 * <Tag variant="info">
 *   <svg className="size-[1em]">...</svg>
 *   Important
 * </Tag>
 */

export type TagSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TagVariant = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
export type TagStyle = 'default' | 'outline' | 'soft' | 'ghost';

export interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onClick'> {
	/** Tag content (text or elements) */
	children?: ReactNode;
	/** Predefined size of the tag */
	size?: TagSize;
	/** Color variant */
	variant?: TagVariant;
	/** Style variant (use tagStyle to avoid conflict with HTML style attribute) */
	tagStyle?: TagStyle;
	/** Make tag dismissible with an X button */
	dismissible?: boolean;
	/** Make tag interactive (clickable with hover effects) */
	interactive?: boolean;
	/** Callback when tag is clicked (only if interactive=true) */
	onClick?: () => void;
	/** Callback when tag is dismissed (only if dismissible=true) */
	onDismiss?: () => void;
	/** Additional CSS classes */
	className?: string;
	/** Custom dismiss icon */
	dismissIcon?: ReactNode;
}
