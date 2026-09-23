import { Icon } from '../../atoms/Icon';
import type { FormFieldProps } from './FormFieldProps';

/**
 * FormField component for form inputs with label, helper text, and error display
 *
 * @param props - Component props
 * @returns FormField component
 */
export const FormField = ({
	label,
	name,
	type = 'text',
	placeholder,
	value,
	defaultValue,
	onChange,
	onBlur,
	error,
	helperText,
	required = false,
	disabled = false,
	size = 'md',
	leftIcon,
	rightIcon,
	className = ''
}: FormFieldProps) => {
	// Size mapping for input
	const sizeClasses: Record<string, string> = {
		xs: 'input-xs',
		sm: 'input-sm',
		md: 'input-md',
		lg: 'input-lg',
		xl: 'input-xl'
	};

	// Size mapping for icons
	const iconSizes: Record<string, 'xs' | 'sm' | 'md' | 'lg'> = {
		xs: 'xs',
		sm: 'xs',
		md: 'sm',
		lg: 'md',
		xl: 'md'
	};

	// Build input classes
	const inputClasses = [
		'input',
		'input-bordered',
		'w-full',
		sizeClasses[size],
		error && 'input-error',
		(leftIcon || rightIcon) && 'flex items-center gap-2'
	].filter(Boolean).join(' ');

	return (
		<fieldset className={`fieldset w-full ${className}`.trim()}>
			{/* Label */}
			<legend className="fieldset-legend">
				{label}
				{required && <span className="text-error ml-1">*</span>}
			</legend>

			{/* Input with optional icons */}
			<label className={inputClasses}>
				{leftIcon && (
					<Icon
						name={leftIcon}
						size={iconSizes[size]}
						color={error ? 'error' : 'base-content'}
						className="opacity-70"
					/>
				)}
				<input
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					defaultValue={defaultValue}
					onChange={onChange}
					onBlur={onBlur}
					disabled={disabled}
					required={required}
					className="grow bg-transparent border-none outline-none"
					aria-invalid={error ? 'true' : undefined}
					aria-describedby={error ? `${name}-error` : helperText ? `${name}-helper` : undefined}
				/>
				{rightIcon && (
					<Icon
						name={rightIcon}
						size={iconSizes[size]}
						color={error ? 'error' : 'base-content'}
						className="opacity-70"
					/>
				)}
			</label>

			{/* Helper text or error message */}
			{helperText && !error && (
				<span id={`${name}-helper`} className="label text-base-content/60">
					{helperText}
				</span>
			)}
			{error && (
				<span id={`${name}-error`} className="label text-error">
					{error}
				</span>
			)}
		</fieldset>
	);
};
