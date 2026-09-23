import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta = {
	title: 'Atoms/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'text'],
			description: 'Variant of the skeleton',
		},
		shape: {
			control: 'select',
			options: ['rectangle', 'circle', 'custom'],
			description: 'Shape of the skeleton',
		},
		width: {
			control: 'text',
			description: 'Tailwind width class',
		},
		height: {
			control: 'text',
			description: 'Tailwind height class',
		},
	},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Skeleton
export const Default: Story = {
	args: {
		width: 'w-32',
		height: 'h-32',
	},
};

// Circle Skeleton
export const Circle: Story = {
	args: {
		shape: 'circle',
		width: 'w-16',
		height: 'h-16',
	},
};

// Skeleton with Circle and Content
export const CircleWithContent: Story = {
	args: {},
	render: () => (
		<div className="flex flex-col gap-4 w-52">
			<div className="flex gap-4 items-center">
				<Skeleton shape="circle" width="w-16" height="h-16" className="shrink-0" />
				<div className="flex flex-col gap-4">
					<Skeleton width="w-20" height="h-4" />
					<Skeleton width="w-28" height="h-4" />
				</div>
			</div>
			<Skeleton width="w-full" height="h-32" />
		</div>
	),
};

// Skeleton with Rectangle and Content
export const RectangleWithContent: Story = {
	args: {},
	render: () => (
		<div className="flex flex-col gap-4 w-52">
			<Skeleton width="w-full" height="h-32" />
			<Skeleton width="w-28" height="h-4" />
			<Skeleton width="w-full" height="h-4" />
			<Skeleton width="w-full" height="h-4" />
		</div>
	),
};

// Skeleton Text
export const SkeletonText: Story = {
	args: {
		variant: 'text',
		children: 'AI is thinking harder...',
	},
};

// Different Widths
export const DifferentWidths: Story = {
	args: {},
	render: () => (
		<div className="flex flex-col gap-4 w-full">
			<Skeleton width="w-full" height="h-4" />
			<Skeleton width="w-3/4" height="h-4" />
			<Skeleton width="w-1/2" height="h-4" />
			<Skeleton width="w-1/4" height="h-4" />
		</div>
	),
};

// Different Heights
export const DifferentHeights: Story = {
	args: {},
	render: () => (
		<div className="flex gap-4 items-end">
			<Skeleton width="w-16" height="h-16" />
			<Skeleton width="w-16" height="h-20" />
			<Skeleton width="w-16" height="h-24" />
			<Skeleton width="w-16" height="h-32" />
		</div>
	),
};

// Card Loading State
export const CardLoadingState: Story = {
	args: {},
	render: () => (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<Skeleton width="w-full" height="h-48" />
			</figure>
			<div className="card-body">
				<Skeleton width="w-3/4" height="h-6" className="mb-2" />
				<div className="space-y-2">
					<Skeleton width="w-full" height="h-4" />
					<Skeleton width="w-full" height="h-4" />
					<Skeleton width="w-2/3" height="h-4" />
				</div>
				<div className="card-actions justify-end mt-4">
					<Skeleton width="w-20" height="h-10" className="rounded-lg" />
					<Skeleton width="w-20" height="h-10" className="rounded-lg" />
				</div>
			</div>
		</div>
	),
	parameters: {
		layout: 'padded',
	},
};

// User Profile Loading
export const UserProfileLoading: Story = {
	args: {},
	render: () => (
		<div className="flex items-center gap-4">
			<Skeleton shape="circle" width="w-24" height="h-24" className="shrink-0" />
			<div className="flex-1 space-y-3">
				<Skeleton width="w-48" height="h-6" />
				<Skeleton width="w-64" height="h-4" />
				<Skeleton width="w-40" height="h-4" />
			</div>
		</div>
	),
};

// List Loading State
export const ListLoadingState: Story = {
	args: {},
	render: () => (
		<div className="space-y-4 w-96">
			{[1, 2, 3, 4].map((i) => (
				<div key={i} className="flex items-center gap-4">
					<Skeleton shape="circle" width="w-12" height="h-12" className="shrink-0" />
					<div className="flex-1 space-y-2">
						<Skeleton width="w-3/4" height="h-4" />
						<Skeleton width="w-1/2" height="h-3" />
					</div>
				</div>
			))}
		</div>
	),
};

// Grid Loading State
export const GridLoadingState: Story = {
	args: {},
	render: () => (
		<div className="grid grid-cols-3 gap-4">
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<div key={i} className="flex flex-col gap-2">
					<Skeleton width="w-full" height="h-32" className="rounded-lg" />
					<Skeleton width="w-3/4" height="h-4" />
					<Skeleton width="w-1/2" height="h-3" />
				</div>
			))}
		</div>
	),
	parameters: {
		layout: 'padded',
	},
};

// Custom Shapes
export const CustomShapes: Story = {
	args: {},
	render: () => (
		<div className="flex gap-4">
			<Skeleton shape="custom" width="w-20" height="h-20" className="rounded" />
			<Skeleton shape="custom" width="w-20" height="h-20" className="rounded-lg" />
			<Skeleton shape="custom" width="w-20" height="h-20" className="rounded-xl" />
			<Skeleton shape="custom" width="w-20" height="h-20" className="rounded-2xl" />
			<Skeleton shape="circle" width="w-20" height="h-20" />
		</div>
	),
};
