/**
 * Login page component for user authentication
 *
 * @component
 * @example
 * // Basic usage
 * <Login onSubmit={(data) => handleLogin(data)} />
 *
 * @example
 * // With social login
 * <Login
 *   onSubmit={(data) => handleLogin(data)}
 *   onGoogleLogin={() => handleGoogleAuth()}
 *   onFacebookLogin={() => handleFacebookAuth()}
 * />
 */

export interface LoginFormData {
	/** User email */
	email: string;
	/** User password */
	password: string;
	/** Remember me preference */
	rememberMe: boolean;
}

export interface LoginProps {
	/** Callback when form is submitted */
	onSubmit?: (data: LoginFormData) => void;
	/** Callback for Google login */
	onGoogleLogin?: () => void;
	/** Callback for Facebook login */
	onFacebookLogin?: () => void;
	/** Whether form is submitting */
	isLoading?: boolean;
	/** Error message to display */
	error?: string;
	/** Additional CSS classes */
	className?: string;
}
