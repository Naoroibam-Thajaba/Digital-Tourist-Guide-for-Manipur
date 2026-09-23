import type { ReactNode, HTMLAttributes } from 'react';

/**
 * Skeleton component based on DaisyUI
 *
 * @component
 * @example
 * // Basic skeleton
 * <Skeleton width="w-32" height="h-32" />
 *
 * @example
 * // Circle skeleton
 * <Skeleton shape="circle" width="w-16" height="h-16" />
 *
 * @example
 * // Skeleton text
 * <Skeleton variant="text">AI is thinking harder...</Skeleton>
 *
 * @example
 * // Custom styled skeleton
 * <Skeleton width="w-full" height="h-32" className="rounded-lg" />
 */

export type SkeletonShape = 'rectangle' | 'circle' | 'custom';
export type SkeletonVariant = 'default' | 'text';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
	/** Variant of the skeleton */
	variant?: SkeletonVariant;
	/** Shape of the skeleton */
	shape?: SkeletonShape;
	/** Width using Tailwind classes (e.g., 'w-32', 'w-full') */
	width?: string;
	/** Height using Tailwind classes (e.g., 'h-32', 'h-4') */
	height?: string;
	/** Additional CSS classes */
	className?: string;
	/** Children content (only for skeleton-text variant) */
	children?: ReactNode;
}
