import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ListingCard } from './ListingCard';

const meta = {
	title: 'Molecules/ListingCard',
	component: ListingCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		id: {
			control: 'text',
			description: 'Unique identifier',
		},
		type: {
			control: 'select',
			options: ['homestay', 'guide', 'product'],
			description: 'Type of listing',
		},
		title: {
			control: 'text',
			description: 'Listing title',
		},
		image: {
			control: 'text',
			description: 'Main image URL',
		},
		location: {
			control: 'text',
			description: 'Location text',
		},
		rating: {
			control: { type: 'number', min: 0, max: 5, step: 0.1 },
			description: 'Rating value (1-5)',
		},
		reviewCount: {
			control: 'number',
			description: 'Number of reviews',
		},
		price: {
			control: 'number',
			description: 'Current price',
		},
		originalPrice: {
			control: 'number',
			description: 'Original price (for discount)',
		},
		period: {
			control: 'text',
			description: 'Price period',
		},
		isSaved: {
			control: 'boolean',
			description: 'Whether saved/favorited',
		},
	},
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ListingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic homestay card
export const Default: Story = {
	args: {
		id: '1',
		type: 'homestay',
		title: 'Peaceful Cottage in Netarhat',
		image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop',
		location: 'Netarhat, Jharkhand',
		rating: 4.8,
		reviewCount: 24,
		price: 2500,
		period: 'per night',
		onSave: (id) => console.log('Save:', id),
	},
};

// With badges
export const WithBadges: Story = {
	args: {
		id: '2',
		type: 'homestay',
		title: 'Heritage Tribal Home Experience',
		image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&h=300&fit=crop',
		location: 'Ranchi, Jharkhand',
		rating: 4.9,
		reviewCount: 56,
		price: 3200,
		period: 'per night',
		badges: [
			{ label: 'Superhost', variant: 'primary' },
			{ label: 'Featured', variant: 'secondary' },
		],
		onSave: (id) => console.log('Save:', id),
	},
};

// With discount
export const WithDiscount: Story = {
	args: {
		id: '3',
		type: 'product',
		title: 'Tribal Dokra Art Elephant Figurine',
		image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=400&h=300&fit=crop',
		price: 1200,
		originalPrice: 1500,
		badges: [{ label: '20% off', variant: 'error' }],
		onSave: (id) => console.log('Save:', id),
	},
};

// Saved state
export const Saved: Story = {
	args: {
		id: '4',
		type: 'homestay',
		title: 'Mountain View Retreat',
		image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=300&fit=crop',
		location: 'Patratu, Jharkhand',
		rating: 4.7,
		reviewCount: 18,
		price: 1800,
		period: 'per night',
		isSaved: true,
		onSave: (id) => console.log('Unsave:', id),
	},
};

// No rating (new listing)
export const NoRating: Story = {
	args: {
		id: '5',
		type: 'homestay',
		title: 'New Eco-Friendly Cottage',
		image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&h=300&fit=crop',
		location: 'Deoghar, Jharkhand',
		price: 2000,
		period: 'per night',
		badges: [{ label: 'New', variant: 'accent' }],
		onSave: (id) => console.log('Save:', id),
	},
};

// Product card
export const Product: Story = {
	args: {
		id: '6',
		type: 'product',
		title: 'Handwoven Sohrai Painting',
		image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=400&h=300&fit=crop',
		rating: 4.6,
		reviewCount: 12,
		price: 3500,
		badges: [{ label: 'Handcrafted', variant: 'accent' }],
		onSave: (id) => console.log('Save:', id),
	},
};

// Guide card
export const Guide: Story = {
	args: {
		id: '7',
		type: 'guide',
		title: 'Raju - Betla Wildlife Expert',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
		location: 'Betla National Park',
		rating: 4.9,
		reviewCount: 89,
		price: 1500,
		period: 'per day',
		badges: [{ label: 'Verified', variant: 'success' }],
		onSave: (id) => console.log('Save:', id),
	},
};

// Interactive save state
export const Interactive: Story = {
	args: {
		id: '8',
		type: 'homestay',
		title: 'Interactive Save Demo',
		image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop',
		location: 'Netarhat, Jharkhand',
		rating: 4.8,
		reviewCount: 24,
		price: 2500,
		period: 'per night',
	},
	render: function InteractiveCard(args) {
		const [saved, setSaved] = useState(false);

		return (
			<div className="space-y-4">
				<ListingCard
					{...args}
					isSaved={saved}
					onSave={() => setSaved(!saved)}
				/>
				<p className="text-sm text-center text-base-content/60">
					{saved ? 'Saved to favorites' : 'Click heart to save'}
				</p>
			</div>
		);
	},
};

// Grid layout example
export const GridLayout: Story = {
	args: {
		id: 'grid',
		type: 'homestay',
		title: 'Demo',
		image: '',
		price: 0,
	},
	decorators: [
		(Story) => (
			<div className="w-[900px]">
				<Story />
			</div>
		),
	],
	render: () => (
		<div className="grid grid-cols-3 gap-4">
			<ListingCard
				id="g1"
				type="homestay"
				title="Peaceful Cottage in Netarhat"
				image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop"
				location="Netarhat, Jharkhand"
				rating={4.8}
				reviewCount={24}
				price={2500}
				period="per night"
				badges={[{ label: 'Featured', variant: 'secondary' }]}
				onSave={() => {}}
			/>
			<ListingCard
				id="g2"
				type="guide"
				title="Priya - Cultural Heritage Guide"
				image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
				location="Ranchi"
				rating={4.9}
				reviewCount={45}
				price={1200}
				period="per day"
				badges={[{ label: 'Superhost', variant: 'primary' }]}
				onSave={() => {}}
			/>
			<ListingCard
				id="g3"
				type="product"
				title="Handcrafted Brass Dokra"
				image="https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=400&h=300&fit=crop"
				price={1800}
				originalPrice={2200}
				rating={4.5}
				reviewCount={18}
				onSave={() => {}}
			/>
		</div>
	),
};
