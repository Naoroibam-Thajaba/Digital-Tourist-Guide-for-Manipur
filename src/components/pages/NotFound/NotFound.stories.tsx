import type { Meta, StoryObj } from '@storybook/react';
import { NotFound } from './NotFound';
import { MainLayout } from '../../layouts/MainLayout';

const meta = {
	title: 'Pages/NotFound',
	component: NotFound,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default 404 page
export const Default: Story = {
	args: {},
};

// With MainLayout
export const WithLayout: Story = {
	args: {},
	decorators: [
		(Story) => (
			<MainLayout>
				<Story />
			</MainLayout>
		),
	],
};

// Custom message
export const CustomMessage: Story = {
	args: {
		title: 'Trail Not Found',
		description: "Looks like this path doesn't exist in our jungle. Let's get you back on track!",
	},
};

// Custom quick links
export const CustomLinks: Story = {
	args: {
		quickLinks: [
			{ label: 'Home', href: '/', icon: 'home' },
			{ label: 'Contact Us', href: '/contact', icon: 'mail' },
			{ label: 'Help Center', href: '/help', icon: 'help' },
		],
	},
};

// No quick links
export const NoQuickLinks: Story = {
	args: {
		quickLinks: [],
	},
};

// Full page with layout
export const FullPage: Story = {
	args: {
		title: 'Page Not Found',
		description: "The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.",
	},
	decorators: [
		(Story) => (
			<MainLayout>
				<Story />
			</MainLayout>
		),
	],
};
