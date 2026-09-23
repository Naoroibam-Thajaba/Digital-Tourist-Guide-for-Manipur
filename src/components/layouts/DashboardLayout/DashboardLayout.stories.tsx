import type { Meta, StoryObj } from '@storybook/react';
import { DashboardLayout } from './DashboardLayout';
import { Icon } from '../../atoms/Icon';

const meta = {
	title: 'Layouts/DashboardLayout',
	component: DashboardLayout,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample user
const sampleUser = {
	name: 'Ramesh Singh',
	avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
};

// Sample Dashboard Content
const DashboardContent = () => (
	<div className="space-y-6">
		<div className="flex items-center justify-between">
			<h1 className="text-2xl font-heading font-bold">Dashboard</h1>
			<button className="btn btn-primary btn-sm">
				<Icon name="add" size="sm" />
				Add Listing
			</button>
		</div>

		{/* Stats */}
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{[
				{ label: 'Total Views', value: '2,456', icon: 'visibility', change: '+12%' },
				{ label: 'Bookings', value: '18', icon: 'calendar_month', change: '+5%' },
				{ label: 'Revenue', value: '₹45,200', icon: 'payments', change: '+8%' },
				{ label: 'Reviews', value: '4.8', icon: 'star', change: '+0.2' },
			].map((stat) => (
				<div key={stat.label} className="card bg-base-100 shadow">
					<div className="card-body">
						<div className="flex items-center justify-between">
							<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
								<Icon name={stat.icon} size="md" className="text-primary" />
							</div>
							<span className="text-success text-sm">{stat.change}</span>
						</div>
						<p className="text-2xl font-bold mt-2">{stat.value}</p>
						<p className="text-sm text-base-content/60">{stat.label}</p>
					</div>
				</div>
			))}
		</div>

		{/* Recent Bookings */}
		<div className="card bg-base-100 shadow">
			<div className="card-body">
				<h2 className="card-title">Recent Bookings</h2>
				<div className="overflow-x-auto">
					<table className="table">
						<thead>
							<tr>
								<th>Guest</th>
								<th>Property</th>
								<th>Dates</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{[
								{ guest: 'Aarav Kumar', property: 'Peaceful Cottage', dates: 'Dec 20-22', status: 'Confirmed' },
								{ guest: 'Priya Devi', property: 'Forest View Lodge', dates: 'Dec 25-28', status: 'Pending' },
								{ guest: 'Rahul Sharma', property: 'Peaceful Cottage', dates: 'Jan 1-3', status: 'Confirmed' },
							].map((booking, i) => (
								<tr key={i}>
									<td>{booking.guest}</td>
									<td>{booking.property}</td>
									<td>{booking.dates}</td>
									<td>
										<span className={`badge badge-sm ${booking.status === 'Confirmed' ? 'badge-success' : 'badge-warning'}`}>
											{booking.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
);

// Sample Listings Content
const ListingsContent = () => (
	<div className="space-y-6">
		<div className="flex items-center justify-between">
			<h1 className="text-2xl font-heading font-bold">My Listings</h1>
			<button className="btn btn-primary btn-sm">
				<Icon name="add" size="sm" />
				Add Listing
			</button>
		</div>

		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{[
				{ title: 'Peaceful Cottage', location: 'Netarhat', status: 'Active', views: 234, bookings: 12 },
				{ title: 'Forest View Lodge', location: 'Betla', status: 'Active', views: 156, bookings: 8 },
			].map((listing, i) => (
				<div key={i} className="card bg-base-100 shadow">
					<div className="card-body">
						<div className="flex items-start justify-between">
							<div>
								<h3 className="font-semibold">{listing.title}</h3>
								<p className="text-sm text-base-content/60">{listing.location}</p>
							</div>
							<span className="badge badge-success">{listing.status}</span>
						</div>
						<div className="flex gap-4 mt-4 text-sm">
							<span className="flex items-center gap-1">
								<Icon name="visibility" size="xs" />
								{listing.views} views
							</span>
							<span className="flex items-center gap-1">
								<Icon name="calendar_month" size="xs" />
								{listing.bookings} bookings
							</span>
						</div>
						<div className="card-actions justify-end mt-4">
							<button className="btn btn-ghost btn-sm">Edit</button>
							<button className="btn btn-primary btn-sm">View</button>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
);

// Default dashboard
export const Default: Story = {
	args: {
		user: sampleUser,
		children: <DashboardContent />,
		onLogout: () => console.log('Logout clicked'),
	},
};

// Listings page
export const ListingsPage: Story = {
	args: {
		user: sampleUser,
		children: <ListingsContent />,
		onLogout: () => console.log('Logout clicked'),
	},
};

// With notifications
export const WithNotifications: Story = {
	args: {
		user: sampleUser,
		notificationCount: 5,
		children: <DashboardContent />,
		onLogout: () => console.log('Logout clicked'),
	},
};

// Many notifications (9+)
export const ManyNotifications: Story = {
	args: {
		user: sampleUser,
		notificationCount: 15,
		children: <DashboardContent />,
		onLogout: () => console.log('Logout clicked'),
	},
};

// Without avatar
export const NoAvatar: Story = {
	args: {
		user: {
			name: 'New Provider',
		},
		children: <DashboardContent />,
		onLogout: () => console.log('Logout clicked'),
	},
};

// Bookings page active
export const BookingsActive: Story = {
	args: {
		user: sampleUser,
		children: (
			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<h1 className="text-2xl font-heading font-bold">Bookings</h1>
					<p className="text-base-content/60">Manage your booking requests here.</p>
				</div>
			</div>
		),
		onLogout: () => console.log('Logout clicked'),
	},
};

// Analytics page active
export const AnalyticsActive: Story = {
	args: {
		user: sampleUser,
		children: (
			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<h1 className="text-2xl font-heading font-bold">Analytics</h1>
					<p className="text-base-content/60">View your performance metrics.</p>
				</div>
			</div>
		),
		onLogout: () => console.log('Logout clicked'),
	},
};

// Settings page active
export const SettingsActive: Story = {
	args: {
		user: sampleUser,
		children: (
			<div className="card bg-base-100 shadow">
				<div className="card-body">
					<h1 className="text-2xl font-heading font-bold">Settings</h1>
					<p className="text-base-content/60">Manage your account settings.</p>
				</div>
			</div>
		),
		onLogout: () => console.log('Logout clicked'),
	},
};
