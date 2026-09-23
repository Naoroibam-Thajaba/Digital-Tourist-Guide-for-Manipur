/**
 * GuideDetail page component for displaying local guide profiles
 *
 * @component
 * @example
 * // Basic usage - reads guideId from URL params
 * <GuideDetail />
 *
 * @example
 * // With external data (API-driven)
 * <GuideDetail
 *   guide={guideData}
 *   loading={isLoading}
 *   onBook={handleBook}
 * />
 */

export interface GuideDetailProps {
	/** Guide ID (if not using URL params) */
	guideId?: string;
	/** Loading state */
	loading?: boolean;
	/** Callback when booking is initiated */
	onBook?: (guideId: string) => void;
	/** Additional CSS classes */
	className?: string;
}
