import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchFilters } from './SearchFilters';
import type { FilterState } from './SearchFiltersProps';
import { defaultFilterState } from './SearchFiltersProps';

const meta = {
	title: 'Organisms/SearchFilters',
	component: SearchFilters,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="max-w-sm">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof SearchFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component
const InteractiveFilters = (args: React.ComponentProps<typeof SearchFilters>) => {
	const [filters, setFilters] = useState<FilterState>(args.filters);

	return (
		<SearchFilters
			{...args}
			filters={filters}
			onChange={setFilters}
			onClear={() => setFilters(defaultFilterState)}
		/>
	);
};

// Default empty filters
export const Default: Story = {
	args: {
		filters: defaultFilterState,
		onChange: () => {},
		onClear: () => {},
	},
	render: (args) => <InteractiveFilters {...args} />,
};

// With some active filters
export const WithActiveFilters: Story = {
	args: {
		filters: {
			...defaultFilterState,
			priceRange: { min: 1000, max: 5000 },
			minRating: 4,
			district: 'Ranchi',
			amenities: ['wifi', 'parking'],
		},
		onChange: () => {},
		onClear: () => {},
	},
	render: (args) => <InteractiveFilters {...args} />,
};

// Homestay context
export const HomestayFilters: Story = {
	args: {
		filters: defaultFilterState,
		listingType: 'homestay',
		showListingTypeSelector: false,
		onChange: () => {},
		onClear: () => {},
	},
	render: (args) => <InteractiveFilters {...args} />,
};

// Guide context
export const GuideFilters: Story = {
	args: {
		filters: defaultFilterState,
		listingType: 'guide',
		showListingTypeSelector: false,
		onChange: () => {},
		onClear: () => {},
	},
	render: (args) => <InteractiveFilters {...args} />,
};

// Product context
export const ProductFilters: Story = {
	args: {
		filters: defaultFilterState,
		listingType: 'product',
		showListingTypeSelector: false,
		onChange: () => {},
		onClear: () => {},
	},
	render: (args) => <InteractiveFilters {...args} />,
};

// Mobile drawer style
export const MobileDrawer: Story = {
	args: {
		filters: {
			...defaultFilterState,
			priceRange: { min: 500, max: 3000 },
			minRating: 3.5,
		},
		isMobileDrawer: true,
		onChange: () => {},
		onClear: () => {},
		onApply: () => console.log('Apply clicked'),
	},
	render: (args) => <InteractiveFilters {...args} />,
	decorators: [
		(Story) => (
			<div className="max-w-md bg-base-100 shadow-xl rounded-lg overflow-hidden">
				<Story />
			</div>
		),
	],
};

// Many active filters
export const ManyActiveFilters: Story = {
	args: {
		filters: {
			listingType: 'homestay',
			priceRange: { min: 2000, max: 8000 },
			minRating: 4.5,
			district: 'Netarhat',
			amenities: ['wifi', 'parking', 'ac', 'breakfast', 'garden'],
			languages: [],
			categories: [],
		},
		onChange: () => {},
		onClear: () => {},
	},
	render: (args) => <InteractiveFilters {...args} />,
};

// Full width layout
export const FullWidth: Story = {
	args: {
		filters: defaultFilterState,
		onChange: () => {},
		onClear: () => {},
	},
	render: (args) => <InteractiveFilters {...args} />,
	decorators: [
		(Story) => (
			<div className="max-w-full">
				<Story />
			</div>
		),
	],
};
