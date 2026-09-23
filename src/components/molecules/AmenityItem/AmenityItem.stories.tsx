import type { Meta, StoryObj } from '@storybook/react';
import { AmenityItem } from './AmenityItem';

const meta = {
	title: 'Molecules/AmenityItem',
	component: AmenityItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: 'text',
			description: 'Material icon name',
		},
		label: {
			control: 'text',
			description: 'Amenity label text',
		},
		available: {
			control: 'boolean',
			description: 'Whether the amenity is available',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Size variant',
		},
	},
} satisfies Meta<typeof AmenityItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic amenity
export const Default: Story = {
	args: {
		icon: 'wifi',
		label: 'Free Wi-Fi',
	},
};

// Unavailable amenity
export const Unavailable: Story = {
	args: {
		icon: 'pets',
		label: 'Pet friendly',
		available: false,
	},
};

// All sizes
export const AllSizes: Story = {
	args: {
		icon: 'wifi',
		label: 'Demo',
	},
	render: () => (
		<div className="space-y-3">
			<AmenityItem icon="wifi" label="Small Wi-Fi" size="sm" />
			<AmenityItem icon="wifi" label="Medium Wi-Fi" size="md" />
			<AmenityItem icon="wifi" label="Large Wi-Fi" size="lg" />
		</div>
	),
};

// Common amenities
export const CommonAmenities: Story = {
	args: {
		icon: 'wifi',
		label: 'Demo',
	},
	render: () => (
		<div className="grid grid-cols-2 gap-4 w-80">
			<AmenityItem icon="wifi" label="Free Wi-Fi" />
			<AmenityItem icon="local_parking" label="Free Parking" />
			<AmenityItem icon="ac_unit" label="Air Conditioning" />
			<AmenityItem icon="restaurant" label="Breakfast Included" />
			<AmenityItem icon="pool" label="Swimming Pool" />
			<AmenityItem icon="fitness_center" label="Gym Access" />
			<AmenityItem icon="pets" label="Pet Friendly" available={false} />
			<AmenityItem icon="smoking_rooms" label="Smoking Allowed" available={false} />
		</div>
	),
};

// Homestay amenities list
export const HomestayAmenities: Story = {
	args: {
		icon: 'wifi',
		label: 'Demo',
	},
	render: () => (
		<div className="card bg-base-100 shadow-lg p-6 w-96">
			<h3 className="font-semibold text-lg mb-4">What this place offers</h3>
			<div className="grid grid-cols-2 gap-3">
				<AmenityItem icon="wifi" label="Wi-Fi" />
				<AmenityItem icon="local_parking" label="Free parking" />
				<AmenityItem icon="ac_unit" label="Air conditioning" />
				<AmenityItem icon="tv" label="TV" />
				<AmenityItem icon="kitchen" label="Kitchen" />
				<AmenityItem icon="local_laundry_service" label="Washer" />
				<AmenityItem icon="hot_tub" label="Hot water" />
				<AmenityItem icon="checkroom" label="Wardrobe" />
			</div>
			<button className="btn btn-outline btn-sm mt-4">
				Show all 12 amenities
			</button>
		</div>
	),
};

// Guide languages
export const GuideLanguages: Story = {
	args: {
		icon: 'translate',
		label: 'Demo',
	},
	render: () => (
		<div className="card bg-base-100 shadow-lg p-6 w-80">
			<h3 className="font-semibold text-lg mb-4">Languages spoken</h3>
			<div className="space-y-2">
				<AmenityItem icon="translate" label="Hindi (Native)" />
				<AmenityItem icon="translate" label="English (Fluent)" />
				<AmenityItem icon="translate" label="Bengali (Conversational)" />
				<AmenityItem icon="translate" label="Santhali (Basic)" />
			</div>
		</div>
	),
};

// Available vs unavailable comparison
export const AvailabilityComparison: Story = {
	args: {
		icon: 'wifi',
		label: 'Demo',
	},
	render: () => (
		<div className="space-y-6">
			<div>
				<p className="text-sm text-base-content/60 mb-2">Available amenities</p>
				<div className="space-y-2">
					<AmenityItem icon="wifi" label="Free Wi-Fi" available={true} />
					<AmenityItem icon="local_parking" label="Free Parking" available={true} />
					<AmenityItem icon="ac_unit" label="Air Conditioning" available={true} />
				</div>
			</div>
			<div>
				<p className="text-sm text-base-content/60 mb-2">Not available</p>
				<div className="space-y-2">
					<AmenityItem icon="pets" label="Pet Friendly" available={false} />
					<AmenityItem icon="pool" label="Swimming Pool" available={false} />
					<AmenityItem icon="elevator" label="Elevator" available={false} />
				</div>
			</div>
		</div>
	),
};

// Compact list for cards
export const CompactList: Story = {
	args: {
		icon: 'wifi',
		label: 'Demo',
	},
	render: () => (
		<div className="flex flex-wrap gap-x-4 gap-y-1">
			<AmenityItem icon="wifi" label="Wi-Fi" size="sm" />
			<AmenityItem icon="ac_unit" label="AC" size="sm" />
			<AmenityItem icon="local_parking" label="Parking" size="sm" />
			<AmenityItem icon="restaurant" label="Breakfast" size="sm" />
		</div>
	),
};
