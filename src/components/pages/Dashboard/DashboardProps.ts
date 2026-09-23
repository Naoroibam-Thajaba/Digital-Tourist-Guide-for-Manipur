/**
 * Dashboard page component for provider/host dashboard home
 *
 * @component
 * @example
 * <Dashboard />
 */

export interface DashboardProps {
	/** Loading state */
	loading?: boolean;
	/** Additional CSS classes */
	className?: string;
}

export interface DashboardStats {
	totalBookings: number;
	totalRevenue: number;
	averageRating: number;
	occupancyRate: number;
}
