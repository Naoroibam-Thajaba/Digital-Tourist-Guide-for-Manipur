import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

const meta = {
	title: 'Atoms/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		name: 'home',
	},
	argTypes: {
		name: {
			control: 'text',
			description: 'Name of the Material Symbol icon',
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
			description: 'Size of the icon',
		},
		variant: {
			control: 'select',
			options: ['outlined', 'rounded', 'sharp'],
			description: 'Icon style variant',
		},
		color: {
			control: 'select',
			options: ['primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error', 'base-content'],
			description: 'Color variant from DaisyUI theme',
		},
		weight: {
			control: 'select',
			options: [100, 200, 300, 400, 500, 600, 700],
			description: 'Font weight of the icon',
		},
		fill: {
			control: 'boolean',
			description: 'Whether the icon should be filled',
		},
		opticalSize: {
			control: { type: 'range', min: 20, max: 48, step: 1 },
			description: 'Optical size adjustment',
		},
		grade: {
			control: { type: 'range', min: -25, max: 200, step: 25 },
			description: 'Grade adjustment for fine-tuning weight',
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Icon
export const Default: Story = {};

// Icon Sizes
export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Icon name="star" size="xs" />
			<Icon name="star" size="sm" />
			<Icon name="star" size="md" />
			<Icon name="star" size="lg" />
			<Icon name="star" size="xl" />
			<Icon name="star" size="2xl" />
			<Icon name="star" size="3xl" />
		</div>
	),
};

// Icon Variants
export const Variants: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<div className="flex flex-col items-center gap-2">
				<Icon name="favorite" variant="outlined" size="lg" />
				<span className="text-xs">Outlined</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="favorite" variant="rounded" size="lg" />
				<span className="text-xs">Rounded</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="favorite" variant="sharp" size="lg" />
				<span className="text-xs">Sharp</span>
			</div>
		</div>
	),
};

// Icon Colors
export const Colors: Story = {
	render: () => (
		<div className="flex flex-wrap gap-3">
			<Icon name="palette" color="primary" size="lg" />
			<Icon name="palette" color="secondary" size="lg" />
			<Icon name="palette" color="accent" size="lg" />
			<Icon name="palette" color="neutral" size="lg" />
			<Icon name="palette" color="info" size="lg" />
			<Icon name="palette" color="success" size="lg" />
			<Icon name="palette" color="warning" size="lg" />
			<Icon name="palette" color="error" size="lg" />
		</div>
	),
};

// Filled vs Outlined
export const FilledVsOutlined: Story = {
	render: () => (
		<div className="flex items-center gap-8">
			<div className="flex flex-col items-center gap-2">
				<Icon name="favorite" size="3xl" fill={false} />
				<span className="text-xs">Outlined</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="favorite" size="3xl" fill={true} />
				<span className="text-xs">Filled</span>
			</div>
		</div>
	),
};

// Font Weight Variations
export const Weights: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<div className="flex flex-col items-center gap-2">
				<Icon name="settings" size="lg" weight={100} />
				<span className="text-xs">100</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="settings" size="lg" weight={200} />
				<span className="text-xs">200</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="settings" size="lg" weight={300} />
				<span className="text-xs">300</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="settings" size="lg" weight={400} />
				<span className="text-xs">400</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="settings" size="lg" weight={500} />
				<span className="text-xs">500</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="settings" size="lg" weight={600} />
				<span className="text-xs">600</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="settings" size="lg" weight={700} />
				<span className="text-xs">700</span>
			</div>
		</div>
	),
};

// Common Icons Gallery
export const CommonIcons: Story = {
	render: () => (
		<div className="grid grid-cols-6 gap-6">
			{[
				'home',
				'search',
				'settings',
				'favorite',
				'shopping_cart',
				'person',
				'notifications',
				'mail',
				'delete',
				'edit',
				'check_circle',
				'cancel',
				'info',
				'warning',
				'visibility',
				'star',
				'thumb_up',
				'download',
				'upload',
				'menu',
				'close',
				'arrow_back',
				'arrow_forward',
				'add',
				'remove',
				'done',
				'lock',
				'calendar_today',
				'schedule',
				'bookmark',
			].map((iconName) => (
				<div key={iconName} className="flex flex-col items-center gap-2">
					<Icon name={iconName} size="lg" />
					<span className="text-xs text-center">{iconName}</span>
				</div>
			))}
		</div>
	),
};

// Icons in Buttons
export const InButtons: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<button className="btn btn-primary">
				<Icon name="add" size="sm" />
				Add Item
			</button>
			<button className="btn btn-secondary">
				<Icon name="edit" size="sm" />
				Edit
			</button>
			<button className="btn btn-error">
				<Icon name="delete" size="sm" />
				Delete
			</button>
			<button className="btn btn-ghost">
				<Icon name="download" size="sm" />
				Download
			</button>
			<button className="btn btn-circle btn-primary">
				<Icon name="search" size="md" />
			</button>
			<button className="btn btn-circle btn-ghost">
				<Icon name="more_vert" size="md" />
			</button>
		</div>
	),
};

// Interactive Icons
export const Interactive: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Icon
				name="favorite"
				size="2xl"
				color="error"
				fill
				onClick={() => alert('Favorite clicked!')}
				ariaLabel="Toggle favorite"
			/>
			<Icon
				name="thumb_up"
				size="2xl"
				color="success"
				onClick={() => alert('Like clicked!')}
				ariaLabel="Like"
			/>
			<Icon
				name="bookmark"
				size="2xl"
				color="primary"
				onClick={() => alert('Bookmark clicked!')}
				ariaLabel="Bookmark"
			/>
		</div>
	),
};

// Icon with Text
export const WithText: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-2">
				<Icon name="mail" color="primary" />
				<span>5 new messages</span>
			</div>
			<div className="flex items-center gap-2">
				<Icon name="notifications" color="warning" fill />
				<span>3 notifications</span>
			</div>
			<div className="flex items-center gap-2">
				<Icon name="check_circle" color="success" fill />
				<span>Task completed</span>
			</div>
			<div className="flex items-center gap-2">
				<Icon name="error" color="error" />
				<span>Error occurred</span>
			</div>
		</div>
	),
};

// Grade Variations (Fine-tuning)
export const Grades: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<div className="flex flex-col items-center gap-2">
				<Icon name="star" size="2xl" grade={-25} />
				<span className="text-xs">-25</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="star" size="2xl" grade={0} />
				<span className="text-xs">0</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon name="star" size="2xl" grade={200} />
				<span className="text-xs">200</span>
			</div>
		</div>
	),
};
