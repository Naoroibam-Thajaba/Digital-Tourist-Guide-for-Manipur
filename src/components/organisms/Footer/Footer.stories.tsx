import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
	title: 'Organisms/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default footer
export const Default: Story = {
	args: {},
};

// With newsletter callback
export const WithNewsletterCallback: Story = {
	args: {
		onNewsletterSubmit: (email) => console.log('Newsletter subscription:', email),
	},
};

// With custom class
export const WithCustomClass: Story = {
	args: {
		className: 'mt-8',
	},
};
