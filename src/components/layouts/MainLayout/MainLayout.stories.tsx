import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from './MainLayout';

const meta = {
	title: 'Layouts/MainLayout',
	component: MainLayout,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content component
const SampleContent = () => (
	<div className="space-y-6">
		<h1 className="text-3xl font-heading font-bold">Page Title</h1>
		<p className="text-base-content/70">
			This is sample page content inside the MainLayout. The layout provides
			a consistent structure with Navbar at the top, Footer at the bottom,
			and MobileNav on mobile devices.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			{[1, 2, 3].map((i) => (
				<div key={i} className="card bg-base-200 p-6">
					<h3 className="font-semibold mb-2">Card {i}</h3>
					<p className="text-sm text-base-content/60">
						Sample card content to demonstrate the layout container.
					</p>
				</div>
			))}
		</div>
	</div>
);

// Default layout (logged out)
export const Default: Story = {
	args: {
		children: <SampleContent />,
	},
};

// Logged in user
export const LoggedIn: Story = {
	args: {
		children: <SampleContent />,
		user: {
			id: '1',
			name: 'Aarav Kumar',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
			role: 'tourist',
		},
		cartItemCount: 3,
		onLogout: () => console.log('Logout clicked'),
	},
};

// Provider user
export const ProviderUser: Story = {
	args: {
		children: <SampleContent />,
		user: {
			id: '2',
			name: 'Ramesh Singh',
			role: 'provider',
		},
		onLogout: () => console.log('Logout clicked'),
	},
};

// Full width container
export const FullWidth: Story = {
	args: {
		children: (
			<div className="bg-base-200 p-8">
				<h1 className="text-3xl font-heading font-bold mb-4">Full Width Content</h1>
				<p>This content spans the full width of the viewport.</p>
			</div>
		),
		containerWidth: 'full',
	},
};

// Narrow container
export const NarrowContainer: Story = {
	args: {
		children: (
			<article className="prose max-w-none">
				<h1>Article Title</h1>
				<p>
					This is a narrow container, ideal for article or blog post content.
					The max-width is set to 3xl (48rem) for optimal reading experience.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
					ad minim veniam, quis nostrud exercitation ullamco laboris.
				</p>
			</article>
		),
		containerWidth: 'narrow',
	},
};

// Without footer
export const NoFooter: Story = {
	args: {
		children: <SampleContent />,
		showFooter: false,
	},
};

// Without mobile nav
export const NoMobileNav: Story = {
	args: {
		children: <SampleContent />,
		showMobileNav: false,
	},
};

// Minimal (no footer, no mobile nav)
export const Minimal: Story = {
	args: {
		children: <SampleContent />,
		showFooter: false,
		showMobileNav: false,
	},
};

// With cart items
export const WithCartItems: Story = {
	args: {
		children: <SampleContent />,
		cartItemCount: 5,
		activeMobileNavItem: 'cart',
	},
};

// Search active
export const SearchActive: Story = {
	args: {
		children: <SampleContent />,
		activeMobileNavItem: 'search',
		onSearch: (query) => console.log('Search:', query),
	},
};
