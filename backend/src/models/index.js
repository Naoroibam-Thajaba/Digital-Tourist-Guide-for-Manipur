import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true }, email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }, role: { type: String, enum: ['tourist','provider','admin'], default: 'tourist' },
  phone: String, avatar: String
}, { timestamps: true });

const listingSchema = new Schema({
  type: { type: String, enum: ['homestay','hotel','restaurant','guide','destination','heritage','adventure','shopping','transport'], required: true },
  title: { type: String, required: true }, description: String, district: String, location: String,
  address: String, price: Number, priceUnit: String, rating: { type: Number, default: 0 }, reviewCount: { type: Number, default: 0 },
  images: [String], amenities: [String], categories: [String], tags: [String], featured: Boolean,
  coordinates: { lat: Number, lng: Number },
  hostId: { type: Schema.Types.ObjectId, ref: 'User' }, hostName: String,
  capacity: { guests: Number, bedrooms: Number, beds: Number, bathrooms: Number }, propertyType: String,
  minStay: Number, maxStay: Number, houseRules: [String], verified: Boolean,
  languages: [String], specializations: [String], experience: Number, pricePerDay: Number,
  responseRate: Number, responseTime: String, tours: [{ id: String, title: String, description: String, duration: String, price: Number, includes: [String] }],
  artisan: { id: String, name: String, location: String, avatar: String }, inStock: Boolean, originalPrice: Number, craftStory: String, materials: [String], dimensions: String,
  openingHours: String, phone: String, emergencyType: String
}, { timestamps: true });

const bookingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, listingId: { type: Schema.Types.ObjectId, ref: 'Listing', required: true },
  listingType: String, startDate: Date, endDate: Date, guests: Number, amount: Number,
  status: { type: String, enum: ['pending','confirmed','cancelled','completed'], default: 'pending' },
  paymentStatus: { type: String, enum: ['unpaid','paid','refunded'], default: 'unpaid' }, paymentMethod: String, notes: String
}, { timestamps: true });

const reviewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  listingId: { type: Schema.Types.ObjectId, ref: 'Listing', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String,
  type: String
}, { timestamps: true });

reviewSchema.index(
  { userId: 1, listingId: 1 },
  { unique: true }
);

const eventSchema = new Schema({ title: String, description: String, district: String, venue: String, startDate: Date, endDate: Date, image: String, category: String, ticketPrice: Number, featured: Boolean }, { timestamps: true });
const emergencySchema = new Schema({ name: String, type: String, phone: String, address: String, district: String, coordinates: { lat: Number, lng: Number }, available24x7: Boolean });
const transportSchema = new Schema({ name: String, type: String, from: String, to: String, schedule: String, fare: Number, contact: String, district: String, coordinates: { lat: Number, lng: Number } });

export const User = mongoose.model('User', userSchema);
export const Listing = mongoose.model('Listing', listingSchema);
export const Booking = mongoose.model('Booking', bookingSchema);
export const Review = mongoose.model('Review', reviewSchema);
export const Event = mongoose.model('Event', eventSchema);
export const Emergency = mongoose.model('Emergency', emergencySchema);
export const Transport = mongoose.model('Transport', transportSchema);
