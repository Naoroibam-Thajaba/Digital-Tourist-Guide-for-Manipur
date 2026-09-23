import type { Preview } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { ToastProvider } from '../src/context/ToastContext';
import '../src/index.css'; // Import global styles

const preview: Preview = {
	parameters: {
        // Control panel configuration
        controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

        // Background color options
        backgrounds: {
			default: 'light',
			values: [
				{
					name: 'light',
					value: '#ffffff',
				},
				{
					name: 'dark',
					value: '#1a1a1a',
				},
			],
		},

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo'
        }
    },
	decorators: [
		// Wrap all stories with MemoryRouter for React Router context and ToastProvider for toast notifications
		(Story) => (
			<MemoryRouter>
				<ToastProvider>
					<Story />
				</ToastProvider>
			</MemoryRouter>
		),
	],
};

export default preview;