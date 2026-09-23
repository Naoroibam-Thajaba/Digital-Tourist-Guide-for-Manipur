import { useMemo } from 'react';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Price } from '../../atoms/Price';
import { CartItem as CartItemMolecule } from '../../molecules/CartItem';
import type { ShoppingCartProps } from './ShoppingCartProps';

/**
 * ShoppingCart organism for cart drawer/modal
 *
 * Displays cart items with quantity controls and checkout
 *
 * @param props - Component props
 * @returns ShoppingCart component
 */
export const ShoppingCart = ({
	items,
	onClose,
	onRemove,
	onUpdateQuantity,
	onCheckout,
	onContinueShopping,
	className = ''
}: ShoppingCartProps) => {
	// Calculate totals
	const { subtotal, itemCount } = useMemo(() => {
		const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
		const count = items.reduce((sum, item) => sum + item.quantity, 0);
		return { subtotal: total, itemCount: count };
	}, [items]);

	// Empty cart state
	if (items.length === 0) {
		return (
			<aside
				className={`flex flex-col h-full ${className}`.trim()}
				role="region"
				aria-label="Shopping cart"
			>
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b border-base-200">
					<h2 className="font-heading text-lg font-bold">Shopping Cart</h2>
					{onClose && (
						<Button style="ghost" size="sm" className="btn-circle" onClick={onClose} aria-label="Close cart">
							<Icon name="close" size="md" />
						</Button>
					)}
				</div>

				{/* Empty State */}
				<div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
					<div className="bg-base-200 rounded-full p-6 mb-4">
						<Icon name="shopping_cart" size="lg" className="text-base-content/30" />
					</div>
					<h3 className="font-semibold text-lg mb-2">Your cart is empty</h3>
					<p className="text-base-content/60 mb-6">
						Looks like you haven't added any items yet
					</p>
					{onContinueShopping && (
						<Button color="primary" onClick={onContinueShopping}>
							<Icon name="store" size="sm" />
							Start Shopping
						</Button>
					)}
				</div>
			</aside>
		);
	}

	return (
		<aside
			className={`flex flex-col h-full ${className}`.trim()}
			role="region"
			aria-label={`Shopping cart with ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
			aria-live="polite"
		>
			{/* Header */}
			<div className="flex items-center justify-between p-4 border-b border-base-200">
				<h2 className="font-heading text-lg font-bold">
					Shopping Cart ({itemCount} item{itemCount !== 1 ? 's' : ''})
				</h2>
				{onClose && (
					<Button style="ghost" size="sm" className="btn-circle" onClick={onClose} aria-label="Close cart">
						<Icon name="close" size="md" />
					</Button>
				)}
			</div>

			{/* Cart Items */}
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{items.map((item) => (
					<CartItemMolecule
						key={item.id}
						product={{
							id: item.id,
							title: item.name,
							image: item.image || '',
							price: item.price
						}}
						quantity={item.quantity}
						onRemove={() => onRemove?.(item.id)}
						onQuantityChange={(qty: number) => onUpdateQuantity?.(item.id, qty)}
					/>
				))}
			</div>

			{/* Footer with Totals */}
			<div className="border-t border-base-200 p-4 space-y-4 bg-base-100">
				{/* Subtotal */}
				<div className="flex items-center justify-between">
					<span className="text-base-content/60">Subtotal</span>
					<Price amount={subtotal} size="lg" className="font-bold" />
				</div>

				{/* Shipping Notice */}
				<p className="text-sm text-base-content/60 text-center">
					Shipping and taxes calculated at checkout
				</p>

				{/* Checkout Button */}
				<Button
					color="primary"
					size="lg"
					className="w-full"
					onClick={onCheckout}
				>
					<Icon name="shopping_cart_checkout" size="sm" />
					Proceed to Checkout
				</Button>

				{/* Continue Shopping */}
				{onContinueShopping && (
					<Button
						style="ghost"
						className="w-full"
						onClick={onContinueShopping}
					>
						Continue Shopping
					</Button>
				)}
			</div>
		</aside>
	);
};
