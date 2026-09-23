import { Router } from 'express';
import mongoose from 'mongoose';
import { Listing, Review, Booking } from '../models/index.js';
import { auth } from '../middleware/auth.js';
import { listListings, getListing, reviews } from '../utils/listings.js';

const router = Router();

const types = [
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

const plural = {
  homestay: 'homestays',
  hotel: 'hotels',
  restaurant: 'restaurants',
  guide: 'guides',
  destination: 'destinations',
  heritage: 'heritage',
  adventure: 'adventures',
  shopping: 'shopping',
  transport: 'transports'
};

for (const type of types) {
  const p = plural[type];

  router.get('/' + p, (req, res) =>
    listListings(req, res, type)
  );

  router.get('/' + p + '/:id', getListing);

  router.get('/' + p + '/:id/reviews', reviews);
}

// Create review
router.post('/listings/:id/reviews', auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;

    // Validate listing ID
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid listing ID'
      });
    }

    // Validate rating
    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        message: 'Rating must be an integer between 1 and 5'
      });
    }

    // Find listing
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        message: 'Listing not found'
      });
    }

    // Check whether user already reviewed this listing
    const existingReview = await Review.findOne({
      userId: req.user._id,
      listingId: listing._id
    });

    if (existingReview) {
      return res.status(409).json({
        message: 'You have already reviewed this listing'
      });
    }

    // Check whether user has an eligible booking
    const eligibleBooking = await Booking.findOne({
      userId: req.user._id,
      listingId: listing._id,
      status: { $in: ['confirmed', 'completed'] }
    });

    if (!eligibleBooking) {
      return res.status(403).json({
        message: 'You must have a confirmed booking before reviewing this listing'
      });
    }

    // Create review
    const review = await Review.create({
      userId: req.user._id,
      listingId: listing._id,
      rating: numericRating,
      comment: typeof comment === 'string'
        ? comment.trim()
        : '',
      type: listing.type
    });

    // Recalculate listing rating
    const agg = await Review.aggregate([
      {
        $match: {
          listingId: listing._id
        }
      },
      {
        $group: {
          _id: null,
          avg: { $avg: '$rating' },
          count: { $sum: 1 }
        }
      }
    ]);

    listing.rating = Number(
      (agg[0]?.avg || 0).toFixed(1)
    );

    listing.reviewCount = agg[0]?.count || 0;

    await listing.save();

    res.status(201).json({
      data: review
    });

  } catch (err) {
    console.error('Review creation error:', err);

    res.status(500).json({
      message: 'Failed to create review'
    });
  }
});

export default router;