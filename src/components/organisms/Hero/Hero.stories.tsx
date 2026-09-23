import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta = {
	title: 'Organisms/Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {
		onSearch: {
			action: 'search',
		},
	},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default hero
export const Default: Story = {
	args: {},
};

// With search callback
export const WithSearchCallback: Story = {
	args: {
		onSearch: (query) => console.log('Search:', query),
	},
};

// Custom title and subtitle
export const CustomContent: Story = {
	args: {
		title: 'Explore Hidden Gems',
		subtitle: 'Uncover the natural beauty and rich cultural heritage of Jharkhand with our curated experiences.',
	},
};

// Different background image
export const AlternateBackground: Story = {
	args: {
		backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop',
		title: 'Nature Awaits',
		subtitle: 'From waterfalls to wildlife, discover the untouched wilderness of Jharkhand.',
	},
};

// Waterfall theme
export const WaterfallTheme: Story = {
	args: {
		backgroundImage: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&h=1080&fit=crop',
		title: 'Witness Majestic Waterfalls',
		subtitle: 'Jharkhand is home to over 100 waterfalls. Let us guide you to the most spectacular ones.',
	},
};

// Forest theme
export const ForestTheme: Story = {
	args: {
		backgroundImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&h=1080&fit=crop',
		title: 'Into the Wild',
		subtitle: 'Trek through ancient forests, spot wildlife, and experience the serenity of nature.',
	},
};
