import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta = {
	title: 'Molecules/SearchBar',
	component: SearchBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: 'text',
			description: 'Controlled value',
		},
		defaultValue: {
			control: 'text',
			description: 'Default value for uncontrolled mode',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text',
		},
		showFilterButton: {
			control: 'boolean',
			description: 'Show filter button',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Size variant',
		},
	},
	decorators: [
		(Story) => (
			<div className="w-[500px]">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic search bar
export const Default: Story = {
	args: {
		placeholder: 'Search destinations...',
		onSearch: (query) => console.log('Search:', query),
	},
};

// With filter button
export const WithFilters: Story = {
	args: {
		placeholder: 'Search homestays, guides, products...',
		showFilterButton: true,
		onSearch: (query) => console.log('Search:', query),
		onFilterClick: () => console.log('Filters clicked'),
	},
};

// Small size
export const Small: Story = {
	args: {
		placeholder: 'Quick search...',
		size: 'sm',
		onSearch: (query) => console.log('Search:', query),
	},
};

// Large size
export const Large: Story = {
	args: {
		placeholder: 'Discover your next adventure...',
		size: 'lg',
		showFilterButton: true,
		onSearch: (query) => console.log('Search:', query),
	},
};

// With default value
export const WithDefaultValue: Story = {
	args: {
		defaultValue: 'Netarhat',
		placeholder: 'Search...',
		onSearch: (query) => console.log('Search:', query),
	},
};

// Controlled component
export const Controlled: Story = {
	args: {
		placeholder: 'Type to search...',
	},
	render: function ControlledSearchBar(args) {
		const [value, setValue] = useState('');

		return (
			<div className="space-y-4">
				<SearchBar
					{...args}
					value={value}
					onChange={setValue}
					onSearch={(query) => console.log('Searching for:', query)}
				/>
				<p className="text-sm text-base-content/60">
					Current value: <code className="bg-base-200 px-2 py-1 rounded">{value || '(empty)'}</code>
				</p>
			</div>
		);
	},
};

// All sizes comparison
export const AllSizes: Story = {
	args: {
		placeholder: 'Search',
	},
	render: () => (
		<div className="space-y-4 w-[500px]">
			<div>
				<p className="text-sm text-base-content/60 mb-2">Small</p>
				<SearchBar size="sm" placeholder="Small search bar" showFilterButton />
			</div>
			<div>
				<p className="text-sm text-base-content/60 mb-2">Medium (default)</p>
				<SearchBar size="md" placeholder="Medium search bar" showFilterButton />
			</div>
			<div>
				<p className="text-sm text-base-content/60 mb-2">Large</p>
				<SearchBar size="lg" placeholder="Large search bar" showFilterButton />
			</div>
		</div>
	),
};

// Hero search example
export const HeroSearch: Story = {
	args: {
		placeholder: 'Search',
	},
	render: () => (
		<div className="bg-primary/10 p-8 rounded-lg w-[600px]">
			<h2 className="text-2xl font-bold text-center mb-4">Discover the Soul of Jharkhand</h2>
			<p className="text-center text-base-content/70 mb-6">
				Find authentic homestays, expert guides, and tribal handicrafts
			</p>
			<SearchBar
				size="lg"
				placeholder="Where do you want to explore?"
				showFilterButton
				onSearch={(query) => console.log('Hero search:', query)}
			/>
		</div>
	),
};

// Navbar search example
export const NavbarSearch: Story = {
	args: {
		placeholder: 'Search',
	},
	render: () => (
		<div className="navbar bg-base-100 shadow-sm rounded-lg w-[700px]">
			<div className="flex-1">
				<span className="text-xl font-bold text-primary">JharkhandYatra</span>
			</div>
			<div className="flex-none w-72">
				<SearchBar
					size="sm"
					placeholder="Search..."
					onSearch={(query) => console.log('Navbar search:', query)}
				/>
			</div>
		</div>
	),
};
