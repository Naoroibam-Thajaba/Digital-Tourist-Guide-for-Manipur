import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta = {
	title: 'Molecules/FormField',
	component: FormField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label text for the field',
		},
		name: {
			control: 'text',
			description: 'Input name attribute',
		},
		type: {
			control: 'select',
			options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
			description: 'Input type',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		helperText: {
			control: 'text',
			description: 'Helper text to display below the input',
		},
		required: {
			control: 'boolean',
			description: 'Whether the field is required',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the field is disabled',
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			description: 'Size variant',
		},
		leftIcon: {
			control: 'text',
			description: 'Material icon name for left side',
		},
		rightIcon: {
			control: 'text',
			description: 'Material icon name for right side',
		},
	},
	decorators: [
		(Story) => (
			<div className="w-80">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic form field
export const Default: Story = {
	args: {
		label: 'Full Name',
		name: 'fullName',
		placeholder: 'Enter your full name',
	},
};

// With error message
export const WithError: Story = {
	args: {
		label: 'Email Address',
		name: 'email',
		type: 'email',
		placeholder: 'Enter your email',
		error: 'Please enter a valid email address',
	},
};

// With helper text
export const WithHelperText: Story = {
	args: {
		label: 'Username',
		name: 'username',
		placeholder: 'Choose a username',
		helperText: 'Username must be 3-20 characters long',
	},
};

// Required field
export const Required: Story = {
	args: {
		label: 'Phone Number',
		name: 'phone',
		type: 'tel',
		placeholder: '+91 98765 43210',
		required: true,
	},
};

// With left icon
export const WithLeftIcon: Story = {
	args: {
		label: 'Search',
		name: 'search',
		type: 'search',
		placeholder: 'Search destinations...',
		leftIcon: 'search',
	},
};

// With right icon
export const WithRightIcon: Story = {
	args: {
		label: 'Email',
		name: 'email',
		type: 'email',
		placeholder: 'Enter your email',
		rightIcon: 'mail',
	},
};

// With both icons
export const WithBothIcons: Story = {
	args: {
		label: 'Location',
		name: 'location',
		placeholder: 'Enter location',
		leftIcon: 'location_on',
		rightIcon: 'my_location',
	},
};

// Password field
export const Password: Story = {
	args: {
		label: 'Password',
		name: 'password',
		type: 'password',
		placeholder: 'Enter your password',
		leftIcon: 'lock',
		helperText: 'Must be at least 8 characters',
	},
};

// Email field
export const Email: Story = {
	args: {
		label: 'Email Address',
		name: 'email',
		type: 'email',
		placeholder: 'you@example.com',
		leftIcon: 'mail',
		required: true,
	},
};

// Disabled field
export const Disabled: Story = {
	args: {
		label: 'Disabled Field',
		name: 'disabled',
		placeholder: 'This field is disabled',
		disabled: true,
		defaultValue: 'Cannot edit this',
	},
};

// All sizes
export const AllSizes: Story = {
	args: {
		label: 'Label',
		name: 'size-demo',
	},
	render: () => (
		<div className="space-y-4 w-80">
			<FormField label="Extra Small" name="xs" size="xs" placeholder="Extra small input" />
			<FormField label="Small" name="sm" size="sm" placeholder="Small input" />
			<FormField label="Medium" name="md" size="md" placeholder="Medium input (default)" />
			<FormField label="Large" name="lg" size="lg" placeholder="Large input" />
			<FormField label="Extra Large" name="xl" size="xl" placeholder="Extra large input" />
		</div>
	),
};

// Registration form example
export const RegistrationForm: Story = {
	args: {
		label: 'Registration',
		name: 'demo',
	},
	render: () => (
		<div className="space-y-4 w-80">
			<FormField
				label="Full Name"
				name="fullName"
				leftIcon="person"
				placeholder="John Doe"
				required
			/>
			<FormField
				label="Email"
				name="email"
				type="email"
				leftIcon="mail"
				placeholder="john@example.com"
				required
			/>
			<FormField
				label="Password"
				name="password"
				type="password"
				leftIcon="lock"
				placeholder="Min. 8 characters"
				required
				helperText="Use a mix of letters, numbers, and symbols"
			/>
			<FormField
				label="Phone"
				name="phone"
				type="tel"
				leftIcon="phone"
				placeholder="+91 98765 43210"
			/>
		</div>
	),
};

// Error states example
export const ErrorStates: Story = {
	args: {
		label: 'Error Demo',
		name: 'demo',
	},
	render: () => (
		<div className="space-y-4 w-80">
			<FormField
				label="Email"
				name="email"
				type="email"
				leftIcon="mail"
				placeholder="Enter email"
				error="Email is required"
				required
			/>
			<FormField
				label="Password"
				name="password"
				type="password"
				leftIcon="lock"
				placeholder="Enter password"
				error="Password must be at least 8 characters"
			/>
			<FormField
				label="Username"
				name="username"
				leftIcon="person"
				placeholder="Enter username"
				error="Username is already taken"
			/>
		</div>
	),
};
