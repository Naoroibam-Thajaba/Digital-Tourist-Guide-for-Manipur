/**
 * ShoppingCart organism component for cart management
 *
 * @component
 * @example
 * <ShoppingCart
 *   items={cartItems}
 *   onRemove={(id) => removeFromCart(id)}
 *   onUpdateQuantity={(id, qty) => updateQuantity(id, qty)}
 *   onCheckout={() => navigate('/checkout')}
 * />
 */

export interface CartItem {
	/** Unique identifier */
	id: string;
	/** Product name */
	name: string;
	/** Product image URL */
	image?: string;
	/** Unit price in INR */
	price: number;
	/** Quantity in cart */
	quantity: number;
	/** Maximum available quantity */
	maxQuantity?: number;
	/** Product variant (e.g., size, color) */
	variant?: string;
}

export interface ShoppingCartProps {
	/** Array of cart items */
	items: CartItem[];
	/** Whether the cart drawer is open */
	isOpen?: boolean;
	/** Callback to close the cart */
	onClose?: () => void;
	/** Callback when an item is removed */
	onRemove?: (id: string) => void;
	/** Callback when quantity is updated */
	onUpdateQuantity?: (id: string, quantity: number) => void;
	/** Callback when checkout is clicked */
	onCheckout?: () => void;
	/** Callback when continue shopping is clicked */
	onContinueShopping?: () => void;
	/** Additional CSS classes */
	className?: string;
}
