import type { Meta, StoryObj } from '@storybook/react-vite';
import { Price } from './Price';

const meta = {
	title: 'Atoms/Price',
	component: Price,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		amount: 5000,
	},
	argTypes: {
		amount: {
			control: 'number',
			description: 'Price amount in INR',
		},
		originalAmount: {
			control: 'number',
			description: 'Original price for showing discount',
		},
		period: {
			control: 'text',
			description: 'Price period (e.g., "per night", "per day")',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg', 'xl'],
			description: 'Size variant',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
	},
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Price
export const Default: Story = {};

// Price with Period
export const WithPeriod: Story = {
	args: {
		amount: 5000,
		period: 'per night',
	},
};

// Price with Discount
export const WithDiscount: Story = {
	args: {
		amount: 5000,
		originalAmount: 7000,
	},
};

// Price with Discount and Period
export const WithDiscountAndPeriod: Story = {
	args: {
		amount: 5000,
		originalAmount: 7000,
		period: 'per night',
	},
};

// Price Sizes
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4 items-start">
			<Price amount={5000} size="sm" period="per night" />
			<Price amount={5000} size="md" period="per night" />
			<Price amount={5000} size="lg" period="per night" />
			<Price amount={5000} size="xl" period="per night" />
		</div>
	),
};

// Price Sizes with Discount
export const SizesWithDiscount: Story = {
	render: () => (
		<div className="flex flex-col gap-4 items-start">
			<Price amount={5000} originalAmount={7000} size="sm" period="per night" />
			<Price amount={5000} originalAmount={7000} size="md" period="per night" />
			<Price amount={5000} originalAmount={7000} size="lg" period="per night" />
			<Price amount={5000} originalAmount={7000} size="xl" period="per night" />
		</div>
	),
};

// Different Price Ranges
export const PriceRanges: Story = {
	render: () => (
		<div className="flex flex-col gap-3 items-start">
			<Price amount={999} period="per person" />
			<Price amount={2500} period="per night" />
			<Price amount={15000} period="per package" />
			<Price amount={45000} period="for 3 nights" />
			<Price amount={125000} period="per week" />
		</div>
	),
};

// Tourism Package Examples
export const TourismPackages: Story = {
	render: () => (
		<div className="flex flex-col gap-4 items-start">
			<div>
				<p className="text-sm font-medium mb-1">Budget Hotel</p>
				<Price amount={1500} originalAmount={2000} period="per night" size="md" />
			</div>

			<div>
				<p className="text-sm font-medium mb-1">Premium Resort</p>
				<Price amount={8500} originalAmount={12000} period="per night" size="lg" />
			</div>

			<div>
				<p className="text-sm font-medium mb-1">Adventure Package</p>
				<Price amount={25000} originalAmount={35000} period="for 5 days" size="lg" />
			</div>

			<div>
				<p className="text-sm font-medium mb-1">Guided Tour</p>
				<Price amount={1200} period="per person" size="sm" />
			</div>
		</div>
	),
};

// High Discount Examples
export const HighDiscounts: Story = {
	render: () => (
		<div className="flex flex-col gap-3 items-start">
			<Price amount={3000} originalAmount={6000} period="per night" size="lg" />
			<Price amount={15000} originalAmount={25000} period="per package" size="lg" />
			<Price amount={8000} originalAmount={16000} period="for 3 nights" size="lg" />
		</div>
	),
};

// Different Periods
export const DifferentPeriods: Story = {
	render: () => (
		<div className="flex flex-col gap-3 items-start">
			<Price amount={1500} period="per night" />
			<Price amount={3000} period="per person" />
			<Price amount={25000} period="per package" />
			<Price amount={5000} period="for 2 days" />
			<Price amount={15000} period="for a week" />
			<Price amount={2500} period="/ night" />
		</div>
	),
};

// Card Integration Example
export const InCard: Story = {
	render: () => (
		<div className="card bg-base-100 w-80 shadow-xl">
			<figure className="h-48 bg-base-300"></figure>
			<div className="card-body">
				<h2 className="card-title">Luxury Resort Stay</h2>
				<p className="text-sm text-base-content/70">
					Experience comfort and luxury in the heart of Jharkhand
				</p>
				<div className="card-actions justify-between items-center mt-2">
					<Price amount={6500} originalAmount={9000} period="per night" size="lg" />
					<button className="btn btn-primary btn-sm">Book Now</button>
				</div>
			</div>
		</div>
	),
	parameters: {
		layout: 'padded',
	},
};
