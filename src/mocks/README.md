# Mock Data for Postman

This directory contains mock data files that can be imported into Postman to create a mock server.

## Files

- `homestays.json` - 8 homestay listings
- `guides.json` - 5 guide profiles
- `products.json` - 10 handicraft products

## Setting Up Postman Mock Server

### Step 1: Create a New Collection

1. Open Postman
2. Click "New" → "Collection"
3. Name it "JharkhandYatra API"

### Step 2: Add Endpoints

Add the following endpoints to your collection:

#### Homestays
- `GET /homestays` - Returns all homestays
- `GET /homestays/:id` - Returns single homestay

#### Guides
- `GET /guides` - Returns all guides
- `GET /guides/:id` - Returns single guide

#### Products
- `GET /products` - Returns all products
- `GET /products/:id` - Returns single product

#### Search
- `GET /search` - Unified search

### Step 3: Add Mock Responses

For each endpoint, add an example response using the data from these JSON files.

1. Select the endpoint
2. Click "Add Example"
3. Copy the relevant JSON data as the response body
4. Set status code to 200

### Step 4: Create Mock Server

1. Right-click on the collection
2. Click "Mock Collection"
3. Name your mock server
4. Copy the mock server URL

### Step 5: Configure Frontend

Update your `.env` file:

```env
VITE_API_BASE_URL=https://your-mock-server-id.mock.pstmn.io
VITE_POSTMAN_API_KEY=your-api-key-if-private
```

## Data Structure

### Homestay

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "location": "string",
  "district": "string",
  "price": "number",
  "rating": "number",
  "reviewCount": "number",
  "images": ["string"],
  "amenities": ["string"],
  "hostId": "string",
  "hostName": "string",
  "hostAvatar": "string?",
  "capacity": {
    "guests": "number",
    "bedrooms": "number",
    "beds": "number",
    "bathrooms": "number"
  },
  "propertyType": "entire | private | shared",
  "minStay": "number",
  "maxStay": "number",
  "houseRules": ["string"],
  "coordinates": { "lat": "number", "lng": "number" }
}
```

### Guide

```json
{
  "id": "string",
  "name": "string",
  "bio": "string",
  "location": "string",
  "district": "string",
  "avatar": "string?",
  "rating": "number",
  "reviewCount": "number",
  "languages": ["string"],
  "specializations": ["string"],
  "experience": "number",
  "pricePerDay": "number",
  "tours": [{
    "id": "string",
    "title": "string",
    "description": "string",
    "duration": "string",
    "price": "number",
    "includes": ["string"]
  }],
  "verified": "boolean",
  "responseRate": "number",
  "responseTime": "string"
}
```

### Product

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": "number",
  "originalPrice": "number?",
  "category": "string",
  "images": ["string"],
  "artisan": {
    "id": "string",
    "name": "string",
    "location": "string",
    "avatar": "string?"
  },
  "rating": "number",
  "reviewCount": "number",
  "inStock": "boolean",
  "craftStory": "string?",
  "materials": ["string"],
  "dimensions": "string?"
}
```

## API Response Format

All endpoints return data in this format:

```json
{
  "data": [...],
  "meta": {
    "total": "number",
    "page": "number",
    "limit": "number",
    "totalPages": "number"
  }
}
```

For single item endpoints:

```json
{
  "data": { ... }
}
```
