import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import { Badge } from '../../atoms/Badge';
import { NotImplementedLink } from '../../molecules/NotImplementedLink';
import type { DashboardProps } from './DashboardProps';

// Mock dashboard data
const mockStats = {
	totalBookings: 156,
	totalRevenue: 425000,
	averageRating: 4.8,
	occupancyRate: 78,
};

const mockRecentBookings = [
	{
		id: '1',
		guestName: 'Amit Sharma',
		homestay: 'Peaceful Cottage in Netarhat',
		checkIn: '2025-01-15',
		checkOut: '2025-01-18',
		status: 'confirmed',
		amount: 7500,
	},
	{
		id: '2',
		guestName: 'Priya Patel',
		homestay: 'Forest View Lodge',
		checkIn: '2025-01-20',
		checkOut: '2025-01-22',
		status: 'pending',
		amount: 5400,
	},
	{
		id: '3',
		guestName: 'Rajesh Kumar',
		homestay: 'Tribal Heritage Home',
		checkIn: '2025-01-25',
		checkOut: '2025-01-28',
		status: 'confirmed',
		amount: 9600,
	},
];

const mockUpcomingCheckins = [
	{
		id: '1',
		guestName: 'Amit Sharma',
		checkIn: '2025-01-15',
		guests: 2,
		phone: '+91 98765 43210',
	},
	{
		id: '2',
		guestName: 'Neha Singh',
		checkIn: '2025-01-16',
		guests: 4,
		phone: '+91 87654 32109',
	},
];

/**
 * Dashboard page component for provider/host dashboard home
 */
export const Dashboard = ({
	loading = false,
	className = '',
}: DashboardProps) => {
	if (loading) {
		return (
			<div className="flex items-center justify-center py-16">
				<span className="loading loading-spinner loading-lg text-primary" />
			</div>
		);
	}

	const stats = mockStats;
	const recentBookings = mockRecentBookings;
	const upcomingCheckins = mockUpcomingCheckins;

	const containerClasses = ['space-y-8', className].filter(Boolean).join(' ');

	const getStatusBadge = (status: string) => {
		switch (status) {
			case 'confirmed':
				return <Badge variant="success" size="sm">Confirmed</Badge>;
			case 'pending':
				return <Badge variant="warning" size="sm">Pending</Badge>;
			case 'cancelled':
				return <Badge variant="error" size="sm">Cancelled</Badge>;
			default:
				return <Badge variant="neutral" style="soft" size="sm">{status}</Badge>;
		}
	};

	return (
		<div className={containerClasses}>
			{/* Welcome Section */}
			<div>
				<h1 className="font-heading text-2xl md:text-3xl font-bold">
					Welcome back, John!
				</h1>
				<p className="text-base-content/60 mt-1">
					Here's what's happening with your listings today.
				</p>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="card bg-base-100 shadow-sm">
					<div className="card-body">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-base-content/60 text-sm">Total Bookings</p>
								<p className="text-3xl font-bold mt-1">{stats.totalBookings}</p>
							</div>
							<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
								<Icon name="calendar_month" className="text-primary text-2xl" />
							</div>
						</div>
						<div className="flex items-center gap-1 mt-2 text-sm text-success">
							<Icon name="trending_up" size="sm" />
							<span>+12% from last month</span>
						</div>
					</div>
				</div>

				<div className="card bg-base-100 shadow-sm">
					<div className="card-body">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-base-content/60 text-sm">Total Revenue</p>
								<p className="text-3xl font-bold mt-1">{'₹' + stats.totalRevenue.toLocaleString()}</p>
							</div>
							<div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
								<Icon name="payments" className="text-success text-2xl" />
							</div>
						</div>
						<div className="flex items-center gap-1 mt-2 text-sm text-success">
							<Icon name="trending_up" size="sm" />
							<span>+8% from last month</span>
						</div>
					</div>
				</div>

				<div className="card bg-base-100 shadow-sm">
					<div className="card-body">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-base-content/60 text-sm">Average Rating</p>
								<p className="text-3xl font-bold mt-1">{stats.averageRating}</p>
							</div>
							<div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
								<Icon name="star" className="text-warning text-2xl" />
							</div>
						</div>
						<div className="flex items-center gap-1 mt-2 text-sm text-base-content/60">
							<span>Based on 67 reviews</span>
						</div>
					</div>
				</div>

				<div className="card bg-base-100 shadow-sm">
					<div className="card-body">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-base-content/60 text-sm">Occupancy Rate</p>
								<p className="text-3xl font-bold mt-1">{stats.occupancyRate}%</p>
							</div>
							<div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center">
								<Icon name="hotel" className="text-info text-2xl" />
							</div>
						</div>
						<div className="flex items-center gap-1 mt-2 text-sm text-success">
							<Icon name="trending_up" size="sm" />
							<span>+5% from last month</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Recent Bookings */}
				<div className="lg:col-span-2">
					<div className="card bg-base-100 shadow-sm">
						<div className="card-body">
							<div className="flex items-center justify-between mb-4">
								<h2 className="card-title font-heading">
									<Icon name="book_online" className="text-primary" />
									Recent Bookings
								</h2>
								<NotImplementedLink feature="Bookings" className="link link-primary text-sm">
									View all
								</NotImplementedLink>
							</div>

							<div className="overflow-x-auto">
								<table className="table">
									<thead>
										<tr>
											<th>Guest</th>
											<th>Homestay</th>
											<th>Dates</th>
											<th>Status</th>
											<th>Amount</th>
										</tr>
									</thead>
									<tbody>
										{recentBookings.map((booking) => (
											<tr key={booking.id}>
												<td className="font-medium">{booking.guestName}</td>
												<td className="text-sm text-base-content/70">{booking.homestay}</td>
												<td className="text-sm">
													{booking.checkIn} - {booking.checkOut}
												</td>
												<td>{getStatusBadge(booking.status)}</td>
												<td className="font-semibold">{'₹' + booking.amount.toLocaleString()}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				{/* Upcoming Check-ins */}
				<div className="lg:col-span-1">
					<div className="card bg-base-100 shadow-sm">
						<div className="card-body">
							<h2 className="card-title font-heading">
								<Icon name="login" className="text-primary" />
								Upcoming Check-ins
							</h2>

							<div className="space-y-4 mt-4">
								{upcomingCheckins.map((checkin) => (
									<div
										key={checkin.id}
										className="p-4 border border-base-200 rounded-lg"
									>
										<div className="flex items-start justify-between">
											<div>
												<h4 className="font-semibold">{checkin.guestName}</h4>
												<p className="text-sm text-base-content/60 mt-1">
													{checkin.guests} guests
												</p>
											</div>
											<Badge variant="info" size="sm">{checkin.checkIn}</Badge>
										</div>
										<div className="flex items-center gap-2 mt-3">
											<Button size="sm" style="ghost">
												<Icon name="phone" size="sm" />
												Call
											</Button>
											<Button size="sm" style="ghost">
												<Icon name="chat" size="sm" />
												Message
											</Button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Quick Actions */}
					<div className="card bg-base-100 shadow-sm mt-6">
						<div className="card-body">
							<h2 className="card-title font-heading">
								<Icon name="bolt" className="text-primary" />
								Quick Actions
							</h2>

							<div className="space-y-2 mt-4">
								<NotImplementedLink feature="Listings" className="btn btn-outline btn-block justify-start">
									<Icon name="add_business" size="sm" />
									Add New Listing
								</NotImplementedLink>
								<NotImplementedLink feature="Reviews" className="btn btn-outline btn-block justify-start">
									<Icon name="rate_review" size="sm" />
									Respond to Reviews
								</NotImplementedLink>
								<NotImplementedLink feature="Analytics" className="btn btn-outline btn-block justify-start">
									<Icon name="analytics" size="sm" />
									View Analytics
								</NotImplementedLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
