/**
 * NotImplementedLink component for placeholder links
 *
 * Use this component for features that are planned but not yet implemented.
 * Clicking shows a toast notification instead of navigating.
 *
 * @component
 * @example
 * // Basic usage
 * <NotImplementedLink feature="Settings">Go to Settings</NotImplementedLink>
 *
 * @example
 * // As button style
 * <NotImplementedLink feature="Cart" className="btn btn-primary">
 *   View Cart
 * </NotImplementedLink>
 */

import type { ReactNode } from 'react';

export interface NotImplementedLinkProps {
	/** The feature name to display in the toast */
	feature?: string;
	/** Content to render inside the link */
	children: ReactNode;
	/** Additional CSS classes */
	className?: string;
	/** HTML element to render (default: 'a') */
	as?: 'a' | 'button' | 'span';
}
