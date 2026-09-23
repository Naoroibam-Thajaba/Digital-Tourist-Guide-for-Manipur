import { createContext, useContext, useReducer, useCallback, type ReactNode } from 'react';
import type { CartItem } from '../types/api.types';

/**
 * Cart state type
 */
interface CartState {
	items: CartItem[];
	isOpen: boolean;
}

/**
 * Cart context type
 */
interface CartContextType extends CartState {
	addItem: (item: Omit<CartItem, 'quantity'>) => void;
	removeItem: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
	openCart: () => void;
	closeCart: () => void;
	toggleCart: () => void;
	total: number;
	itemCount: number;
}

/**
 * Cart actions
 */
type CartAction =
	| { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
	| { type: 'REMOVE_ITEM'; payload: string }
	| { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
	| { type: 'CLEAR_CART' }
	| { type: 'OPEN_CART' }
	| { type: 'CLOSE_CART' }
	| { type: 'TOGGLE_CART' };

/**
 * Initial cart state
 */
const initialState: CartState = {
	items: [],
	isOpen: false,
};

/**
 * Cart reducer
 */
function cartReducer(state: CartState, action: CartAction): CartState {
	switch (action.type) {
		case 'ADD_ITEM': {
			const existingItem = state.items.find(item => item.id === action.payload.id);
			if (existingItem) {
				return {
					...state,
					items: state.items.map(item =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}
			return {
				...state,
				items: [...state.items, { ...action.payload, quantity: 1 }],
			};
		}
		case 'REMOVE_ITEM':
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload),
			};
		case 'UPDATE_QUANTITY':
			if (action.payload.quantity <= 0) {
				return {
					...state,
					items: state.items.filter(item => item.id !== action.payload.id),
				};
			}
			return {
				...state,
				items: state.items.map(item =>
					item.id === action.payload.id
						? { ...item, quantity: action.payload.quantity }
						: item
				),
			};
		case 'CLEAR_CART':
			return { ...state, items: [] };
		case 'OPEN_CART':
			return { ...state, isOpen: true };
		case 'CLOSE_CART':
			return { ...state, isOpen: false };
		case 'TOGGLE_CART':
			return { ...state, isOpen: !state.isOpen };
		default:
			return state;
	}
}

/**
 * Cart context
 */
const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Cart provider component
 */
export function CartProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
		dispatch({ type: 'ADD_ITEM', payload: item });
	}, []);

	const removeItem = useCallback((id: string) => {
		dispatch({ type: 'REMOVE_ITEM', payload: id });
	}, []);

	const updateQuantity = useCallback((id: string, quantity: number) => {
		dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
	}, []);

	const clearCart = useCallback(() => {
		dispatch({ type: 'CLEAR_CART' });
	}, []);

	const openCart = useCallback(() => {
		dispatch({ type: 'OPEN_CART' });
	}, []);

	const closeCart = useCallback(() => {
		dispatch({ type: 'CLOSE_CART' });
	}, []);

	const toggleCart = useCallback(() => {
		dispatch({ type: 'TOGGLE_CART' });
	}, []);

	const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

	const value: CartContextType = {
		...state,
		addItem,
		removeItem,
		updateQuantity,
		clearCart,
		openCart,
		closeCart,
		toggleCart,
		total,
		itemCount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Hook to use cart context
 */
export function useCart(): CartContextType {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
}
