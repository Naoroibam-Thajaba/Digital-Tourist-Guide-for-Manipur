/**
 * CartItem component for shopping cart items with image, title, price, and quantity controls
 *
 * @component
 * @example
 * // Basic cart item
 * <CartItem
 *   product={{
 *     id: '1',
 *     title: 'Tribal Dokra Art Elephant',
 *     image: '/images/dokra.jpg',
 *     price: 1200,
 *   }}
 *   quantity={1}
 *   onQuantityChange={(qty) => updateQuantity('1', qty)}
 *   onRemove={() => removeItem('1')}
 * />
 *
 * @example
 * // Cart item with discount and artisan
 * <CartItem
 *   product={{
 *     id: '2',
 *     title: 'Handwoven Sohrai Painting',
 *     image: '/images/sohrai.jpg',
 *     price: 2800,
 *     originalPrice: 3500,
 *     artisan: 'Meera Devi',
 *   }}
 *   quantity={2}
 *   onQuantityChange={handleQuantityChange}
 *   onRemove={handleRemove}
 * />
 */

export interface CartItemProduct {
	/** Unique product identifier */
	id: string;
	/** Product title */
	title: string;
	/** Product image URL */
	image: string;
	/** Current price */
	price: number;
	/** Original price (for showing discount) */
	originalPrice?: number;
	/** Artisan name */
	artisan?: string;
}

export interface CartItemProps {
	/** Product details */
	product: CartItemProduct;
	/** Quantity in cart */
	quantity: number;
	/** Callback when quantity changes */
	onQuantityChange?: (quantity: number) => void;
	/** Callback when item is removed */
	onRemove?: () => void;
	/** Additional CSS classes */
	className?: string;
}
