/**
 * Booking page component for the first step of the checkout flow
 *
 * @component
 * @example
 * // Basic usage - reads homestayId from URL params
 * <Booking />
 *
 * @example
 * // With external data
 * <Booking
 *   homestay={homestayData}
 *   onContinue={handleContinue}
 * />
 */

export interface BookingProps {
	/** Homestay ID (if not using URL params) */
	homestayId?: string;
	/** Loading state */
	loading?: boolean;
	/** Callback when continuing to checkout */
	onContinue?: (bookingDetails: BookingDetails) => void;
	/** Additional CSS classes */
	className?: string;
}

export interface BookingDetails {
	homestayId: string;
	checkIn: string;
	checkOut: string;
	guests: number;
	guestName: string;
	guestEmail: string;
	guestPhone: string;
	specialRequests?: string;
}
