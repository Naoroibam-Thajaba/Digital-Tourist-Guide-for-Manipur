import { createContext, useContext, useReducer, useCallback, type ReactNode } from 'react';
import { Toast } from '../components/atoms/Toast';
import type { ToastItem, ToastPosition } from '../components/atoms/Toast';

interface ToastState {
	toasts: ToastItem[];
}

type ToastAction =
	| { type: 'ADD_TOAST'; payload: ToastItem; maxToasts: number }
	| { type: 'REMOVE_TOAST'; payload: string };

interface ToastContextType {
	toasts: ToastItem[];
	showToast: (message: string, options?: Partial<Omit<ToastItem, 'id' | 'message'>>) => void;
	showInfo: (message: string) => void;
	showSuccess: (message: string) => void;
	showWarning: (message: string) => void;
	showError: (message: string) => void;
	showNotImplemented: (feature?: string) => void;
	removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
	switch (action.type) {
		case 'ADD_TOAST': {
			let toasts = state.toasts;
			// Remove oldest toast if we've reached the limit
			if (toasts.length >= action.maxToasts) {
				toasts = toasts.slice(1);
			}
			return {
				...state,
				toasts: [...toasts, action.payload],
			};
		}
		case 'REMOVE_TOAST':
			return {
				...state,
				toasts: state.toasts.filter((toast) => toast.id !== action.payload),
			};
		default:
			return state;
	}
};

interface ToastProviderProps {
	children: ReactNode;
	/** Default position for all toasts */
	defaultPosition?: ToastPosition;
	/** Default duration for all toasts */
	defaultDuration?: number;
	/** Maximum number of toasts to show at once */
	maxToasts?: number;
}

export const ToastProvider = ({
	children,
	defaultPosition = 'bottom-end',
	defaultDuration = 4000,
	maxToasts = 5,
}: ToastProviderProps) => {
	const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

	const removeToast = useCallback((id: string) => {
		dispatch({ type: 'REMOVE_TOAST', payload: id });
	}, []);

	const showToast = useCallback(
		(message: string, options?: Partial<Omit<ToastItem, 'id' | 'message'>>) => {
			const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
			const toast: ToastItem = {
				id,
				message,
				variant: options?.variant ?? 'info',
				position: options?.position ?? defaultPosition,
				duration: options?.duration ?? defaultDuration,
				showClose: options?.showClose ?? true,
				...options,
			};

			dispatch({ type: 'ADD_TOAST', payload: toast, maxToasts });
		},
		[defaultPosition, defaultDuration, maxToasts]
	);

	const showInfo = useCallback(
		(message: string) => showToast(message, { variant: 'info' }),
		[showToast]
	);

	const showSuccess = useCallback(
		(message: string) => showToast(message, { variant: 'success' }),
		[showToast]
	);

	const showWarning = useCallback(
		(message: string) => showToast(message, { variant: 'warning' }),
		[showToast]
	);

	const showError = useCallback(
		(message: string) => showToast(message, { variant: 'error' }),
		[showToast]
	);

	const showNotImplemented = useCallback(
		(feature?: string) => {
			const message = feature
				? `"${feature}" is not implemented yet`
				: 'This feature is not implemented yet';
			showToast(message, { variant: 'warning' });
		},
		[showToast]
	);

	return (
		<ToastContext.Provider
			value={{
				toasts: state.toasts,
				showToast,
				showInfo,
				showSuccess,
				showWarning,
				showError,
				showNotImplemented,
				removeToast,
			}}
		>
			{children}
			{/* Render all active toasts */}
			{state.toasts.map((toast) => (
				<Toast
					key={toast.id}
					{...toast}
					onClose={() => removeToast(toast.id)}
				/>
			))}
		</ToastContext.Provider>
	);
};

export const useToast = (): ToastContextType => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};
