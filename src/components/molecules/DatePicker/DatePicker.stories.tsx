import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import type { DateRange } from './DatePickerProps';

const meta = {
	title: 'Molecules/DatePicker',
	component: DatePicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		startLabel: {
			control: 'text',
			description: 'Label for start date field',
		},
		endLabel: {
			control: 'text',
			description: 'Label for end date field',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the picker is disabled',
		},
	},
	decorators: [
		(Story) => (
			<div className="w-96">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic date picker
export const Default: Story = {
	args: {
		onChange: (range) => console.log('Date range:', range),
	},
};

// With pre-selected dates
export const WithValue: Story = {
	args: {
		value: {
			startDate: new Date(),
			endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
		},
		onChange: (range) => console.log('Date range:', range),
	},
};

// With error
export const WithError: Story = {
	args: {
		error: 'Please select valid check-in and check-out dates',
		onChange: (range) => console.log('Date range:', range),
	},
};

// Disabled
export const Disabled: Story = {
	args: {
		value: {
			startDate: new Date(),
			endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
		},
		disabled: true,
	},
};

// Custom labels
export const CustomLabels: Story = {
	args: {
		startLabel: 'Arrival Date',
		endLabel: 'Departure Date',
		onChange: (range) => console.log('Date range:', range),
	},
};

// With min date (today)
export const MinMaxDates: Story = {
	args: {
		minDate: new Date(),
		maxDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
		onChange: (range) => console.log('Date range:', range),
	},
};

// Controlled component
export const Controlled: Story = {
	args: {
		startLabel: 'Check-in',
		endLabel: 'Check-out',
	},
	render: function ControlledDatePicker(args) {
		const [dateRange, setDateRange] = useState<DateRange>({
			startDate: null,
			endDate: null,
		});

		// Calculate nights
		const calculateNights = () => {
			if (!dateRange.startDate || !dateRange.endDate) return 0;
			const diff = dateRange.endDate.getTime() - dateRange.startDate.getTime();
			return Math.ceil(diff / (1000 * 60 * 60 * 24));
		};

		const nights = calculateNights();

		return (
			<div className="space-y-4">
				<DatePicker
					{...args}
					value={dateRange}
					onChange={setDateRange}
					minDate={new Date()}
				/>
				<div className="text-sm text-base-content/70 p-3 bg-base-200 rounded-lg">
					<p><strong>Start:</strong> {dateRange.startDate?.toLocaleDateString() || 'Not selected'}</p>
					<p><strong>End:</strong> {dateRange.endDate?.toLocaleDateString() || 'Not selected'}</p>
					{nights > 0 && <p><strong>Duration:</strong> {nights} night{nights > 1 ? 's' : ''}</p>}
				</div>
			</div>
		);
	},
};

// Booking widget context
export const BookingContext: Story = {
	args: {},
	render: function BookingDatePicker() {
		const [dateRange, setDateRange] = useState<DateRange>({
			startDate: null,
			endDate: null,
		});
		const [error, setError] = useState<string | undefined>();

		const handleChange = (range: DateRange) => {
			setDateRange(range);

			// Validation
			if (range.startDate && range.endDate) {
				const nights = Math.ceil(
					(range.endDate.getTime() - range.startDate.getTime()) / (1000 * 60 * 60 * 24)
				);
				if (nights < 1) {
					setError('Minimum stay is 1 night');
				} else {
					setError(undefined);
				}
			} else {
				setError(undefined);
			}
		};

		return (
			<div className="card bg-base-100 shadow-lg p-6 w-80">
				<h3 className="font-semibold text-lg mb-4">Book your stay</h3>
				<DatePicker
					value={dateRange}
					onChange={handleChange}
					minDate={new Date()}
					error={error}
				/>
				<button
					className="btn btn-primary btn-block mt-4"
					disabled={!dateRange.startDate || !dateRange.endDate || !!error}
				>
					Check Availability
				</button>
			</div>
		);
	},
};

// Tour booking (different labels)
export const TourBooking: Story = {
	args: {
		startLabel: 'Tour Start',
		endLabel: 'Tour End',
	},
	render: function TourDatePicker(args) {
		const [dateRange, setDateRange] = useState<DateRange>({
			startDate: null,
			endDate: null,
		});

		return (
			<div className="card bg-base-100 shadow-lg p-6 w-80">
				<h3 className="font-semibold text-lg mb-2">Book a Guide</h3>
				<p className="text-sm text-base-content/60 mb-4">Select your tour dates</p>
				<DatePicker
					{...args}
					value={dateRange}
					onChange={setDateRange}
					minDate={new Date()}
				/>
			</div>
		);
	},
};
