import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta = {
	title: 'Organisms/Navbar',
	component: Navbar,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {
		cartItemCount: {
			control: { type: 'number', min: 0, max: 99 },
			description: 'Number of items in cart',
		},
	},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default (logged out)
export const Default: Story = {
	args: {},
};

// With cart items
export const WithCartItems: Story = {
	args: {
		cartItemCount: 3,
	},
};

// Many cart items (shows 9+)
export const ManyCartItems: Story = {
	args: {
		cartItemCount: 15,
	},
};

// Logged in as tourist
export const LoggedInTourist: Story = {
	args: {
		user: {
			id: '1',
			name: 'Aarav Kumar',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
			role: 'tourist',
		},
		cartItemCount: 2,
		onLogout: () => console.log('Logout clicked'),
	},
};

// Logged in as provider
export const LoggedInProvider: Story = {
	args: {
		user: {
			id: '2',
			name: 'Ramesh Singh',
			avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
			role: 'provider',
		},
		cartItemCount: 0,
		onLogout: () => console.log('Logout clicked'),
	},
};

// Without avatar (shows placeholder)
export const NoAvatar: Story = {
	args: {
		user: {
			id: '3',
			name: 'Priya Devi',
			role: 'tourist',
		},
		onLogout: () => console.log('Logout clicked'),
	},
};

// With search callback
export const WithSearch: Story = {
	args: {
		onSearch: (query) => console.log('Search:', query),
	},
};

// Full featured
export const FullFeatured: Story = {
	args: {
		user: {
			id: '1',
			name: 'Aarav Kumar',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
			role: 'tourist',
		},
		cartItemCount: 5,
		onLogout: () => console.log('Logout clicked'),
		onSearch: (query) => console.log('Search:', query),
	},
};
