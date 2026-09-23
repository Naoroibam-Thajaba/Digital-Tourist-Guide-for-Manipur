import { Router } from 'express';
import mongoose from 'mongoose';
import { Booking, Listing } from '../models/index.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.use(auth);

const bookableTypes = [
  'hotel',
  'homestay',
  'guide',
  'adventure',
  'transport'
];

// Calculate the expected booking amount on the server
function calculateAmount(listing, start, end) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const days = Math.ceil(
    (end.getTime() - start.getTime()) / millisecondsPerDay
  );

  if (listing.type === 'hotel' || listing.type === 'homestay') {
    return Number(listing.price || 0) * days;
  }

  if (listing.type === 'guide') {
    return Number(listing.pricePerDay || 0) * days;
  }

  if (listing.type === 'adventure') {
    return Number(listing.price || 0);
  }

  if (listing.type === 'transport') {
    return Number(listing.price || 0);
  }

  return 0;
}

// Get current user's bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.user._id
    })
      .populate('listingId', 'title type location')
      .sort({ createdAt: -1 });

    res.json({ data: bookings });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to fetch bookings'
    });
  }
});

// Get one booking
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid booking ID'
      });
    }

    const booking = await Booking.findOne({
      _id: req.params.id,
      userId: req.user._id
    }).populate('listingId');

    if (!booking) {
      return res.status(404).json({
        message: 'Booking not found'
      });
    }

    res.json({ data: booking });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to fetch booking'
    });
  }
});

// Create booking
router.post('/', async (req, res) => {
  try {
    const {
      listingId,
      startDate,
      endDate,
      guests,
      paymentMethod,
      notes
    } = req.body;

    // Listing ID
    if (!mongoose.isValidObjectId(listingId)) {
      return res.status(400).json({
        message: 'Invalid listing ID'
      });
    }

    // Dates required
    if (!startDate || !endDate) {
      return res.status(400).json({
        message: 'Start date and end date are required'
      });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Valid dates
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return res.status(400).json({
        message: 'Invalid booking dates'
      });
    }

    // Date range
    if (end <= start) {
      return res.status(400).json({
        message: 'End date must be after start date'
      });
    }

    // Reject bookings in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (start < today) {
      return res.status(400).json({
        message: 'Start date cannot be in the past'
      });
    }

    // Guests
    const guestCount = Number(guests);

    if (!Number.isInteger(guestCount) || guestCount < 1) {
      return res.status(400).json({
        message: 'Guests must be at least 1'
      });
    }

    // Find listing
    const listing = await Listing.findById(listingId);

    if (!listing) {
      return res.status(404).json({
        message: 'Listing not found'
      });
    }

    // Bookable listing types
    if (!bookableTypes.includes(listing.type)) {
      return res.status(400).json({
        message: `${listing.type} listings cannot be booked`
      });
    }

    // Capacity
    if (
      listing.capacity?.guests &&
      guestCount > listing.capacity.guests
    ) {
      return res.status(400).json({
        message: `Maximum capacity is ${listing.capacity.guests} guests`
      });
    }

    // Check overlapping bookings
    const overlappingBooking = await Booking.findOne({
      listingId: listing._id,
      status: { $in: ['pending', 'confirmed'] },
      startDate: { $lt: end },
      endDate: { $gt: start }
    });

    if (overlappingBooking) {
      return res.status(409).json({
        message: 'This listing is already booked for the selected dates'
      });
    }

    // Calculate price on the server
    const calculatedAmount = calculateAmount(
      listing,
      start,
      end
    );

    if (!Number.isFinite(calculatedAmount) || calculatedAmount < 0) {
      return res.status(400).json({
        message: 'Unable to calculate booking amount'
      });
    }

    const booking = await Booking.create({
      userId: req.user._id,
      listingId: listing._id,
      listingType: listing.type,
      startDate: start,
      endDate: end,
      guests: guestCount,
      amount: calculatedAmount,
      paymentMethod,
      notes
    });

    res.status(201).json({
      data: booking
    });

  } catch (err) {
    console.error('Booking creation error:', err);

    res.status(500).json({
      message: 'Failed to create booking'
    });
  }
});

// Cancel booking
router.put('/:id/cancel', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid booking ID'
      });
    }

    const booking = await Booking.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!booking) {
      return res.status(404).json({
        message: 'Booking not found'
      });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({
        message: 'Booking is already cancelled'
      });
    }

    if (booking.status === 'completed') {
      return res.status(400).json({
        message: 'Completed bookings cannot be cancelled'
      });
    }

    booking.status = 'cancelled';

    if (booking.paymentStatus === 'paid') {
      booking.paymentStatus = 'refunded';
    }

    await booking.save();

    res.json({
      data: booking
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: 'Failed to cancel booking'
    });
  }
});

// Demo payment
router.post('/:id/pay', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid booking ID'
      });
    }

    const booking = await Booking.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!booking) {
      return res.status(404).json({
        message: 'Booking not found'
      });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({
        message: 'Cancelled bookings cannot be paid'
      });
    }

    if (booking.status === 'completed') {
      return res.status(400).json({
        message: 'Completed bookings cannot be paid'
      });
    }

    if (booking.paymentStatus === 'paid') {
      return res.status(400).json({
        message: 'Booking is already paid'
      });
    }

    booking.paymentStatus = 'paid';
    booking.status = 'confirmed';
    booking.paymentMethod = req.body.paymentMethod || 'demo-upi';

    await booking.save();

    res.json({
      data: booking,
      message: 'Demo payment recorded successfully'
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: 'Payment failed'
    });
  }
});

export default router; 