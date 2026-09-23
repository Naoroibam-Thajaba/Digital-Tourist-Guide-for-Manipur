/**
 * BookingWidget organism component for homestay booking
 *
 * @component
 * @example
 * // Basic booking widget
 * <BookingWidget
 *   pricePerNight={2500}
 *   maxGuests={4}
 *   onBook={(data) => handleBooking(data)}
 * />
 */

export interface BookingData {
	/** Check-in date */
	checkIn: string;
	/** Check-out date */
	checkOut: string;
	/** Number of guests */
	guests: number;
	/** Total price */
	totalPrice: number;
	/** Number of nights */
	nights: number;
}

export interface BookingWidgetProps {
	/** Price per night in INR */
	pricePerNight: number;
	/** Minimum nights required */
	minNights?: number;
	/** Maximum guests allowed */
	maxGuests?: number;
	/** Service fee percentage (default: 10%) */
	serviceFeePercent?: number;
	/** Whether the property is available */
	isAvailable?: boolean;
	/** Callback when booking is submitted */
	onBook?: (data: BookingData) => void;
	/** Additional CSS classes */
	className?: string;
}
