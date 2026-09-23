import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			description: 'Size of the button',
		},
		variant: {
			control: 'select',
			options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
			description: 'Color variant of the button',
		},
		style: {
			control: 'select',
			options: ['default', 'outline', 'dash', 'soft', 'ghost', 'link'],
			description: 'Style variant of the button',
		},
		active: {
			control: 'boolean',
			description: 'Makes the button look active',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the button',
		},
		loading: {
			control: 'boolean',
			description: 'Shows loading spinner',
		},
		wide: {
			control: 'boolean',
			description: 'Makes the button wider',
		},
		block: {
			control: 'boolean',
			description: 'Makes the button full width',
		},
		square: {
			control: 'boolean',
			description: 'Makes the button square (1:1 ratio)',
		},
		circle: {
			control: 'boolean',
			description: 'Makes the button circular',
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Button
export const Default: Story = {
	args: {
		children: 'Default',
	},
};

// Button Sizes
export const Sizes: Story = {
	args: {},
	render: () => (
		<div className="flex items-center gap-2">
			<Button size="xs">Xsmall</Button>
			<Button size="sm">Small</Button>
			<Button>Medium</Button>
			<Button size="lg">Large</Button>
			<Button size="xl">Xlarge</Button>
		</div>
	),
};

// Responsive Button
export const Responsive: Story = {
	args: {
		children: 'Responsive',
		className: 'btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl'
	},
};

// Button Colors
export const Colors: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Button variant="neutral">Neutral</Button>
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="accent">Accent</Button>
			<Button variant="info">Info</Button>
			<Button variant="success">Success</Button>
			<Button variant="warning">Warning</Button>
			<Button variant="error">Error</Button>
		</div>
	),
};

// Soft Buttons
export const SoftButtons: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Button style="soft">Default</Button>
			<Button style="soft" variant="primary">Primary</Button>
			<Button style="soft" variant="secondary">Secondary</Button>
			<Button style="soft" variant="accent">Accent</Button>
			<Button style="soft" variant="info">Info</Button>
			<Button style="soft" variant="success">Success</Button>
			<Button style="soft" variant="warning">Warning</Button>
			<Button style="soft" variant="error">Error</Button>
		</div>
	),
};

// Outline Buttons
export const OutlineButtons: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Button style="outline">Default</Button>
			<Button style="outline" variant="primary">Primary</Button>
			<Button style="outline" variant="secondary">Secondary</Button>
			<Button style="outline" variant="accent">Accent</Button>
			<Button style="outline" variant="info">Info</Button>
			<Button style="outline" variant="success">Success</Button>
			<Button style="outline" variant="warning">Warning</Button>
			<Button style="outline" variant="error">Error</Button>
		</div>
	),
};

// Dash Buttons
export const DashButtons: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Button style="dash">Default</Button>
			<Button style="dash" variant="primary">Primary</Button>
			<Button style="dash" variant="secondary">Secondary</Button>
			<Button style="dash" variant="accent">Accent</Button>
			<Button style="dash" variant="info">Info</Button>
			<Button style="dash" variant="success">Success</Button>
			<Button style="dash" variant="warning">Warning</Button>
			<Button style="dash" variant="error">Error</Button>
		</div>
	),
};

// Active Buttons
export const ActiveButtons: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Button active>Default</Button>
			<Button active variant="primary">Primary</Button>
			<Button active variant="secondary">Secondary</Button>
			<Button active variant="accent">Accent</Button>
			<Button active variant="info">Info</Button>
			<Button active variant="success">Success</Button>
			<Button active variant="warning">Warning</Button>
			<Button active variant="error">Error</Button>
		</div>
	),
};

// Ghost and Link
export const GhostAndLink: Story = {
	args: {},
	render: () => (
		<div className="flex gap-2">
			<Button style="ghost">Ghost</Button>
			<Button style="link">Link</Button>
		</div>
	),
};

// Wide Button
export const WideButton: Story = {
	args: {
		children: 'Wide',
		wide: true,
	},
};

// Block Button
export const BlockButton: Story = {
	args: {
		children: 'Block',
		block: true,
	},
	parameters: {
		layout: 'padded',
	},
};

// Disabled Buttons
export const DisabledButtons: Story = {
	args: {},
	render: () => (
		<div className="flex gap-2">
			<Button disabled>Disabled using attribute</Button>
			<Button className="btn-disabled" tabIndex={-1} aria-disabled="true">
				Disabled using class name
			</Button>
		</div>
	),
};

// Square and Circle Buttons
export const SquareAndCircle: Story = {
	args: {},
	render: () => (
		<div className="flex gap-2">
			<Button square>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
				</svg>
			</Button>
			<Button circle>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
				</svg>
			</Button>
		</div>
	),
};

// Button with Icon
export const WithIcon: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Button>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
				</svg>
				Like
			</Button>
			<Button>
				Like
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
				</svg>
			</Button>
		</div>
	),
};

// Loading Buttons
export const LoadingButtons: Story = {
	args: {},
	render: () => (
		<div className="flex gap-2">
			<Button square loading />
			<Button loading>Loading</Button>
		</div>
	),
};

// Link Button
export const LinkButton: Story = {
	args: {
		as: 'a',
		href: '#',
		children: 'Link',
	},
};

// Login Buttons
export const LoginButtons: Story = {
	args: {},
	render: () => (
		<div className="grid gap-4 w-64">
			{/* Email */}
			<Button className="bg-white text-black border-[#e5e5e5]">
				<svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black">
						<rect width="20" height="16" x="2" y="4" rx="2"></rect>
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
					</g>
				</svg>
				Login with Email
			</Button>

			{/* GitHub */}
			<Button className="bg-black text-white border-black">
				<svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
				</svg>
				Login with GitHub
			</Button>

			{/* Google */}
			<Button className="bg-white text-black border-[#e5e5e5]">
				<svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<g>
						<path d="m0 0H512V512H0" fill="#fff"></path>
						<path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
						<path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
						<path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
						<path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
					</g>
				</svg>
				Login with Google
			</Button>

			{/* Facebook */}
			<Button className="bg-[#1A77F2] text-white border-[#005fd8]">
				<svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
					<path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path>
				</svg>
				Login with Facebook
			</Button>
		</div>
	),
	parameters: {
		layout: 'centered',
	},
};
