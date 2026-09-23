import { Router } from 'express';
import mongoose from 'mongoose';
import { Listing, Event, Emergency, Transport } from '../models/index.js';
import { auth, roles } from '../middleware/auth.js';

const router = Router();

router.use(auth, roles('admin', 'provider'));

// Create listing
router.post('/listings', async (req, res) => {
  try {
    const {
      type,
      title,
      price,
      pricePerDay,
      rating,
      capacity
    } = req.body;

    const validTypes = [
      'homestay',
      'hotel',
      'restaurant',
      'guide',
      'destination',
      'heritage',
      'adventure',
      'shopping',
      'transport'
    ];

    if (!validTypes.includes(type)) {
      return res.status(400).json({
        message: 'Invalid listing type'
      });
    }

    if (typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({
        message: 'Title is required'
      });
    }

    if (price !== undefined &&
        (!Number.isFinite(Number(price)) || Number(price) < 0)) {
      return res.status(400).json({
        message: 'Price must be a valid non-negative number'
      });
    }

    if (pricePerDay !== undefined &&
        (!Number.isFinite(Number(pricePerDay)) || Number(pricePerDay) < 0)) {
      return res.status(400).json({
        message: 'Price per day must be a valid non-negative number'
      });
    }

    if (rating !== undefined &&
        (!Number.isFinite(Number(rating)) ||
         Number(rating) < 0 ||
         Number(rating) > 5)) {
      return res.status(400).json({
        message: 'Rating must be between 0 and 5'
      });
    }

    if (capacity?.guests !== undefined &&
        (!Number.isInteger(Number(capacity.guests)) ||
         Number(capacity.guests) < 1)) {
      return res.status(400).json({
        message: 'Capacity must be at least 1 guest'
      });
    }

    const listing = await Listing.create({
      ...req.body,
      title: title.trim(),
      hostId: req.user._id,
      hostName: req.user.name
    });

    res.status(201).json({ data: listing });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update listing
router.put('/listings/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid listing ID'
      });
    }

    const filter =
      req.user.role === 'admin'
        ? { _id: req.params.id }
        : { _id: req.params.id, hostId: req.user._id };

    const updates = { ...req.body };
    delete updates.hostId;
    delete updates.hostName;

    const listing = await Listing.findOneAndUpdate(
      filter,
      updates,
      { new: true, runValidators: true }
    );

    if (!listing) {
      return res.status(403).json({
        message: 'You do not have permission to modify this listing'
      });
    }

    res.json({ data: listing });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete listing
router.delete('/listings/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid listing ID'
      });
    }

    const filter =
      req.user.role === 'admin'
        ? { _id: req.params.id }
        : { _id: req.params.id, hostId: req.user._id };

    const listing = await Listing.findOneAndDelete(filter);

    if (!listing) {
      return res.status(403).json({
        message: 'You do not have permission to delete this listing'
      });
    }

    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Event management — admin only
router.post('/events', roles('admin'), async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json({ data: event });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Emergency management — admin only
router.post('/emergency', roles('admin'), async (req, res) => {
  try {
    const emergency = await Emergency.create(req.body);
    res.status(201).json({ data: emergency });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Transport management — admin only
router.post('/transport', roles('admin'), async (req, res) => {
  try {
    const transport = await Transport.create(req.body);
    res.status(201).json({ data: transport });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;