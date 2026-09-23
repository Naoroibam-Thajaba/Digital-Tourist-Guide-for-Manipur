import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta = {
	title: 'Molecules/NavItem',
	component: NavItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: 'text',
			description: 'Material icon name',
		},
		label: {
			control: 'text',
			description: 'Navigation label text',
		},
		href: {
			control: 'text',
			description: 'Navigation URL',
		},
		badge: {
			control: 'text',
			description: 'Badge content (text or number)',
		},
		badgeVariant: {
			control: 'select',
			options: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
			description: 'Badge color variant',
		},
		isActive: {
			control: 'boolean',
			description: 'Whether this item is currently active',
		},
	},
	decorators: [
		(Story) => (
			<ul className="menu bg-base-200 rounded-box w-56">
				<Story />
			</ul>
		),
	],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic nav item
export const Default: Story = {
	args: {
		icon: 'home',
		label: 'Home',
		href: '#',
	},
};

// Active nav item
export const Active: Story = {
	args: {
		icon: 'cottage',
		label: 'Homestays',
		href: '#',
		isActive: true,
	},
};

// With badge
export const WithBadge: Story = {
	args: {
		icon: 'notifications',
		label: 'Notifications',
		href: '#',
		badge: 'New',
		badgeVariant: 'info',
	},
};

// With numeric badge
export const WithNumericBadge: Story = {
	args: {
		icon: 'shopping_cart',
		label: 'Cart',
		href: '#',
		badge: 3,
		badgeVariant: 'error',
	},
};

// All badge variants
export const AllBadgeVariants: Story = {
	args: {
		icon: 'home',
		label: 'Demo',
		href: '#',
	},
	decorators: [
		(Story) => (
			<ul className="menu bg-base-200 rounded-box w-56">
				<Story />
			</ul>
		),
	],
	render: () => (
		<>
			<NavItem icon="star" label="Primary" href="#" badge="5" badgeVariant="primary" />
			<NavItem icon="favorite" label="Secondary" href="#" badge="3" badgeVariant="secondary" />
			<NavItem icon="bolt" label="Accent" href="#" badge="New" badgeVariant="accent" />
			<NavItem icon="info" label="Info" href="#" badge="i" badgeVariant="info" />
			<NavItem icon="check" label="Success" href="#" badge="OK" badgeVariant="success" />
			<NavItem icon="warning" label="Warning" href="#" badge="!" badgeVariant="warning" />
			<NavItem icon="error" label="Error" href="#" badge="9+" badgeVariant="error" />
		</>
	),
};

// Main navigation example
export const MainNavigation: Story = {
	args: {
		icon: 'home',
		label: 'Demo',
		href: '#',
	},
	decorators: [
		(Story) => (
			<ul className="menu bg-base-200 rounded-box w-56">
				<Story />
			</ul>
		),
	],
	render: function MainNav() {
		const [activeItem, setActiveItem] = useState('home');

		const handleClick = (item: string) => () => {
			setActiveItem(item);
		};

		return (
			<>
				<NavItem
					icon="home"
					label="Home"
					href="#"
					isActive={activeItem === 'home'}
					onClick={handleClick('home')}
				/>
				<NavItem
					icon="cottage"
					label="Homestays"
					href="#"
					isActive={activeItem === 'homestays'}
					onClick={handleClick('homestays')}
				/>
				<NavItem
					icon="person"
					label="Guides"
					href="#"
					isActive={activeItem === 'guides'}
					onClick={handleClick('guides')}
				/>
				<NavItem
					icon="storefront"
					label="Marketplace"
					href="#"
					badge="Sale"
					badgeVariant="secondary"
					isActive={activeItem === 'marketplace'}
					onClick={handleClick('marketplace')}
				/>
			</>
		);
	},
};

// User menu example
export const UserMenu: Story = {
	args: {
		icon: 'home',
		label: 'Demo',
		href: '#',
	},
	decorators: [
		(Story) => (
			<ul className="menu bg-base-200 rounded-box w-56">
				<Story />
			</ul>
		),
	],
	render: () => (
		<>
			<NavItem icon="account_circle" label="Profile" href="#" />
			<NavItem icon="bookmark" label="Saved" href="#" badge={12} badgeVariant="primary" />
			<NavItem icon="history" label="Bookings" href="#" />
			<NavItem icon="shopping_bag" label="Orders" href="#" badge="2" badgeVariant="info" />
			<NavItem icon="settings" label="Settings" href="#" />
			<div className="divider my-1"></div>
			<NavItem icon="logout" label="Sign Out" href="#" />
		</>
	),
};

// Mobile bottom navigation
export const MobileNavigation: Story = {
	args: {
		icon: 'home',
		label: 'Demo',
		href: '#',
	},
	decorators: [
		(Story) => (
			<div className="btm-nav btm-nav-sm static w-80">
				<Story />
			</div>
		),
	],
	render: function MobileNav() {
		const [active, setActive] = useState('home');

		const items = [
			{ icon: 'home', label: 'Home', id: 'home' },
			{ icon: 'search', label: 'Search', id: 'search' },
			{ icon: 'favorite', label: 'Saved', id: 'saved' },
			{ icon: 'shopping_cart', label: 'Cart', id: 'cart', badge: 2 },
			{ icon: 'person', label: 'Profile', id: 'profile' },
		];

		return (
			<>
				{items.map((item) => (
					<button
						key={item.id}
						className={active === item.id ? 'active text-primary' : ''}
						onClick={() => setActive(item.id)}
					>
						<span className="material-symbols-outlined">{item.icon}</span>
						<span className="btm-nav-label text-xs">{item.label}</span>
					</button>
				))}
			</>
		);
	},
};

// Dashboard sidebar
export const DashboardSidebar: Story = {
	args: {
		icon: 'home',
		label: 'Demo',
		href: '#',
	},
	decorators: [
		(Story) => (
			<div className="w-64 bg-base-200 p-4 rounded-lg">
				<div className="font-bold text-lg mb-4 px-3">Dashboard</div>
				<ul className="menu">
					<Story />
				</ul>
			</div>
		),
	],
	render: () => (
		<>
			<NavItem icon="dashboard" label="Overview" href="#" isActive />
			<NavItem icon="cottage" label="My Listings" href="#" badge={3} badgeVariant="primary" />
			<NavItem icon="calendar_month" label="Bookings" href="#" badge="5" badgeVariant="warning" />
			<NavItem icon="reviews" label="Reviews" href="#" />
			<NavItem icon="analytics" label="Analytics" href="#" />
			<NavItem icon="payments" label="Earnings" href="#" />
		</>
	),
};
