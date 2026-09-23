import { useState, useMemo } from 'react';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Price } from '../../atoms/Price';
import { GuestSelector } from '../../molecules/GuestSelector';
import type { BookingWidgetProps, BookingData } from './BookingWidgetProps';

/**
 * Calculate number of nights between two dates
 */
const calculateNights = (checkIn: string, checkOut: string): number => {
	if (!checkIn || !checkOut) return 0;
	const start = new Date(checkIn);
	const end = new Date(checkOut);
	const diffTime = end.getTime() - start.getTime();
	return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
};

/**
 * BookingWidget organism for homestay booking functionality
 *
 * Displays price, date selection, guest count, and booking summary
 *
 * @param props - Component props
 * @returns BookingWidget component
 */
export const BookingWidget = ({
	pricePerNight,
	minNights = 1,
	maxGuests = 6,
	serviceFeePercent = 10,
	isAvailable = true,
	onBook,
	className = ''
}: BookingWidgetProps) => {
	// Form state
	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('');
	const [guests, setGuests] = useState({ adults: 1, children: 0 });
	const [showGuestSelector, setShowGuestSelector] = useState(false);

	// Calculate totals
	const nights = useMemo(() => calculateNights(checkIn, checkOut), [checkIn, checkOut]);
	const subtotal = nights * pricePerNight;
	const serviceFee = Math.round(subtotal * (serviceFeePercent / 100));
	const totalPrice = subtotal + serviceFee;
	const totalGuests = guests.adults + guests.children;

	// Get minimum date (today)
	const today = new Date().toISOString().split('T')[0];

	// Handle booking submission
	const handleBook = () => {
		if (!checkIn || !checkOut || nights < minNights) return;

		const bookingData: BookingData = {
			checkIn,
			checkOut,
			guests: totalGuests,
			totalPrice,
			nights
		};

		onBook?.(bookingData);
	};

	// Validation
	const isValid = checkIn && checkOut && nights >= minNights && isAvailable;

	return (
		<section
			className={`card bg-base-100 shadow-lg border border-base-200 ${className}`.trim()}
			role="form"
			aria-label="Book this homestay"
		>
			<div className="card-body p-4 sm:p-6">
				{/* Price Header */}
				<div className="flex items-baseline gap-1 mb-4">
					<Price amount={pricePerNight} size="lg" className="font-bold" />
					<span className="text-base-content/60">/ night</span>
				</div>

				{/* Availability Badge */}
				{!isAvailable && (
					<div className="alert alert-warning mb-4" role="alert">
						<Icon name="warning" size="sm" ariaLabel="Warning" />
						<span>Not available for selected dates</span>
					</div>
				)}

				{/* Date Selection */}
				<fieldset className="mb-4">
					<legend className="sr-only">Select dates</legend>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-base-300 rounded-lg overflow-hidden">
						<div className="p-3 border-b sm:border-b-0 sm:border-r border-base-300">
							<label htmlFor="booking-checkin" className="text-xs font-semibold text-base-content/60 uppercase">
								Check-in
							</label>
							<input
								id="booking-checkin"
								type="date"
								value={checkIn}
								onChange={(e) => setCheckIn(e.target.value)}
								min={today}
								className="w-full bg-transparent border-0 p-0 mt-1 focus:outline-none"
								aria-label="Check-in date"
							/>
						</div>
						<div className="p-3">
							<label htmlFor="booking-checkout" className="text-xs font-semibold text-base-content/60 uppercase">
								Check-out
							</label>
							<input
								id="booking-checkout"
								type="date"
								value={checkOut}
								onChange={(e) => setCheckOut(e.target.value)}
								min={checkIn || today}
								className="w-full bg-transparent border-0 p-0 mt-1 focus:outline-none"
								aria-label="Check-out date"
							/>
						</div>
					</div>
				</fieldset>

				{/* Guest Selector */}
				<div className="relative mb-4">
					<button
						type="button"
						onClick={() => setShowGuestSelector(!showGuestSelector)}
						className="w-full p-3 border border-base-300 rounded-lg text-left flex items-center justify-between hover:border-primary transition-colors"
						aria-expanded={showGuestSelector}
						aria-haspopup="true"
						aria-label={`Select guests, currently ${totalGuests} ${totalGuests === 1 ? 'guest' : 'guests'}`}
					>
						<div>
							<div className="text-xs font-semibold text-base-content/60 uppercase">
								Guests
							</div>
							<div className="mt-1">
								{totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
							</div>
						</div>
						<Icon
							name={showGuestSelector ? 'expand_less' : 'expand_more'}
							size="md"
						/>
					</button>

					{/* Guest Dropdown */}
					{showGuestSelector && (
						<div className="absolute top-full left-0 right-0 mt-2 z-10 bg-base-100 border border-base-300 rounded-lg shadow-lg p-4">
							<GuestSelector
								value={guests}
								onChange={setGuests}
								maxAdults={maxGuests}
							/>
							<Button
								style="ghost"
								size="sm"
								className="w-full mt-3"
								onClick={() => setShowGuestSelector(false)}
							>
								Close
							</Button>
						</div>
					)}
				</div>

				{/* Book Button */}
				<Button
					color="primary"
					size="lg"
					className="w-full"
					disabled={!isValid}
					onClick={handleBook}
				>
					{nights > 0 ? 'Reserve' : 'Check availability'}
				</Button>

				{/* Price Breakdown */}
				{nights > 0 && (
					<div className="mt-4 space-y-2 text-sm">
						<p className="text-center text-base-content/60 mb-3">
							You won't be charged yet
						</p>

						<div className="flex justify-between">
							<span className="underline">
								<Price amount={pricePerNight} size="sm" /> x {nights} night{nights > 1 ? 's' : ''}
							</span>
							<Price amount={subtotal} size="sm" />
						</div>

						<div className="flex justify-between">
							<span className="underline">Service fee</span>
							<Price amount={serviceFee} size="sm" />
						</div>

						<div className="divider my-2"></div>

						<div className="flex justify-between font-semibold">
							<span>Total</span>
							<Price amount={totalPrice} size="md" />
						</div>
					</div>
				)}

				{/* Minimum Nights Notice */}
				{minNights > 1 && (
					<p className="text-xs text-base-content/60 text-center mt-3" id="min-nights-notice">
						Minimum stay: {minNights} nights
					</p>
				)}
			</div>
		</section>
	);
};
