import { useEffect, useCallback } from 'react';
import type { ToastProps } from './ToastProps';
import { Icon } from '../Icon';

const variantClasses: Record<string, string> = {
	info: 'alert-info',
	success: 'alert-success',
	warning: 'alert-warning',
	error: 'alert-error',
};

const variantIcons: Record<string, string> = {
	info: 'info',
	success: 'check_circle',
	warning: 'warning',
	error: 'error',
};

const positionClasses: Record<string, string> = {
	'top-start': 'toast-top toast-start',
	'top-center': 'toast-top toast-center',
	'top-end': 'toast-top toast-end',
	'middle-start': 'toast-start toast-middle',
	'middle-center': 'toast-center toast-middle',
	'middle-end': 'toast-end toast-middle',
	'bottom-start': 'toast-start',
	'bottom-center': 'toast-center',
	'bottom-end': 'toast-end',
};

export const Toast = ({
	message,
	variant = 'info',
	position = 'bottom-end',
	duration = 4000,
	showClose = true,
	onClose,
	className = '',
}: ToastProps) => {
	const handleClose = useCallback(() => {
		onClose?.();
	}, [onClose]);

	useEffect(() => {
		if (duration > 0) {
			const timer = setTimeout(handleClose, duration);
			return () => clearTimeout(timer);
		}
	}, [duration, handleClose]);

	return (
		<div
			className={`toast ${positionClasses[position]} z-50 ${className}`}
			role="alert"
			aria-live="polite"
		>
			<div className={`alert ${variantClasses[variant]} shadow-lg`}>
				<Icon
					name={variantIcons[variant]}
					size="sm"
					className="shrink-0"
					aria-hidden="true"
				/>
				<span>{message}</span>
				{showClose && (
					<button
						type="button"
						className="btn btn-ghost btn-xs btn-circle"
						onClick={handleClose}
						aria-label="Close notification"
					>
						<Icon name="close" size="xs" />
					</button>
				)}
			</div>
		</div>
	);
};
