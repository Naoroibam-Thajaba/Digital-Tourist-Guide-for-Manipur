import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Price } from '../../atoms/Price';
import type { CartItemProps } from './CartItemProps';

/**
 * CartItem component for shopping cart items
 *
 * @param props - Component props
 * @returns CartItem component
 */
export const CartItem = ({
	product,
	quantity,
	onQuantityChange,
	onRemove,
	className = ''
}: CartItemProps) => {
	// Handle quantity decrement
	const handleDecrement = () => {
		if (quantity > 1) {
			onQuantityChange?.(quantity - 1);
		}
	};

	// Handle quantity increment
	const handleIncrement = () => {
		onQuantityChange?.(quantity + 1);
	};

	return (
		<div className={`card card-side bg-base-100 shadow-sm ${className}`.trim()}>
			{/* Product image */}
			<figure className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
				<img
					src={product.image}
					alt={product.title}
					className="w-full h-full object-cover"
					loading="lazy"
				/>
			</figure>

			{/* Card body */}
			<div className="card-body p-2 sm:p-3 flex-row justify-between items-center gap-2 sm:gap-3">
				{/* Product info */}
				<div className="flex-1 min-w-0">
					<h3 className="font-semibold text-xs sm:text-sm line-clamp-2">{product.title}</h3>
					{product.artisan && (
						<p className="text-xs text-base-content/60 mt-0.5">
							by {product.artisan}
						</p>
					)}
					<div className="mt-1">
						<Price
							amount={product.price}
							originalAmount={product.originalPrice}
							size="sm"
						/>
					</div>
				</div>

				{/* Quantity controls and remove */}
				<div className="flex items-center gap-2 flex-shrink-0">
					{/* Quantity controls */}
					{onQuantityChange && (
						<div className="join">
							<Button
								type="button"
								style="ghost"
								size="xs"
								className="join-item"
								onClick={handleDecrement}
								disabled={quantity <= 1}
								aria-label="Decrease quantity"
							>
								<Icon name="remove" size="xs" />
							</Button>
							<span className="join-item flex items-center justify-center w-8 text-sm font-medium">
								{quantity}
							</span>
							<Button
								type="button"
								style="ghost"
								size="xs"
								className="join-item"
								onClick={handleIncrement}
								aria-label="Increase quantity"
							>
								<Icon name="add" size="xs" />
							</Button>
						</div>
					)}

					{/* Remove button */}
					{onRemove && (
						<Button
							type="button"
							style="ghost"
							size="sm"
							onClick={onRemove}
							aria-label="Remove item"
						>
							<Icon name="delete" size="sm" color="error" />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
