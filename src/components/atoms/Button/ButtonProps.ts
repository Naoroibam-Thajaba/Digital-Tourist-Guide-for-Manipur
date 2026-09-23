import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

/**
 * Button component based on DaisyUI
 *
 * @component
 * @example
 * // Basic button
 * <Button>Click me</Button>
 *
 * @example
 * // Button with color
 * <Button variant="primary">Primary</Button>
 *
 * @example
 * // Button with size and style
 * <Button size="lg" style="outline" variant="success">Success</Button>
 *
 * @example
 * // Button with icon
 * <Button variant="info">
 *   <svg className="size-[1.2em]">...</svg>
 *   Like
 * </Button>
 *
 * @example
 * // Link button
 * <Button as="a" href="/about">About</Button>
 */

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariant = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
export type ButtonStyle = 'default' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
export type ButtonAs = 'button' | 'a';

interface BaseButtonProps {
	/** Button content (text or elements) */
	children?: ReactNode;
	/** Predefined size of the button */
	size?: ButtonSize;
	/** Color variant */
	variant?: ButtonVariant;
	/** Style variant */
	style?: ButtonStyle;
	/** Additional CSS classes */
	className?: string;
	/** Makes the button look active */
	active?: boolean;
	/** Makes the button wider with more horizontal padding */
	wide?: boolean;
	/** Makes the button full width */
	block?: boolean;
	/** Makes the button square (1:1 ratio) */
	square?: boolean;
	/** Makes the button circular (1:1 ratio with rounded corners) */
	circle?: boolean;
	/** Loading state - shows loading spinner */
	loading?: boolean;
}

export interface ButtonAsButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
	/** HTML element to render as */
	as?: 'button';
}

export interface ButtonAsAnchorProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
	/** HTML element to render as */
	as: 'a';
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;
