/**
 * Footer organism component for site-wide footer
 *
 * @component
 * @example
 * // Basic footer
 * <Footer />
 *
 * @example
 * // Footer with newsletter callback
 * <Footer onNewsletterSubmit={(email) => subscribe(email)} />
 */

export interface FooterProps {
	/** Callback when newsletter form is submitted */
	onNewsletterSubmit?: (email: string) => void;
	/** Additional CSS classes */
	className?: string;
}
