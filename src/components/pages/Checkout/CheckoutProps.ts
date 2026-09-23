/**
 * Checkout page component for the payment step of the checkout flow
 *
 * @component
 * @example
 * // Basic usage
 * <Checkout />
 *
 * @example
 * // With external booking data
 * <Checkout
 *   bookingDetails={bookingData}
 *   onComplete={handleComplete}
 * />
 */

export interface CheckoutProps {
	/** Loading state */
	loading?: boolean;
	/** Callback when payment is completed */
	onComplete?: (paymentDetails: PaymentDetails) => void;
	/** Additional CSS classes */
	className?: string;
}

export interface PaymentDetails {
	paymentMethod: 'card' | 'upi' | 'netbanking';
	transactionId?: string;
}
