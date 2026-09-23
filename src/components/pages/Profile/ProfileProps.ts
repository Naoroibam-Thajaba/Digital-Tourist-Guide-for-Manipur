/**
 * Profile page component for user profile settings
 *
 * @component
 * @example
 * <Profile />
 *
 * @example
 * // With callbacks
 * <Profile
 *   onSave={handleSave}
 *   onPasswordChange={handlePasswordChange}
 * />
 */

export interface ProfileProps {
	/** Loading state */
	loading?: boolean;
	/** Callback when profile is saved */
	onSave?: (profileData: ProfileData) => void;
	/** Callback when password is changed */
	onPasswordChange?: (oldPassword: string, newPassword: string) => void;
	/** Additional CSS classes */
	className?: string;
}

export interface ProfileData {
	name: string;
	email: string;
	phone: string;
	avatar?: string;
}
