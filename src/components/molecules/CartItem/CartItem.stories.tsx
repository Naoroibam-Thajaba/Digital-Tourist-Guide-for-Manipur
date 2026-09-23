import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CartItem } from './CartItem';
import type { CartItemProduct } from './CartItemProps';

const meta = {
	title: 'Molecules/CartItem',
	component: CartItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		quantity: {
			control: { type: 'number', min: 1, max: 10 },
			description: 'Quantity in cart',
		},
	},
	decorators: [
		(Story) => (
			<div className="w-96">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample products
const sampleProduct: CartItemProduct = {
	id: '1',
	title: 'Tribal Dokra Art Elephant Figurine',
	image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=200&h=200&fit=crop',
	price: 1200,
};

const discountedProduct: CartItemProduct = {
	id: '2',
	title: 'Handwoven Sohrai Painting - Traditional Design',
	image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&h=200&fit=crop',
	price: 2800,
	originalPrice: 3500,
	artisan: 'Meera Devi',
};

// Basic cart item
export const Default: Story = {
	args: {
		product: sampleProduct,
		quantity: 1,
		onQuantityChange: (qty) => console.log('Quantity:', qty),
		onRemove: () => console.log('Remove'),
	},
};

// With discount
export const WithDiscount: Story = {
	args: {
		product: discountedProduct,
		quantity: 1,
		onQuantityChange: (qty) => console.log('Quantity:', qty),
		onRemove: () => console.log('Remove'),
	},
};

// With artisan
export const WithArtisan: Story = {
	args: {
		product: {
			...sampleProduct,
			artisan: 'Ramesh Kumar',
		},
		quantity: 2,
		onQuantityChange: (qty) => console.log('Quantity:', qty),
		onRemove: () => console.log('Remove'),
	},
};

// Minimum quantity
export const MinQuantity: Story = {
	args: {
		product: sampleProduct,
		quantity: 1,
		onQuantityChange: (qty) => console.log('Quantity:', qty),
		onRemove: () => console.log('Remove'),
	},
};

// Interactive cart item
export const Interactive: Story = {
	args: {
		product: sampleProduct,
		quantity: 1,
	},
	render: function InteractiveCartItem(args) {
		const [quantity, setQuantity] = useState(args.quantity);
		const [removed, setRemoved] = useState(false);

		if (removed) {
			return (
				<div className="text-center text-base-content/60 p-4">
					Item removed.{' '}
					<button className="link" onClick={() => setRemoved(false)}>
						Undo
					</button>
				</div>
			);
		}

		return (
			<div className="space-y-4">
				<CartItem
					product={args.product}
					quantity={quantity}
					onQuantityChange={setQuantity}
					onRemove={() => setRemoved(true)}
				/>
				<p className="text-sm text-base-content/60 text-center">
					Subtotal: Rs{(args.product.price * quantity).toLocaleString('en-IN')}
				</p>
			</div>
		);
	},
};

// Multiple items (cart list)
export const CartList: Story = {
	args: {
		product: sampleProduct,
		quantity: 1,
	},
	render: function CartListDemo() {
		const [cart, setCart] = useState([
			{ product: sampleProduct, quantity: 2 },
			{ product: discountedProduct, quantity: 1 },
			{
				product: {
					id: '3',
					title: 'Handcrafted Brass Diya Set',
					image: 'https://images.unsplash.com/photo-1605537964076-73a6d8db8d41?w=200&h=200&fit=crop',
					price: 850,
					artisan: 'Sunita Mahto',
				},
				quantity: 3,
			},
		]);

		const updateQuantity = (id: string, quantity: number) => {
			setCart(cart.map(item =>
				item.product.id === id ? { ...item, quantity } : item
			));
		};

		const removeItem = (id: string) => {
			setCart(cart.filter(item => item.product.id !== id));
		};

		const total = cart.reduce(
			(sum, item) => sum + item.product.price * item.quantity,
			0
		);

		return (
			<div className="space-y-3">
				<h3 className="font-semibold">Shopping Cart ({cart.length} items)</h3>
				{cart.map(item => (
					<CartItem
						key={item.product.id}
						product={item.product}
						quantity={item.quantity}
						onQuantityChange={(qty) => updateQuantity(item.product.id, qty)}
						onRemove={() => removeItem(item.product.id)}
					/>
				))}
				<div className="divider"></div>
				<div className="flex justify-between items-center font-semibold">
					<span>Total</span>
					<span>Rs{total.toLocaleString('en-IN')}</span>
				</div>
				<button className="btn btn-primary btn-block">
					Proceed to Checkout
				</button>
			</div>
		);
	},
	decorators: [
		(Story) => (
			<div className="w-[400px]">
				<Story />
			</div>
		),
	],
};

// Read-only (no controls)
export const ReadOnly: Story = {
	args: {
		product: sampleProduct,
		quantity: 2,
	},
	render: (args) => (
		<div className="space-y-2">
			<p className="text-sm text-base-content/60">Order summary (read-only)</p>
			<CartItem product={args.product} quantity={args.quantity} />
		</div>
	),
};

// Cart drawer example
export const CartDrawer: Story = {
	args: {
		product: sampleProduct,
		quantity: 1,
	},
	render: function CartDrawerDemo() {
		const cartItems = [
			{ product: sampleProduct, quantity: 1 },
			{ product: discountedProduct, quantity: 2 },
		];

		const total = cartItems.reduce(
			(sum, item) => sum + item.product.price * item.quantity,
			0
		);

		return (
			<div className="bg-base-200 rounded-lg p-4 w-80">
				<div className="flex items-center justify-between mb-4">
					<h3 className="font-semibold">Your Cart</h3>
					<span className="badge badge-primary">{cartItems.length}</span>
				</div>
				<div className="space-y-2 max-h-64 overflow-auto">
					{cartItems.map(item => (
						<CartItem
							key={item.product.id}
							product={item.product}
							quantity={item.quantity}
							onQuantityChange={() => {}}
							onRemove={() => {}}
						/>
					))}
				</div>
				<div className="mt-4 pt-4 border-t border-base-300">
					<div className="flex justify-between text-sm mb-3">
						<span>Subtotal</span>
						<span className="font-semibold">Rs{total.toLocaleString('en-IN')}</span>
					</div>
					<button className="btn btn-primary btn-block btn-sm">
						Checkout
					</button>
					<button className="btn btn-ghost btn-block btn-sm mt-1">
						View Cart
					</button>
				</div>
			</div>
		);
	},
	decorators: [
		(Story) => (
			<div>
				<Story />
			</div>
		),
	],
};
