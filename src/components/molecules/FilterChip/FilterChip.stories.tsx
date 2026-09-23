import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterChip } from './FilterChip';

const meta = {
	title: 'Molecules/FilterChip',
	component: FilterChip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Filter label text',
		},
		variant: {
			control: 'select',
			options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
			description: 'Color variant',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Size variant',
		},
		icon: {
			control: 'text',
			description: 'Optional Material icon name',
		},
	},
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic filter chip
export const Default: Story = {
	args: {
		label: '$50 - $100',
		onRemove: () => console.log('Remove filter'),
	},
};

// With icon
export const WithIcon: Story = {
	args: {
		label: 'Netarhat',
		icon: 'location_on',
		onRemove: () => console.log('Remove filter'),
	},
};

// All variants
export const AllVariants: Story = {
	args: {
		label: 'Demo',
	},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<FilterChip label="Neutral" variant="neutral" onRemove={() => {}} />
			<FilterChip label="Primary" variant="primary" onRemove={() => {}} />
			<FilterChip label="Secondary" variant="secondary" onRemove={() => {}} />
			<FilterChip label="Accent" variant="accent" onRemove={() => {}} />
			<FilterChip label="Info" variant="info" onRemove={() => {}} />
			<FilterChip label="Success" variant="success" onRemove={() => {}} />
			<FilterChip label="Warning" variant="warning" onRemove={() => {}} />
			<FilterChip label="Error" variant="error" onRemove={() => {}} />
		</div>
	),
};

// All sizes
export const AllSizes: Story = {
	args: {
		label: 'Demo',
	},
	render: () => (
		<div className="flex items-center gap-2">
			<FilterChip label="Small" size="sm" onRemove={() => {}} />
			<FilterChip label="Medium" size="md" onRemove={() => {}} />
			<FilterChip label="Large" size="lg" onRemove={() => {}} />
		</div>
	),
};

// Non-dismissible
export const NonDismissible: Story = {
	args: {
		label: 'All Results',
		variant: 'accent',
	},
};

// Active filters example
export const ActiveFilters: Story = {
	args: {
		label: 'Demo',
	},
	render: function ActiveFiltersDemo() {
		const [filters, setFilters] = useState([
			{ id: '1', label: 'Netarhat', icon: 'location_on' },
			{ id: '2', label: '$1000 - $3000', icon: 'payments' },
			{ id: '3', label: '4+ stars', icon: 'star' },
			{ id: '4', label: 'Wi-Fi', icon: 'wifi' },
		]);

		const removeFilter = (id: string) => {
			setFilters(filters.filter(f => f.id !== id));
		};

		const clearAll = () => {
			setFilters([]);
		};

		if (filters.length === 0) {
			return (
				<div className="text-base-content/60 text-sm">
					No active filters. Try refreshing to reset.
				</div>
			);
		}

		return (
			<div className="space-y-3">
				<div className="flex items-center gap-2 flex-wrap">
					{filters.map(filter => (
						<FilterChip
							key={filter.id}
							label={filter.label}
							icon={filter.icon}
							variant="primary"
							onRemove={() => removeFilter(filter.id)}
						/>
					))}
				</div>
				<button
					className="btn btn-ghost btn-sm text-error"
					onClick={clearAll}
				>
					Clear all filters
				</button>
			</div>
		);
	},
};

// Search results header example
export const SearchResultsHeader: Story = {
	args: {
		label: 'Demo',
	},
	render: () => (
		<div className="w-[600px] p-4 bg-base-200 rounded-lg">
			<div className="flex items-center justify-between mb-3">
				<h2 className="font-semibold">24 homestays found</h2>
				<button className="btn btn-ghost btn-sm">Sort by: Relevance</button>
			</div>
			<div className="flex items-center gap-2 flex-wrap">
				<span className="text-sm text-base-content/60">Filters:</span>
				<FilterChip label="Netarhat" icon="location_on" variant="primary" onRemove={() => {}} />
				<FilterChip label="$1000 - $3000" icon="payments" variant="primary" onRemove={() => {}} />
				<FilterChip label="4+ stars" icon="star" variant="primary" onRemove={() => {}} />
			</div>
		</div>
	),
};

// Different use cases
export const UseCases: Story = {
	args: {
		label: 'Demo',
	},
	render: () => (
		<div className="space-y-4">
			<div>
				<p className="text-sm text-base-content/60 mb-2">Location filters</p>
				<div className="flex gap-2 flex-wrap">
					<FilterChip label="Ranchi" icon="location_on" variant="info" onRemove={() => {}} />
					<FilterChip label="Netarhat" icon="location_on" variant="info" onRemove={() => {}} />
					<FilterChip label="Betla" icon="location_on" variant="info" onRemove={() => {}} />
				</div>
			</div>
			<div>
				<p className="text-sm text-base-content/60 mb-2">Amenity filters</p>
				<div className="flex gap-2 flex-wrap">
					<FilterChip label="Wi-Fi" icon="wifi" variant="success" onRemove={() => {}} />
					<FilterChip label="Parking" icon="local_parking" variant="success" onRemove={() => {}} />
					<FilterChip label="AC" icon="ac_unit" variant="success" onRemove={() => {}} />
				</div>
			</div>
			<div>
				<p className="text-sm text-base-content/60 mb-2">Category filters</p>
				<div className="flex gap-2 flex-wrap">
					<FilterChip label="Homestays" icon="cottage" variant="secondary" onRemove={() => {}} />
					<FilterChip label="Guides" icon="person" variant="secondary" onRemove={() => {}} />
				</div>
			</div>
		</div>
	),
};
