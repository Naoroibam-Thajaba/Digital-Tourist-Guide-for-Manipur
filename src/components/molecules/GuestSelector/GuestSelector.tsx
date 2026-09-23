import { useState } from 'react';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import type { GuestSelectorProps, GuestCount } from './GuestSelectorProps';

/**
 * GuestSelector component for selecting number of guests
 *
 * @param props - Component props
 * @returns GuestSelector component
 */
export const GuestSelector = ({
	value,
	onChange,
	maxAdults = 16,
	maxChildren = 8,
	minAdults = 1,
	className = ''
}: GuestSelectorProps) => {
	// Internal state for uncontrolled mode
	const [internalValue, setInternalValue] = useState<GuestCount>({
		adults: minAdults,
		children: 0
	});

	// Use controlled or uncontrolled value
	const guests = value !== undefined ? value : internalValue;

	// Update guest count
	const updateGuests = (newGuests: GuestCount) => {
		if (value === undefined) {
			setInternalValue(newGuests);
		}
		onChange?.(newGuests);
	};

	// Increment a guest type
	const increment = (type: 'adults' | 'children') => {
		const max = type === 'adults' ? maxAdults : maxChildren;
		if (guests[type] < max) {
			updateGuests({
				...guests,
				[type]: guests[type] + 1
			});
		}
	};

	// Decrement a guest type
	const decrement = (type: 'adults' | 'children') => {
		const min = type === 'adults' ? minAdults : 0;
		if (guests[type] > min) {
			updateGuests({
				...guests,
				[type]: guests[type] - 1
			});
		}
	};

	// Check if at min/max
	const isAtMin = (type: 'adults' | 'children') => {
		const min = type === 'adults' ? minAdults : 0;
		return guests[type] <= min;
	};

	const isAtMax = (type: 'adults' | 'children') => {
		const max = type === 'adults' ? maxAdults : maxChildren;
		return guests[type] >= max;
	};

	return (
		<div className={`space-y-4 ${className}`.trim()}>
			{/* Adults Row */}
			<div className="flex items-center justify-between">
				<div>
					<span className="font-medium">Adults</span>
					<span className="text-sm text-base-content/60 block">Age 13+</span>
				</div>
				<div className="join">
					<Button
						type="button"
						style="ghost"
						size="sm"
						circle
						className="join-item"
						onClick={() => decrement('adults')}
						disabled={isAtMin('adults')}
						aria-label="Decrease adults"
					>
						<Icon name="remove" size="sm" />
					</Button>
					<span className="join-item flex items-center justify-center w-12 text-center font-medium">
						{guests.adults}
					</span>
					<Button
						type="button"
						style="ghost"
						size="sm"
						circle
						className="join-item"
						onClick={() => increment('adults')}
						disabled={isAtMax('adults')}
						aria-label="Increase adults"
					>
						<Icon name="add" size="sm" />
					</Button>
				</div>
			</div>

			{/* Children Row */}
			<div className="flex items-center justify-between">
				<div>
					<span className="font-medium">Children</span>
					<span className="text-sm text-base-content/60 block">Ages 2-12</span>
				</div>
				<div className="join">
					<Button
						type="button"
						style="ghost"
						size="sm"
						circle
						className="join-item"
						onClick={() => decrement('children')}
						disabled={isAtMin('children')}
						aria-label="Decrease children"
					>
						<Icon name="remove" size="sm" />
					</Button>
					<span className="join-item flex items-center justify-center w-12 text-center font-medium">
						{guests.children}
					</span>
					<Button
						type="button"
						style="ghost"
						size="sm"
						circle
						className="join-item"
						onClick={() => increment('children')}
						disabled={isAtMax('children')}
						aria-label="Increase children"
					>
						<Icon name="add" size="sm" />
					</Button>
				</div>
			</div>

			{/* Total summary */}
			<div className="text-sm text-base-content/60 pt-2 border-t border-base-300">
				Total: {guests.adults + guests.children} guest{guests.adults + guests.children !== 1 ? 's' : ''}
			</div>
		</div>
	);
};
