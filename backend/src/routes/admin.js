import { Router } from 'express';
import { Listing, Event, Emergency, Transport } from '../models/index.js';
import { auth, roles } from '../middleware/auth.js';

const router = Router();

router.use(auth, roles('admin', 'provider'));

// Create listing
router.post('/listings', async (req, res) => {
  try {
    const listing = await Listing.create({
      ...req.body,
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
    const filter =
      req.user.role === 'admin'
        ? { _id: req.params.id }
        : { _id: req.params.id, hostId: req.user._id };

    const listing = await Listing.findOneAndUpdate(
      filter,
      req.body,
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