# One Manipur Tourism — Backend

Express + MongoDB backend for the One Manipur Tourism super-platform.

## Modules
- Authentication: JWT + bcrypt
- Destinations, hotels, homestays
- Restaurants
- Local guides
- Events & festivals
- Shopping / local products
- Heritage
- Adventure activities
- Transportation
- Emergency services
- Maps / geolocation data
- Bookings + demo digital-payment state
- Tourist feedback / reviews
- Unified search
- Admin/provider listing management

## Run
```bash
cp .env.example .env
npm install
npm run seed
npm run dev
```
MongoDB must be running locally or set `MONGO_URI` to MongoDB Atlas.
