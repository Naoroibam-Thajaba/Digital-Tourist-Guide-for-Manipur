import type { Meta, StoryObj } from '@storybook/react';
import { HomestayDetail } from './HomestayDetail';
import { MainLayout } from '../../layouts/MainLayout';

const meta = {
	title: 'Pages/HomestayDetail',
	component: HomestayDetail,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof HomestayDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default homestay detail page
export const Default: Story = {
	args: {
		onSave: () => console.log('Save toggled'),
		onShare: () => console.log('Share clicked'),
		onBook: (dates, guests) => console.log('Book:', { dates, guests }),
		onContactHost: () => console.log('Contact host'),
	},
};

// With MainLayout
export const WithLayout: Story = {
	args: {
		onSave: () => console.log('Save toggled'),
		onShare: () => console.log('Share clicked'),
		onBook: (dates, guests) => console.log('Book:', { dates, guests }),
	},
	decorators: [
		(Story) => (
			<MainLayout>
				<Story />
			</MainLayout>
		),
	],
};

// Loading state
export const Loading: Story = {
	args: {
		loading: true,
	},
};

// Saved state
export const Saved: Story = {
	args: {
		isSaved: true,
		onSave: () => console.log('Unsave'),
	},
};

// With logged in user
export const WithLoggedInUser: Story = {
	args: {
		isSaved: true,
		onSave: () => console.log('Toggle save'),
		onBook: (dates, guests) => console.log('Book:', { dates, guests }),
	},
	decorators: [
		(Story) => (
			<MainLayout
				user={{
					id: '1',
					name: 'Priya Sharma',
					avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
					role: 'tourist',
				}}
			>
				<Story />
			</MainLayout>
		),
	],
};

// Custom homestay data
export const PremiumProperty: Story = {
	args: {
		homestay: {
			id: '2',
			title: 'Luxury Treehouse at Dalma Hills',
			location: 'Dalma Wildlife Sanctuary, Jharkhand',
			description: `Experience luxury amidst nature in our stunning treehouse perched high in the ancient Sal forests of Dalma Hills. This architectural marvel offers panoramic views of the wildlife sanctuary and the perfect blend of adventure and comfort.

The treehouse features floor-to-ceiling windows, a private deck with jacuzzi, and a telescope for stargazing. Wake up to the calls of elephants and langurs, then enjoy a gourmet breakfast prepared by our private chef.

Ideal for couples seeking a romantic getaway or wildlife enthusiasts wanting an immersive jungle experience without compromising on luxury.`,
			images: [
				'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
			],
			rating: 5.0,
			reviewCount: 89,
			pricePerNight: 12500,
			maxGuests: 2,
			bedrooms: 1,
			bathrooms: 1,
			host: {
				id: 'h2',
				name: 'Kavita Mehta',
				avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
				isVerified: true,
				memberSince: '2020',
				responseRate: 100,
				responseTime: 'within minutes',
				bio: 'Wildlife conservationist and hospitality expert. I designed this treehouse to showcase sustainable luxury tourism.',
			},
			amenities: [
				{ id: 'wifi', label: 'High-speed WiFi', icon: 'wifi', category: 'basic' },
				{ id: 'ac', label: 'Climate Control', icon: 'ac_unit', category: 'comfort' },
				{ id: 'jacuzzi', label: 'Private Jacuzzi', icon: 'hot_tub', category: 'comfort' },
				{ id: 'telescope', label: 'Telescope', icon: 'search', category: 'outdoor' },
				{ id: 'chef', label: 'Private Chef', icon: 'restaurant', category: 'comfort' },
				{ id: 'safari', label: 'Safari Tours', icon: 'directions_car', category: 'outdoor' },
				{ id: 'spa', label: 'Spa Services', icon: 'spa', category: 'comfort' },
				{ id: 'security', label: '24/7 Security', icon: 'security', category: 'safety' },
			],
			houseRules: [
				'Adults only (18+)',
				'No smoking',
				'No loud music after 8 PM (wildlife sanctuary rules)',
				'No plastic bottles (eco-policy)',
			],
			reviews: [
				{
					id: 'r1',
					name: 'Amit & Sneha',
					avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop',
					date: 'December 2024',
					rating: 5,
					text: 'The most magical honeymoon destination! Waking up to elephants walking below our treehouse was surreal. Kavita arranged a surprise dinner on our deck - simply perfect.',
				},
				{
					id: 'r2',
					name: 'James Wilson',
					date: 'November 2024',
					rating: 5,
					text: 'As a travel photographer, I\'ve stayed at luxury properties worldwide. This treehouse is in my top 3. The attention to detail and respect for nature is commendable.',
				},
			],
			checkInTime: '3:00 PM',
			checkOutTime: '12:00 PM',
			cancellationPolicy: 'Flexible cancellation with full refund up to 7 days before check-in.',
		},
		onBook: (dates, guests) => console.log('Premium booking:', { dates, guests }),
	},
};

// Minimal data
export const MinimalData: Story = {
	args: {
		homestay: {
			id: '3',
			title: 'Simple Village Home',
			location: 'Hazaribagh, Jharkhand',
			description: 'A simple, clean room in a traditional village home. Experience authentic rural Jharkhand life.',
			images: [
				'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=600&fit=crop',
			],
			rating: 4.2,
			reviewCount: 8,
			pricePerNight: 800,
			maxGuests: 4,
			bedrooms: 1,
			bathrooms: 1,
			host: {
				id: 'h3',
				name: 'Birsa Munda',
				memberSince: '2023',
			},
			amenities: [
				{ id: 'parking', label: 'Parking', icon: 'local_parking', category: 'basic' },
				{ id: 'meals', label: 'Home-cooked Meals', icon: 'restaurant', category: 'comfort' },
			],
			reviews: [],
		},
	},
};
