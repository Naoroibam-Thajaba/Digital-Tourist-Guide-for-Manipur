/**
 * ProductDetail page component for displaying marketplace product details
 *
 * @component
 * @example
 * // Basic usage - reads productId from URL params
 * <ProductDetail />
 *
 * @example
 * // With external data (API-driven)
 * <ProductDetail
 *   product={productData}
 *   loading={isLoading}
 *   onAddToCart={handleAddToCart}
 * />
 */

export interface ProductDetailProps {
	/** Product ID (if not using URL params) */
	productId?: string;
	/** Loading state */
	loading?: boolean;
	/** Callback when adding to cart */
	onAddToCart?: (productId: string, quantity: number) => void;
	/** Additional CSS classes */
	className?: string;
}
