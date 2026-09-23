/**
 * Toast component for displaying temporary notification messages
 *
 * Uses DaisyUI toast positioning with alert styling inside.
 * Supports multiple variants, auto-dismiss, and manual close.
 *
 * @component
 * @example
 * // Basic usage
 * <Toast message="Operation successful" variant="success" />
 *
 * @example
 * // With auto-dismiss
 * <Toast
 *   message="Changes saved"
 *   variant="info"
 *   duration={3000}
 *   onClose={() => setShowToast(false)}
 * />
 */

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export type ToastPosition =
	| 'top-start'
	| 'top-center'
	| 'top-end'
	| 'middle-start'
	| 'middle-center'
	| 'middle-end'
	| 'bottom-start'
	| 'bottom-center'
	| 'bottom-end';

export interface ToastProps {
	/** Unique identifier for the toast */
	id?: string;
	/** The message to display */
	message: string;
	/** Visual variant of the toast */
	variant?: ToastVariant;
	/** Position on the screen */
	position?: ToastPosition;
	/** Auto-dismiss duration in milliseconds (0 = no auto-dismiss) */
	duration?: number;
	/** Whether to show a close button */
	showClose?: boolean;
	/** Callback when toast is closed/dismissed */
	onClose?: () => void;
	/** Additional CSS classes */
	className?: string;
}

export interface ToastItem extends ToastProps {
	id: string;
}
