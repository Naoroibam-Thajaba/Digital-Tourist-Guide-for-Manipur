/**
 * CheckoutLayout component for booking and payment flows
 *
 * Features a minimal header, progress stepper, and centered content area.
 *
 * @component
 * @example
 * // Booking flow
 * <CheckoutLayout
 *   steps={['Details', 'Payment', 'Confirmation']}
 *   currentStep={0}
 *   title="Complete Your Booking"
 * >
 *   <BookingDetailsForm />
 * </CheckoutLayout>
 *
 * @example
 * // Cart checkout
 * <CheckoutLayout
 *   steps={['Cart', 'Shipping', 'Payment', 'Confirmation']}
 *   currentStep={2}
 *   onBack={() => goBack()}
 * >
 *   <PaymentForm />
 * </CheckoutLayout>
 */

export interface CheckoutLayoutProps {
	/** Step content (optional when using with React Router Outlet) */
	children?: React.ReactNode;
	/** Step labels for the progress stepper */
	steps: string[];
	/** Current step index (0-based) */
	currentStep: number;
	/** Optional page title */
	title?: string;
	/** Callback when back button is clicked */
	onBack?: () => void;
	/** Additional CSS classes */
	className?: string;
}
