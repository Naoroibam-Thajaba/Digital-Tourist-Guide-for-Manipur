import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './Rating';

const meta = {
	title: 'Atoms/Rating',
	component: Rating,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		name: 'rating-default',
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			description: 'Size of the rating',
		},
		mask: {
			control: 'select',
			options: ['star', 'star-2', 'heart'],
			description: 'Shape mask for rating items',
		},
		totalStars: {
			control: 'number',
			description: 'Total number of stars/items',
		},
		color: {
			control: 'text',
			description: 'Tailwind color class',
		},
		half: {
			control: 'boolean',
			description: 'Enable half-star ratings',
		},
		showClearButton: {
			control: 'boolean',
			description: 'Show hidden clear button',
		},
		readOnly: {
			control: 'boolean',
			description: 'Make rating read-only',
		},
		gap: {
			control: 'boolean',
			description: 'Add gap between items',
		},
	},
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Rating
export const Default: Story = {
	args: {
		name: 'rating-1',
		totalStars: 5,
		defaultValue: 2,
	},
};

// Read-only Rating
export const ReadOnly: Story = {
	args: {
		name: 'rating-readonly',
		totalStars: 5,
		value: 3,
		readOnly: true,
	},
};

// Star-2 with Warning Color
export const Star2Warning: Story = {
	args: {
		name: 'rating-2',
		totalStars: 5,
		mask: 'star-2',
		color: 'bg-orange-400',
		defaultValue: 2,
	},
};

// Heart with Multiple Colors
export const HeartMultipleColors: Story = {
	render: () => (
		<div className="rating gap-1">
			<input type="radio" name="rating-3" className="mask mask-heart bg-red-400" aria-label="1 star" />
			<input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" aria-label="2 star" defaultChecked />
			<input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" aria-label="3 star" />
			<input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" aria-label="4 star" />
			<input type="radio" name="rating-3" className="mask mask-heart bg-green-400" aria-label="5 star" />
		</div>
	),
};

// Star-2 with Green Color
export const Star2Green: Story = {
	args: {
		name: 'rating-4',
		totalStars: 5,
		mask: 'star-2',
		color: 'bg-green-500',
		defaultValue: 2,
	},
};

// Sizes
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-2 items-center">
			<Rating name="rating-5" totalStars={5} size="xs" mask="star-2" color="bg-orange-400" defaultValue={2} />
			<Rating name="rating-6" totalStars={5} size="sm" mask="star-2" color="bg-orange-400" defaultValue={2} />
			<Rating name="rating-7" totalStars={5} size="md" mask="star-2" color="bg-orange-400" defaultValue={2} />
			<Rating name="rating-8" totalStars={5} size="lg" mask="star-2" color="bg-orange-400" defaultValue={2} />
			<Rating name="rating-9" totalStars={5} size="xl" mask="star-2" color="bg-orange-400" defaultValue={2} />
		</div>
	),
};

// With Clear Button
export const WithClearButton: Story = {
	args: {
		name: 'rating-10',
		totalStars: 5,
		size: 'lg',
		mask: 'star-2',
		showClearButton: true,
		defaultValue: 2,
	},
};

// Half Stars
export const HalfStars: Story = {
	args: {
		name: 'rating-11',
		totalStars: 5,
		size: 'lg',
		mask: 'star-2',
		color: 'bg-green-500',
		half: true,
		showClearButton: true,
		defaultValue: 1.5,
	},
};

// All Mask Types
export const AllMaskTypes: Story = {
	render: () => (
		<div className="flex flex-col gap-4 items-center">
			<div className="text-center">
				<div className="text-sm mb-2">Star</div>
				<Rating name="mask-1" totalStars={5} mask="star" color="bg-yellow-400" defaultValue={3} />
			</div>
			<div className="text-center">
				<div className="text-sm mb-2">Star-2</div>
				<Rating name="mask-2" totalStars={5} mask="star-2" color="bg-orange-400" defaultValue={3} />
			</div>
			<div className="text-center">
				<div className="text-sm mb-2">Heart</div>
				<Rating name="mask-3" totalStars={5} mask="heart" color="bg-red-400" defaultValue={3} gap />
			</div>
		</div>
	),
};

// With Gap
export const WithGap: Story = {
	args: {
		name: 'rating-gap',
		totalStars: 5,
		mask: 'heart',
		color: 'bg-red-400',
		gap: true,
		defaultValue: 3,
	},
};

// Interactive Example
export const Interactive: Story = {
	render: () => {
		const handleChange = (value: number) => {
			console.log('Rating changed to:', value);
		};

		return (
			<div className="flex flex-col gap-4">
				<Rating
					name="interactive-rating"
					totalStars={5}
					mask="star-2"
					color="bg-orange-400"
					size="lg"
					showClearButton
					onChange={handleChange}
				/>
				<p className="text-sm text-gray-600">Check console for rating changes</p>
			</div>
		);
	},
};
