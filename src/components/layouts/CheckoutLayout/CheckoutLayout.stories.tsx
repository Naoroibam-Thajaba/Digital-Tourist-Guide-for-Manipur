import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutLayout } from './CheckoutLayout';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';

const meta = {
	title: 'Layouts/CheckoutLayout',
	component: CheckoutLayout,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CheckoutLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample Booking Details Form
const BookingDetailsStep = () => (
	<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
		{/* Main Form */}
		<div className="lg:col-span-2 space-y-6">
			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<h2 className="card-title">Guest Information</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<fieldset className="fieldset">
							<legend className="fieldset-legend">First Name</legend>
							<input type="text" className="input input-bordered w-full" placeholder="John" />
						</fieldset>
						<fieldset className="fieldset">
							<legend className="fieldset-legend">Last Name</legend>
							<input type="text" className="input input-bordered w-full" placeholder="Doe" />
						</fieldset>
						<fieldset className="fieldset">
							<legend className="fieldset-legend">Email</legend>
							<input type="email" className="input input-bordered w-full" placeholder="john@example.com" />
						</fieldset>
						<fieldset className="fieldset">
							<legend className="fieldset-legend">Phone</legend>
							<input type="tel" className="input input-bordered w-full" placeholder="+91 98765 43210" />
						</fieldset>
					</div>
				</div>
			</div>

			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<h2 className="card-title">Special Requests</h2>
					<textarea
						className="textarea textarea-bordered w-full"
						placeholder="Any special requirements or requests..."
						rows={3}
					/>
				</div>
			</div>
		</div>

		{/* Order Summary */}
		<div className="card bg-base-100 shadow h-fit sticky top-4">
			<div className="card-body">
				<h2 className="card-title">Booking Summary</h2>
				<div className="space-y-2 text-sm">
					<div className="flex justify-between">
						<span>Peaceful Cottage</span>
						<span>2 nights</span>
					</div>
					<div className="flex justify-between text-base-content/60">
						<span>₹2,500 x 2 nights</span>
						<span>₹5,000</span>
					</div>
					<div className="flex justify-between text-base-content/60">
						<span>Cleaning fee</span>
						<span>₹500</span>
					</div>
					<div className="flex justify-between text-base-content/60">
						<span>Service fee</span>
						<span>₹550</span>
					</div>
					<div className="divider my-2"></div>
					<div className="flex justify-between font-semibold text-lg">
						<span>Total</span>
						<span>₹6,050</span>
					</div>
				</div>
				<Button variant="primary" className="w-full mt-4">
					Continue to Payment
				</Button>
			</div>
		</div>
	</div>
);

// Sample Payment Form
const PaymentStep = () => (
	<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
		<div className="lg:col-span-2 space-y-6">
			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<h2 className="card-title">Payment Method</h2>
					<div className="space-y-3">
						<label className="flex items-center gap-3 p-4 border border-base-300 rounded-lg cursor-pointer hover:border-primary">
							<input type="radio" name="payment" className="radio radio-primary" defaultChecked />
							<Icon name="credit_card" size="md" />
							<span>Credit/Debit Card</span>
						</label>
						<label className="flex items-center gap-3 p-4 border border-base-300 rounded-lg cursor-pointer hover:border-primary">
							<input type="radio" name="payment" className="radio radio-primary" />
							<Icon name="account_balance" size="md" />
							<span>UPI / Net Banking</span>
						</label>
					</div>
				</div>
			</div>

			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<h2 className="card-title">Card Details</h2>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Card Number</legend>
						<input type="text" className="input input-bordered w-full" placeholder="1234 5678 9012 3456" />
					</fieldset>
					<div className="grid grid-cols-2 gap-4">
						<fieldset className="fieldset">
							<legend className="fieldset-legend">Expiry Date</legend>
							<input type="text" className="input input-bordered w-full" placeholder="MM/YY" />
						</fieldset>
						<fieldset className="fieldset">
							<legend className="fieldset-legend">CVV</legend>
							<input type="text" className="input input-bordered w-full" placeholder="123" />
						</fieldset>
					</div>
				</div>
			</div>
		</div>

		<div className="card bg-base-100 shadow h-fit">
			<div className="card-body">
				<h2 className="card-title">Order Summary</h2>
				<div className="space-y-2 text-sm">
					<div className="flex justify-between font-semibold text-lg">
						<span>Total</span>
						<span>₹6,050</span>
					</div>
				</div>
				<Button variant="primary" className="w-full mt-4">
					Pay ₹6,050
				</Button>
				<p className="text-xs text-base-content/60 text-center mt-2">
					Your payment is secured with 256-bit encryption
				</p>
			</div>
		</div>
	</div>
);

// Sample Confirmation
const ConfirmationStep = () => (
	<div className="text-center py-8">
		<div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
			<Icon name="check_circle" size="xl" className="text-success" />
		</div>
		<h2 className="text-2xl font-heading font-bold mb-2">Booking Confirmed!</h2>
		<p className="text-base-content/60 mb-6">
			Your booking has been confirmed. A confirmation email has been sent to john@example.com
		</p>
		<div className="card bg-base-100 shadow max-w-md mx-auto">
			<div className="card-body">
				<h3 className="font-semibold">Booking Details</h3>
				<div className="text-sm space-y-2 text-left">
					<div className="flex justify-between">
						<span className="text-base-content/60">Booking ID</span>
						<span className="font-mono">JY-2024-1234</span>
					</div>
					<div className="flex justify-between">
						<span className="text-base-content/60">Property</span>
						<span>Peaceful Cottage</span>
					</div>
					<div className="flex justify-between">
						<span className="text-base-content/60">Check-in</span>
						<span>Dec 20, 2024</span>
					</div>
					<div className="flex justify-between">
						<span className="text-base-content/60">Check-out</span>
						<span>Dec 22, 2024</span>
					</div>
					<div className="flex justify-between">
						<span className="text-base-content/60">Total Paid</span>
						<span className="font-semibold">₹6,050</span>
					</div>
				</div>
			</div>
		</div>
		<div className="flex justify-center gap-4 mt-6">
			<Button as="a" href="/bookings" style="outline">
				View My Bookings
			</Button>
			<Button as="a" href="/" variant="primary">
				Back to Home
			</Button>
		</div>
	</div>
);

// Booking flow - Step 1
export const BookingStep1: Story = {
	args: {
		steps: ['Details', 'Payment', 'Confirmation'],
		currentStep: 0,
		title: 'Complete Your Booking',
		children: <BookingDetailsStep />,
	},
};

// Booking flow - Step 2
export const BookingStep2: Story = {
	args: {
		steps: ['Details', 'Payment', 'Confirmation'],
		currentStep: 1,
		title: 'Complete Your Booking',
		onBack: () => console.log('Go back'),
		children: <PaymentStep />,
	},
};

// Booking flow - Step 3
export const BookingStep3: Story = {
	args: {
		steps: ['Details', 'Payment', 'Confirmation'],
		currentStep: 2,
		title: 'Booking Confirmed',
		children: <ConfirmationStep />,
	},
};

// Cart checkout - 4 steps
export const CartCheckout: Story = {
	args: {
		steps: ['Cart', 'Shipping', 'Payment', 'Done'],
		currentStep: 1,
		title: 'Checkout',
		onBack: () => console.log('Go back'),
		children: (
			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<h2 className="card-title">Shipping Information</h2>
					<p className="text-base-content/60">Enter your shipping details...</p>
				</div>
			</div>
		),
	},
};

// Without title
export const NoTitle: Story = {
	args: {
		steps: ['Step 1', 'Step 2', 'Step 3'],
		currentStep: 0,
		children: (
			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<p>Content without a title in the header</p>
				</div>
			</div>
		),
	},
};

// With back button
export const WithBackButton: Story = {
	args: {
		steps: ['Details', 'Review', 'Confirm'],
		currentStep: 1,
		title: 'Review Your Order',
		onBack: () => console.log('Go back clicked'),
		children: (
			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<p>This layout has a back button instead of the logo</p>
				</div>
			</div>
		),
	},
};
