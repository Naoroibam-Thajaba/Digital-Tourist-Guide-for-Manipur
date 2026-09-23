/**
 * HostCard organism component for displaying host information
 *
 * @component
 * @example
 * <HostCard
 *   name="Ravi Kumar"
 *   avatar="https://..."
 *   rating={4.8}
 *   reviewCount={42}
 *   isSuperhost
 * />
 */

export interface HostCardProps {
	/** Host's name */
	name: string;
	/** Host's avatar URL */
	avatar?: string;
	/** Host's bio/description */
	bio?: string;
	/** Host's overall rating */
	rating?: number;
	/** Total number of reviews */
	reviewCount?: number;
	/** Response rate percentage */
	responseRate?: number;
	/** Average response time */
	responseTime?: string;
	/** Whether the host is a superhost */
	isSuperhost?: boolean;
	/** Date when host joined */
	joinedDate?: string;
	/** Number of properties hosted */
	listingsCount?: number;
	/** Callback when contact button is clicked */
	onContact?: () => void;
	/** Additional CSS classes */
	className?: string;
}
