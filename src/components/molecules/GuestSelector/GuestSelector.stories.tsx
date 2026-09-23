import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GuestSelector } from './GuestSelector';
import type { GuestCount } from './GuestSelectorProps';

const meta = {
	title: 'Molecules/GuestSelector',
	component: GuestSelector,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		maxAdults: {
			control: { type: 'number', min: 1, max: 20 },
			description: 'Maximum number of adults allowed',
		},
		maxChildren: {
			control: { type: 'number', min: 0, max: 10 },
			description: 'Maximum number of children allowed',
		},
		minAdults: {
			control: { type: 'number', min: 0, max: 5 },
			description: 'Minimum number of adults required',
		},
	},
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof GuestSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic guest selector
export const Default: Story = {
	args: {
		onChange: (guests) => console.log('Guests:', guests),
	},
};

// With initial values
export const WithValues: Story = {
	args: {
		value: { adults: 2, children: 1 },
		onChange: (guests) => console.log('Guests:', guests),
	},
};

// Max reached
export const MaxReached: Story = {
	args: {
		value: { adults: 4, children: 2 },
		maxAdults: 4,
		maxChildren: 2,
		onChange: (guests) => console.log('Guests:', guests),
	},
};

// Min reached
export const MinReached: Story = {
	args: {
		value: { adults: 1, children: 0 },
		minAdults: 1,
		onChange: (guests) => console.log('Guests:', guests),
	},
};

// Custom limits
export const CustomLimits: Story = {
	args: {
		maxAdults: 8,
		maxChildren: 4,
		minAdults: 2,
		onChange: (guests) => console.log('Guests:', guests),
	},
};

// Controlled component
export const Controlled: Story = {
	args: {},
	render: function ControlledGuestSelector() {
		const [guests, setGuests] = useState<GuestCount>({
			adults: 2,
			children: 0,
		});

		return (
			<div className="space-y-4">
				<GuestSelector value={guests} onChange={setGuests} />
				<div className="text-sm p-3 bg-base-200 rounded-lg">
					<p><strong>Adults:</strong> {guests.adults}</p>
					<p><strong>Children:</strong> {guests.children}</p>
					<p><strong>Total:</strong> {guests.adults + guests.children}</p>
				</div>
			</div>
		);
	},
};

// In booking widget context
export const BookingContext: Story = {
	args: {},
	render: function BookingGuestSelector() {
		const [guests, setGuests] = useState<GuestCount>({
			adults: 1,
			children: 0,
		});

		const pricePerNight = 2500;
		const nights = 3;
		const totalGuests = guests.adults + guests.children;
		const extraGuestFee = totalGuests > 2 ? (totalGuests - 2) * 500 * nights : 0;
		const basePrice = pricePerNight * nights;
		const total = basePrice + extraGuestFee;

		return (
			<div className="card bg-base-100 shadow-lg p-6 w-80">
				<h3 className="font-semibold text-lg mb-4">Select Guests</h3>
				<GuestSelector
					value={guests}
					onChange={setGuests}
					maxAdults={6}
					maxChildren={4}
				/>
				<div className="divider"></div>
				<div className="space-y-2 text-sm">
					<div className="flex justify-between">
						<span>Base price ({nights} nights)</span>
						<span>Rs{basePrice.toLocaleString('en-IN')}</span>
					</div>
					{extraGuestFee > 0 && (
						<div className="flex justify-between text-base-content/70">
							<span>Extra guest fee</span>
							<span>Rs{extraGuestFee.toLocaleString('en-IN')}</span>
						</div>
					)}
					<div className="flex justify-between font-semibold pt-2 border-t">
						<span>Total</span>
						<span>Rs{total.toLocaleString('en-IN')}</span>
					</div>
				</div>
			</div>
		);
	},
};

// Group booking (higher limits)
export const GroupBooking: Story = {
	args: {
		maxAdults: 20,
		maxChildren: 10,
		minAdults: 5,
	},
	decorators: [
		(Story) => (
			<div className="w-80">
				<div className="alert alert-info mb-4">
					<span className="text-sm">Group booking: minimum 5 adults required</span>
				</div>
				<Story />
			</div>
		),
	],
};
