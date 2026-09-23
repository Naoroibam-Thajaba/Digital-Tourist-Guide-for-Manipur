import type { Meta, StoryObj } from '@storybook/react';
import { ListingGrid } from './ListingGrid';

// Sample listings data
const sampleHomestays = [
	{
		id: '1',
		type: 'homestay' as const,
		title: 'Peaceful Cottage in Netarhat',
		image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop',
		location: 'Netarhat, Jharkhand',
		rating: 4.8,
		reviewCount: 24,
		price: 2500,
		period: 'per night',
		badges: [{ label: 'Superhost', variant: 'primary' as const }],
	},
	{
		id: '2',
		type: 'homestay' as const,
		title: 'Traditional Santal Home Experience',
		image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
		location: 'Dumka, Jharkhand',
		rating: 4.9,
		reviewCount: 42,
		price: 1800,
		period: 'per night',
	},
	{
		id: '3',
		type: 'homestay' as const,
		title: 'Forest View Lodge near Betla',
		image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&h=300&fit=crop',
		location: 'Betla, Jharkhand',
		rating: 4.6,
		reviewCount: 18,
		price: 3200,
		period: 'per night',
		badges: [{ label: 'New', variant: 'secondary' as const }],
	},
	{
		id: '4',
		type: 'homestay' as const,
		title: 'Riverside Retreat',
		image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&h=300&fit=crop',
		location: 'Jamshedpur, Jharkhand',
		rating: 4.7,
		reviewCount: 31,
		price: 2800,
		period: 'per night',
	},
];

const sampleGuides = [
	{
		id: 'g1',
		type: 'guide' as const,
		title: 'Raju - Betla Wildlife Expert',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
		location: 'Betla National Park',
		rating: 4.9,
		reviewCount: 56,
		price: 1500,
		period: 'per day',
		badges: [{ label: 'Top Rated', variant: 'success' as const }],
	},
	{
		id: 'g2',
		type: 'guide' as const,
		title: 'Anita - Tribal Culture Specialist',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop',
		location: 'Ranchi',
		rating: 4.8,
		reviewCount: 38,
		price: 1200,
		period: 'per day',
	},
];

const sampleProducts = [
	{
		id: 'p1',
		type: 'product' as const,
		title: 'Tribal Dokra Art Elephant',
		image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
		price: 1200,
		originalPrice: 1500,
		badges: [{ label: '20% off', variant: 'error' as const }],
	},
	{
		id: 'p2',
		type: 'product' as const,
		title: 'Handwoven Paitkar Painting',
		image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=400&h=300&fit=crop',
		price: 3500,
	},
	{
		id: 'p3',
		type: 'product' as const,
		title: 'Bamboo Craft Basket Set',
		image: 'https://images.unsplash.com/photo-1595408076683-5d0c228cc094?w=400&h=300&fit=crop',
		price: 800,
		badges: [{ label: 'Bestseller', variant: 'accent' as const }],
	},
];

const meta = {
	title: 'Organisms/ListingGrid',
	component: ListingGrid,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		onSave: {
			action: 'save',
		},
	},
} satisfies Meta<typeof ListingGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Homestays grid
export const Homestays: Story = {
	args: {
		listings: sampleHomestays,
	},
};

// Guides grid
export const Guides: Story = {
	args: {
		listings: sampleGuides,
	},
};

// Products grid
export const Products: Story = {
	args: {
		listings: sampleProducts,
	},
};

// Mixed listings
export const Mixed: Story = {
	args: {
		listings: [...sampleHomestays.slice(0, 2), ...sampleGuides.slice(0, 1), ...sampleProducts.slice(0, 1)],
	},
};

// Loading state
export const Loading: Story = {
	args: {
		listings: [],
		loading: true,
		skeletonCount: 8,
	},
};

// Loading with fewer skeletons
export const LoadingFewer: Story = {
	args: {
		listings: [],
		loading: true,
		skeletonCount: 4,
	},
};

// Empty state
export const Empty: Story = {
	args: {
		listings: [],
	},
};

// Empty with custom message
export const EmptyCustomMessage: Story = {
	args: {
		listings: [],
		emptyTitle: 'No homestays available',
		emptyMessage: 'There are no homestays matching your criteria. Try expanding your search area or adjusting filters.',
	},
};

// With saved items
export const WithSavedItems: Story = {
	args: {
		listings: sampleHomestays,
		savedIds: ['1', '3'],
		onSave: (id) => console.log('Toggle save:', id),
	},
};

// Custom columns (2 columns all breakpoints)
export const TwoColumns: Story = {
	args: {
		listings: sampleHomestays,
		columns: { sm: 1, md: 2, lg: 2, xl: 2 },
	},
};

// Custom columns (more on large screens)
export const SixColumns: Story = {
	args: {
		listings: [...sampleHomestays, ...sampleHomestays],
		columns: { sm: 2, md: 3, lg: 4, xl: 6 },
	},
};

// Many listings
export const ManyListings: Story = {
	args: {
		listings: [...sampleHomestays, ...sampleHomestays, ...sampleHomestays],
	},
};
