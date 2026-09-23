import type { Meta, StoryObj } from '@storybook/react';
import { Login } from './Login';
import { AuthLayout } from '../../layouts/AuthLayout';

const meta = {
	title: 'Pages/Login',
	component: Login,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default login form (standalone)
export const Default: Story = {
	args: {
		onSubmit: (data) => console.log('Login:', data),
		onGoogleLogin: () => console.log('Google login'),
		onFacebookLogin: () => console.log('Facebook login'),
	},
	decorators: [
		(Story) => (
			<div className="max-w-md mx-auto p-8">
				<Story />
			</div>
		),
	],
};

// Login with AuthLayout
export const WithAuthLayout: Story = {
	args: {
		onSubmit: (data) => console.log('Login:', data),
		onGoogleLogin: () => console.log('Google login'),
		onFacebookLogin: () => console.log('Facebook login'),
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
		onSubmit: (data) => console.log('Login:', data),
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
		onSubmit: (data) => console.log('Login:', data),
		error: 'Invalid email or password. Please try again.',
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
		onSubmit: (data) => console.log('Login:', data),
	},
	decorators: [
		(Story) => (
			<AuthLayout>
				<Story />
			</AuthLayout>
		),
	],
};
