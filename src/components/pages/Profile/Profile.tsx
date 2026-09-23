import { useState } from 'react';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Avatar } from '../../atoms/Avatar';
import type { ProfileProps, ProfileData } from './ProfileProps';

// Mock user data
const mockUser = {
	name: 'John Doe',
	email: 'john.doe@example.com',
	phone: '+91 98765 43210',
	avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
};

/**
 * Profile page component for user profile settings
 */
export const Profile = ({
	loading = false,
	onSave,
	onPasswordChange,
	className = '',
}: ProfileProps) => {
	const [profileData, setProfileData] = useState<ProfileData>({
		name: mockUser.name,
		email: mockUser.email,
		phone: mockUser.phone,
		avatar: mockUser.avatar,
	});

	const [passwordData, setPasswordData] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	const [notifications, setNotifications] = useState({
		emailBookings: true,
		emailMarketing: false,
		smsBookings: true,
		smsMarketing: false,
	});

	const [isSaving, setIsSaving] = useState(false);
	const [isChangingPassword, setIsChangingPassword] = useState(false);

	const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProfileData((prev) => ({ ...prev, [name]: value }));
	};

	const handlePasswordDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPasswordData((prev) => ({ ...prev, [name]: value }));
	};

	const handleNotificationChange = (key: keyof typeof notifications) => {
		setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	const handleProfileSave = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSaving(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (onSave) {
			onSave(profileData);
		}

		setIsSaving(false);
	};

	const handlePasswordSave = async (e: React.FormEvent) => {
		e.preventDefault();
		if (passwordData.newPassword !== passwordData.confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		setIsChangingPassword(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (onPasswordChange) {
			onPasswordChange(passwordData.currentPassword, passwordData.newPassword);
		}

		setPasswordData({
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		});

		setIsChangingPassword(false);
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center py-16">
				<span className="loading loading-spinner loading-lg text-primary" />
			</div>
		);
	}

	const containerClasses = ['space-y-8', className].filter(Boolean).join(' ');

	return (
		<div className={containerClasses}>
			{/* Header */}
			<div>
				<h1 className="font-heading text-2xl md:text-3xl font-bold">
					Profile Settings
				</h1>
				<p className="text-base-content/60 mt-1">
					Manage your account settings and preferences.
				</p>
			</div>

			{/* Profile Photo */}
			<div className="card bg-base-100 shadow-sm">
				<div className="card-body">
					<h2 className="card-title font-heading">
						<Icon name="photo_camera" className="text-primary" />
						Profile Photo
					</h2>

					<div className="flex items-center gap-6 mt-4">
						<Avatar
							src={profileData.avatar}
							alt={profileData.name}
							size="xl"
							className="w-24 h-24"
						/>
						<div className="space-y-2">
							<Button size="sm" style="outline">
								<Icon name="upload" size="sm" />
								Upload New Photo
							</Button>
							<p className="text-xs text-base-content/60">
								JPG, GIF or PNG. Max size 2MB.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Personal Information */}
			<form onSubmit={handleProfileSave}>
				<div className="card bg-base-100 shadow-sm">
					<div className="card-body">
						<h2 className="card-title font-heading">
							<Icon name="person" className="text-primary" />
							Personal Information
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
							<div className="form-control">
								<label className="label">
									<span className="label-text font-medium">Full Name</span>
								</label>
								<Input
									type="text"
									name="name"
									value={profileData.name}
									onChange={handleProfileChange}
									bordered
									required
								/>
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text font-medium">Email</span>
								</label>
								<Input
									type="email"
									name="email"
									value={profileData.email}
									onChange={handleProfileChange}
									bordered
									required
								/>
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text font-medium">Phone Number</span>
								</label>
								<Input
									type="tel"
									name="phone"
									value={profileData.phone}
									onChange={handleProfileChange}
									bordered
									required
								/>
							</div>
						</div>

						<div className="mt-6">
							<Button
								type="submit"
								variant="primary"
								disabled={isSaving}
							>
								{isSaving ? (
									<>
										<span className="loading loading-spinner loading-sm" />
										Saving...
									</>
								) : (
									<>
										<Icon name="save" size="sm" />
										Save Changes
									</>
								)}
							</Button>
						</div>
					</div>
				</div>
			</form>

			{/* Password Change */}
			<form onSubmit={handlePasswordSave}>
				<div className="card bg-base-100 shadow-sm">
					<div className="card-body">
						<h2 className="card-title font-heading">
							<Icon name="lock" className="text-primary" />
							Change Password
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
							<div className="form-control md:col-span-2">
								<label className="label">
									<span className="label-text font-medium">Current Password</span>
								</label>
								<Input
									type="password"
									name="currentPassword"
									value={passwordData.currentPassword}
									onChange={handlePasswordDataChange}
									placeholder="Enter current password"
									bordered
									className="max-w-md"
								/>
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text font-medium">New Password</span>
								</label>
								<Input
									type="password"
									name="newPassword"
									value={passwordData.newPassword}
									onChange={handlePasswordDataChange}
									placeholder="Enter new password"
									bordered
								/>
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text font-medium">Confirm New Password</span>
								</label>
								<Input
									type="password"
									name="confirmPassword"
									value={passwordData.confirmPassword}
									onChange={handlePasswordDataChange}
									placeholder="Confirm new password"
									bordered
								/>
							</div>
						</div>

						<div className="mt-6">
							<Button
								type="submit"
								style="outline"
								disabled={isChangingPassword || !passwordData.currentPassword || !passwordData.newPassword}
							>
								{isChangingPassword ? (
									<>
										<span className="loading loading-spinner loading-sm" />
										Updating...
									</>
								) : (
									<>
										<Icon name="lock_reset" size="sm" />
										Update Password
									</>
								)}
							</Button>
						</div>
					</div>
				</div>
			</form>

			{/* Notification Preferences */}
			<div className="card bg-base-100 shadow-sm">
				<div className="card-body">
					<h2 className="card-title font-heading">
						<Icon name="notifications" className="text-primary" />
						Notification Preferences
					</h2>

					<div className="space-y-4 mt-4">
						<div className="flex items-center justify-between py-2">
							<div>
								<p className="font-medium">Booking Notifications (Email)</p>
								<p className="text-sm text-base-content/60">
									Receive email notifications for new bookings and updates
								</p>
							</div>
							<input
								type="checkbox"
								checked={notifications.emailBookings}
								onChange={() => handleNotificationChange('emailBookings')}
								className="toggle toggle-primary"
							/>
						</div>

						<div className="flex items-center justify-between py-2">
							<div>
								<p className="font-medium">Marketing Emails</p>
								<p className="text-sm text-base-content/60">
									Receive promotional emails and offers
								</p>
							</div>
							<input
								type="checkbox"
								checked={notifications.emailMarketing}
								onChange={() => handleNotificationChange('emailMarketing')}
								className="toggle toggle-primary"
							/>
						</div>

						<div className="flex items-center justify-between py-2">
							<div>
								<p className="font-medium">Booking Notifications (SMS)</p>
								<p className="text-sm text-base-content/60">
									Receive SMS notifications for new bookings
								</p>
							</div>
							<input
								type="checkbox"
								checked={notifications.smsBookings}
								onChange={() => handleNotificationChange('smsBookings')}
								className="toggle toggle-primary"
							/>
						</div>

						<div className="flex items-center justify-between py-2">
							<div>
								<p className="font-medium">Marketing SMS</p>
								<p className="text-sm text-base-content/60">
									Receive promotional SMS messages
								</p>
							</div>
							<input
								type="checkbox"
								checked={notifications.smsMarketing}
								onChange={() => handleNotificationChange('smsMarketing')}
								className="toggle toggle-primary"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Danger Zone */}
			<div className="card bg-base-100 shadow-sm border-2 border-error/20">
				<div className="card-body">
					<h2 className="card-title font-heading text-error">
						<Icon name="warning" className="text-error" />
						Danger Zone
					</h2>

					<div className="flex items-center justify-between mt-4">
						<div>
							<p className="font-medium">Delete Account</p>
							<p className="text-sm text-base-content/60">
								Permanently delete your account and all associated data
							</p>
						</div>
						<Button variant="error" style="outline">
							<Icon name="delete" size="sm" />
							Delete Account
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
