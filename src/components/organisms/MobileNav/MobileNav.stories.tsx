import type { Meta, StoryObj } from '@storybook/react';
import { MobileNav } from './MobileNav';

const meta = {
	title: 'Organisms/MobileNav',
	component: MobileNav,
	parameters: {
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="min-h-screen pb-16 bg-base-200">
				<div className="p-4">
					<p className="text-sm text-base-content/60">
						Mobile navigation appears at the bottom of the screen.
						Resize viewport or use mobile view to see it.
					</p>
				</div>
				<Story />
			</div>
		),
	],
	argTypes: {
		activeItem: {
			control: { type: 'select' },
			options: ['home', 'search', 'saved', 'cart', 'profile'],
			description: 'Currently active navigation item',
		},
		cartItemCount: {
			control: { type: 'number', min: 0, max: 99 },
			description: 'Number of items in cart',
		},
	},
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// Home active
export const Home: Story = {
	args: {
		activeItem: 'home',
	},
};

// Search active
export const Search: Story = {
	args: {
		activeItem: 'search',
	},
};

// Saved active
export const Saved: Story = {
	args: {
		activeItem: 'saved',
	},
};

// Cart active
export const Cart: Story = {
	args: {
		activeItem: 'cart',
	},
};

// Cart with items
export const CartWithItems: Story = {
	args: {
		activeItem: 'cart',
		cartItemCount: 3,
	},
};

// Cart with many items (shows 9+)
export const CartWithManyItems: Story = {
	args: {
		activeItem: 'home',
		cartItemCount: 15,
	},
};

// Profile active
export const Profile: Story = {
	args: {
		activeItem: 'profile',
	},
};
