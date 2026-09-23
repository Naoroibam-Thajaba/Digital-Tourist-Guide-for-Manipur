/**
 * Register page component for user registration
 *
 * @component
 * @example
 * // Basic usage
 * <Register onSubmit={(data) => handleRegister(data)} />
 *
 * @example
 * // With social login and pre-selected role
 * <Register
 *   onSubmit={(data) => handleRegister(data)}
 *   onGoogleLogin={() => handleGoogleAuth()}
 *   defaultRole="provider"
 * />
 */

export type UserRole = 'tourist' | 'provider';

export interface RegisterFormData {
	/** Full name */
	fullName: string;
	/** User email */
	email: string;
	/** User password */
	password: string;
	/** Confirm password */
	confirmPassword: string;
	/** User role selection */
	role: UserRole;
	/** Accept terms and conditions */
	acceptTerms: boolean;
}

export interface RegisterProps {
	/** Callback when form is submitted */
	onSubmit?: (data: RegisterFormData) => void;
	/** Callback for Google signup */
	onGoogleLogin?: () => void;
	/** Callback for Facebook signup */
	onFacebookLogin?: () => void;
	/** Whether form is submitting */
	isLoading?: boolean;
	/** Error message to display */
	error?: string;
	/** Default role selection */
	defaultRole?: UserRole;
	/** Additional CSS classes */
	className?: string;
}
