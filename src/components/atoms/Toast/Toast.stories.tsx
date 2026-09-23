import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { ToastProvider, useToast } from '../../../context/ToastContext';
import { Button } from '../Button';

const meta = {
	title: 'Atoms/Toast',
	component: Toast,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="h-96 w-full relative">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic info toast
export const Info: Story = {
	args: {
		message: 'New message arrived.',
		variant: 'info',
		position: 'bottom-end',
	},
};

// Success toast
export const Success: Story = {
	args: {
		message: 'Operation completed successfully!',
		variant: 'success',
		position: 'bottom-end',
	},
};

// Warning toast
export const Warning: Story = {
	args: {
		message: 'This feature is not implemented yet.',
		variant: 'warning',
		position: 'bottom-end',
	},
};

// Error toast
export const Error: Story = {
	args: {
		message: 'An error occurred. Please try again.',
		variant: 'error',
		position: 'bottom-end',
	},
};

// Top center position
export const TopCenter: Story = {
	args: {
		message: 'Toast at top center',
		variant: 'info',
		position: 'top-center',
	},
};

// Without close button
export const WithoutCloseButton: Story = {
	args: {
		message: 'This toast has no close button',
		variant: 'info',
		showClose: false,
		duration: 0,
	},
};

// Interactive demo with ToastProvider
const ToastDemo = () => {
	const { showInfo, showSuccess, showWarning, showError, showNotImplemented } = useToast();

	return (
		<div className="flex flex-wrap gap-4 p-4">
			<Button onClick={() => showInfo('This is an info message')}>
				Show Info
			</Button>
			<Button variant="success" onClick={() => showSuccess('Operation successful!')}>
				Show Success
			</Button>
			<Button variant="warning" onClick={() => showWarning('Please be careful')}>
				Show Warning
			</Button>
			<Button variant="error" onClick={() => showError('Something went wrong')}>
				Show Error
			</Button>
			<Button style="outline" onClick={() => showNotImplemented('Settings')}>
				Not Implemented
			</Button>
		</div>
	);
};

export const Interactive: Story = {
	args: {
		message: '',
	},
	decorators: [
		() => (
			<ToastProvider>
				<ToastDemo />
			</ToastProvider>
		),
	],
};
