import type { Meta, StoryObj } from '@storybook/react';
import { Register } from './Register';
import { AuthLayout } from '../../layouts/AuthLayout';

const meta = {
	title: 'Pages/Register',
	component: Register,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Register>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default register form (standalone)
export const Default: Story = {
	args: {
		onSubmit: (data) => console.log('Register:', data),
		onGoogleLogin: () => console.log('Google signup'),
		onFacebookLogin: () => console.log('Facebook signup'),
	},
	decorators: [
		(Story) => (
			<div className="max-w-md mx-auto p-8">
				<Story />
			</div>
		),
	],
};

// Register with AuthLayout
export const WithAuthLayout: Story = {
	args: {
		onSubmit: (data) => console.log('Register:', data),
		onGoogleLogin: () => console.log('Google signup'),
		onFacebookLogin: () => console.log('Facebook signup'),
	},
	decorators: [
		(Story) => (
			<AuthLayout>
				<Story />
			</AuthLayout>
		),
	],
};

// Tourist role pre-selected (default)
export const TouristRole: Story = {
	args: {
		onSubmit: (data) => console.log('Register:', data),
		defaultRole: 'tourist',
	},
	decorators: [
		(Story) => (
			<AuthLayout>
				<Story />
			</AuthLayout>
		),
	],
};

// Provider role pre-selected
export const ProviderRole: Story = {
	args: {
		onSubmit: (data) => console.log('Register:', data),
		defaultRole: 'provider',
	},
	decorators: [
		(Story) => (
			<AuthLayout>
				<Story />
			</AuthLayout>
		),
	],
};

// Loading state
export const Loading: Story = {
	args: {
		onSubmit: (data) => console.log('Register:', data),
		isLoading: true,
	},
	decorators: [
		(Story) => (
			<AuthLayout>
				<Story />
			</AuthLayout>
		),
	],
};

// With error message
export const WithError: Story = {
	args: {
		onSubmit: (data) => console.log('Register:', data),
		error: 'An account with this email already exists. Please sign in instead.',
	},
	decorators: [
		(Story) => (
			<AuthLayout>
				<Story />
			</AuthLayout>
		),
	],
};

// Without social login
export const WithoutSocialLogin: Story = {
	args: {
		onSubmit: (data) => console.log('Register:', data),
	},
	decorators: [
		(Story) => (
			<AuthLayout>
				<Story />
			</AuthLayout>
		),
	],
};
