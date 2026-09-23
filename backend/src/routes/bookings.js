import { Router } from 'express';
import mongoose from 'mongoose';
import { Booking, Listing } from '../models/index.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.use(auth);

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
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

// Get one booking belonging to current user
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid booking ID' });
    }

    const booking = await Booking.findOne({
      _id: req.params.id,
      userId: req.user._id
    }).populate('listingId');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({ data: booking });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch booking' });
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
      amount,
      paymentMethod,
      notes
    } = req.body;

    // Validate listing ID
    if (!mongoose.isValidObjectId(listingId)) {
      return res.status(400).json({
        message: 'Invalid listing ID'
      });
    }

    // Required dates
    if (!startDate || !endDate) {
      return res.status(400).json({
        message: 'Start date and end date are required'
      });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Validate dates
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return res.status(400).json({
        message: 'Invalid booking dates'
      });
    }

    if (end <= start) {
      return res.status(400).json({
        message: 'End date must be after start date'
      });
    }

    // Validate guests
    const guestCount = Number(guests);

    if (!Number.isInteger(guestCount) || guestCount < 1) {
      return res.status(400).json({
        message: 'Guests must be at least 1'
      });
    }

    // Validate amount
    const bookingAmount = Number(amount);

    if (!Number.isFinite(bookingAmount) || bookingAmount < 0) {
      return res.status(400).json({
        message: 'Amount must be a valid non-negative number'
      });
    }

    // Find listing
    const listing = await Listing.findById(listingId);

    if (!listing) {
      return res.status(404).json({
        message: 'Listing not found'
      });
    }

    // Only these listing types can currently be booked
    const bookableTypes = [
      'hotel',
      'homestay',
      'guide',
      'adventure',
      'transport'
    ];

    if (!bookableTypes.includes(listing.type)) {
      return res.status(400).json({
        message: `${listing.type} listings cannot be booked`
      });
    }

    // Capacity check where capacity is defined
    if (
      listing.capacity?.guests &&
      guestCount > listing.capacity.guests
    ) {
      return res.status(400).json({
        message: `Maximum capacity is ${listing.capacity.guests} guests`
      });
    }

    const booking = await Booking.create({
      userId: req.user._id,
      listingId: listing._id,
      listingType: listing.type,
      startDate: start,
      endDate: end,
      guests: guestCount,
      amount: bookingAmount,
      paymentMethod,
      notes
    });

    res.status(201).json({ data: booking });

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

    res.json({ data: booking });

  } catch (err) {
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
    res.status(500).json({
      message: 'Payment failed'
    });
  }
});

export default router;