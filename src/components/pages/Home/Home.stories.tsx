import type { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';
import { MainLayout } from '../../layouts/MainLayout';

const meta = {
	title: 'Pages/Home',
	component: Home,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default home page
export const Default: Story = {
	args: {
		onSearch: (query) => console.log('Search:', query),
		onCategoryClick: (category) => console.log('Category:', category),
		onDestinationClick: (id) => console.log('Destination:', id),
	},
};

// Home page with MainLayout
export const WithLayout: Story = {
	args: {
		onSearch: (query) => console.log('Search:', query),
	},
	decorators: [
		(Story) => (
			<MainLayout containerWidth="full">
				<Story />
			</MainLayout>
		),
	],
};

// Home page with logged in user in layout
export const WithLoggedInUser: Story = {
	args: {
		onSearch: (query) => console.log('Search:', query),
	},
	decorators: [
		(Story) => (
			<MainLayout
				containerWidth="full"
				user={{
					id: '1',
					name: 'Priya Sharma',
					avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
					role: 'tourist',
				}}
				cartItemCount={3}
			>
				<Story />
			</MainLayout>
		),
	],
};

// Empty static content (homestays fetched from API)
export const EmptyStaticContent: Story = {
	args: {
		featuredDestinations: [],
		testimonials: [],
	},
};

// Custom static content (homestays fetched from API)
export const CustomStaticContent: Story = {
	args: {
		featuredDestinations: [
			{
				id: '1',
				name: 'Dalma Wildlife Sanctuary',
				image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
				listingCount: 8,
			},
			{
				id: '2',
				name: 'Parasnath Hill',
				image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop',
				listingCount: 15,
			},
		],
		testimonials: [
			{
				id: '1',
				name: 'John Smith',
				text: 'An incredible journey through tribal Jharkhand. The homestay experience was unforgettable!',
				rating: 5,
				location: 'USA',
			},
		],
	},
};
