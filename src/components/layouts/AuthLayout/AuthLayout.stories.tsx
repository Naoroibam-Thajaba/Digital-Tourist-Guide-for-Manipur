import type { Meta, StoryObj } from '@storybook/react';
import { AuthLayout } from './AuthLayout';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';

const meta = {
	title: 'Layouts/AuthLayout',
	component: AuthLayout,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample Login Form
const LoginForm = () => (
	<form className="space-y-4">
		<fieldset className="fieldset">
			<legend className="fieldset-legend">Email</legend>
			<label className="input input-bordered flex items-center gap-2 w-full">
				<Icon name="mail" size="sm" className="text-base-content/50" />
				<input type="email" placeholder="you@example.com" className="grow" />
			</label>
		</fieldset>

		<fieldset className="fieldset">
			<legend className="fieldset-legend">Password</legend>
			<label className="input input-bordered flex items-center gap-2 w-full">
				<Icon name="lock" size="sm" className="text-base-content/50" />
				<input type="password" placeholder="Enter your password" className="grow" />
			</label>
		</fieldset>

		<div className="flex items-center justify-between">
			<label className="label cursor-pointer gap-2">
				<input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
				<span className="label-text">Remember me</span>
			</label>
			<a href="/forgot-password" className="link link-primary text-sm">
				Forgot password?
			</a>
		</div>

		<Button variant="primary" className="w-full">
			Sign In
		</Button>

		<div className="divider text-sm">or continue with</div>

		<div className="grid grid-cols-2 gap-3">
			<Button style="outline" className="gap-2">
				<Icon name="g_translate" size="sm" />
				Google
			</Button>
			<Button style="outline" className="gap-2">
				<Icon name="phone" size="sm" />
				Phone
			</Button>
		</div>

		<p className="text-center text-sm text-base-content/60 mt-4">
			Don't have an account?{' '}
			<a href="/register" className="link link-primary">Sign up</a>
		</p>
	</form>
);

// Sample Register Form
const RegisterForm = () => (
	<form className="space-y-4">
		<fieldset className="fieldset">
			<legend className="fieldset-legend">Full Name</legend>
			<label className="input input-bordered flex items-center gap-2 w-full">
				<Icon name="person" size="sm" className="text-base-content/50" />
				<input type="text" placeholder="Enter your name" className="grow" />
			</label>
		</fieldset>

		<fieldset className="fieldset">
			<legend className="fieldset-legend">Email</legend>
			<label className="input input-bordered flex items-center gap-2 w-full">
				<Icon name="mail" size="sm" className="text-base-content/50" />
				<input type="email" placeholder="you@example.com" className="grow" />
			</label>
		</fieldset>

		<fieldset className="fieldset">
			<legend className="fieldset-legend">Password</legend>
			<label className="input input-bordered flex items-center gap-2 w-full">
				<Icon name="lock" size="sm" className="text-base-content/50" />
				<input type="password" placeholder="Create a password" className="grow" />
			</label>
		</fieldset>

		<fieldset className="fieldset">
			<legend className="fieldset-legend">I am a</legend>
			<div className="flex gap-4">
				<label className="label cursor-pointer gap-2">
					<input type="radio" name="role" className="radio radio-primary" defaultChecked />
					<span className="label-text">Tourist</span>
				</label>
				<label className="label cursor-pointer gap-2">
					<input type="radio" name="role" className="radio radio-primary" />
					<span className="label-text">Provider</span>
				</label>
			</div>
		</fieldset>

		<label className="label cursor-pointer justify-start gap-2">
			<input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
			<span className="label-text text-sm">
				I agree to the Terms of Service and Privacy Policy
			</span>
		</label>

		<Button variant="primary" className="w-full">
			Create Account
		</Button>

		<p className="text-center text-sm text-base-content/60 mt-4">
			Already have an account?{' '}
			<a href="/login" className="link link-primary">Sign in</a>
		</p>
	</form>
);

// Sample Forgot Password Form
const ForgotPasswordForm = () => (
	<form className="space-y-4">
		<p className="text-sm text-base-content/70 text-center">
			Enter your email address and we'll send you a link to reset your password.
		</p>

		<fieldset className="fieldset">
			<legend className="fieldset-legend">Email</legend>
			<label className="input input-bordered flex items-center gap-2 w-full">
				<Icon name="mail" size="sm" className="text-base-content/50" />
				<input type="email" placeholder="you@example.com" className="grow" />
			</label>
		</fieldset>

		<Button variant="primary" className="w-full">
			Send Reset Link
		</Button>

		<p className="text-center text-sm text-base-content/60 mt-4">
			Remember your password?{' '}
			<a href="/login" className="link link-primary">Sign in</a>
		</p>
	</form>
);

// Login page
export const Login: Story = {
	args: {
		children: <LoginForm />,
	},
};

// Register page
export const Register: Story = {
	args: {
		children: <RegisterForm />,
	},
};

// Forgot password page
export const ForgotPassword: Story = {
	args: {
		children: <ForgotPasswordForm />,
	},
};

// Simple form
export const SimpleForm: Story = {
	args: {
		children: <LoginForm />,
	},
};

// Empty state (for testing)
export const EmptyState: Story = {
	args: {
		children: (
			<div className="py-8 text-center text-base-content/50">
				Form content goes here
			</div>
		),
	},
};
