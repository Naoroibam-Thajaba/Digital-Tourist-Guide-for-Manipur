import type { HTMLInputTypeAttribute, ChangeEvent, FocusEvent } from 'react';

/**
 * FormField component for form inputs with label, helper text, and error display
 *
 * @component
 * @example
 * // Basic form field
 * <FormField label="Email" name="email" type="email" />
 *
 * @example
 * // Form field with error
 * <FormField
 *   label="Password"
 *   name="password"
 *   type="password"
 *   error="Password must be at least 8 characters"
 * />
 *
 * @example
 * // Form field with icons
 * <FormField
 *   label="Search"
 *   name="search"
 *   leftIcon="search"
 *   placeholder="Search destinations..."
 * />
 *
 * @example
 * // Required form field with helper text
 * <FormField
 *   label="Username"
 *   name="username"
 *   required
 *   helperText="Choose a unique username"
 * />
 */

export type FormFieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface FormFieldProps {
	/** Label text for the field */
	label: string;
	/** Input name attribute */
	name: string;
	/** Input type (text, email, password, number, etc.) */
	type?: HTMLInputTypeAttribute;
	/** Placeholder text */
	placeholder?: string;
	/** Controlled value */
	value?: string;
	/** Default value for uncontrolled mode */
	defaultValue?: string;
	/** Change event handler */
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	/** Blur event handler */
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	/** Error message to display */
	error?: string;
	/** Helper text to display below the input */
	helperText?: string;
	/** Whether the field is required */
	required?: boolean;
	/** Whether the field is disabled */
	disabled?: boolean;
	/** Size variant */
	size?: FormFieldSize;
	/** Material icon name for left side */
	leftIcon?: string;
	/** Material icon name for right side */
	rightIcon?: string;
	/** Additional CSS classes */
	className?: string;
}
