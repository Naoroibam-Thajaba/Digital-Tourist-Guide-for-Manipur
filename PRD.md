# JharkhandYatra - Product Requirements Document

---

## Project Information

### Project Title

**JharkhandYatra** - Smart Digital Platform for Eco & Cultural Tourism in Jharkhand

---

### Project Description

**Short Description:**
JharkhandYatra is a digital tourism platform that connects travelers with authentic local experiences in Jharkhand—from tribal homestays and verified local guides to handcrafted artisan products—making eco and cultural tourism accessible, organized, and community-empowering.

**Long Description:**

Jharkhand is blessed with extraordinary natural beauty, rich tribal heritage, historical landmarks, and eco-tourism destinations like Netarhat, Patratu, Betla National Park, Hundru Falls, and Deoghar. However, despite this vast potential, the state's tourism industry remains underdeveloped due to limited digital infrastructure, poor promotional outreach, and unorganized travel services.

Tourists currently struggle to find reliable information about authentic local experiences, safe homestays, trustworthy guides, and genuine tribal handicrafts. Meanwhile, local communities—artisans, tribal families offering homestays, and knowledgeable local guides—remain largely excluded from the tourism economy due to lack of digital presence.

JharkhandYatra addresses this gap by creating a centralized digital marketplace that serves as a bridge between tourists seeking authentic experiences and local communities offering genuine services. The platform enables tourists to discover, compare, and book verified homestays and guides while purchasing authentic tribal handicrafts directly from artisans.

The platform differentiates itself through community-first design, ensuring that local service providers can easily list their offerings, receive bookings, and build their reputation through reviews. By digitizing these traditionally informal services, JharkhandYatra aims to increase tourism revenue flowing directly to local communities while giving tourists the confidence to explore off-the-beaten-path destinations.

Expected impact includes increased tourist footfall to lesser-known destinations, higher income for local communities, preservation of tribal crafts and cultural practices, and positioning Jharkhand as a premier eco-cultural tourism destination in India.

---

### Learning Objectives

**Primary Learning Outcomes:**

- Build responsive, production-ready React applications with TypeScript and modern hooks
- Develop RESTful APIs using Node.js, Express.js, and MongoDB with proper authentication
- Implement full-stack features including search, filtering, booking, and payment workflows
- Apply professional Git workflows with branching, code reviews, and collaborative development
- Deploy full-stack applications to production cloud platforms

**Secondary Learning Outcomes:**

- Design and implement database schemas for complex relational data (users, listings, bookings)
- Create reusable component libraries following atomic design principles
- Implement responsive, accessible UI following WCAG 2.1 guidelines

---

### Technology Stack

**Frontend:**

- **Build Tool:** Vite 6.x
- **Framework:** React 19 with TypeScript 5.7+
- **Routing:** React Router v7
- **State Management:** React Context API + useReducer (with Zustand for complex state if needed)
- **Styling:** TailwindCSS v4 + DaisyUI v5
- **HTTP Client:** Axios
- **Forms:** React Hook Form with Zod validation
- **Icons:** Google Material Symbols (Outlined)
- **Additional Libraries:** date-fns (date handling), react-hot-toast (notifications)

**Backend:**

- **Runtime:** Node.js v24 LTS
- **Language:** TypeScript 5.7+
- **Framework:** Express.js v5
- **Database:** MongoDB 8.0+ with Mongoose v8
- **Authentication:** JWT (jsonwebtoken) + bcrypt.js
- **File Uploads:** Multer + Cloudinary (for image storage)
- **Validation:** Joi or Zod

**DevOps & Deployment:**

- **Version Control:** Git + GitHub
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Railway or Render
- **Database Hosting:** MongoDB Atlas
- **Containerization:** Docker + Docker Compose (development)

---

### MVP Scope

**Phase 1: Core Platform (Frontend)**
**Priority: P0 (Must Have)** ✅ COMPLETE

1. **Component Library**
    - Atomic design system with atoms, molecules, organisms
    - Reusable UI components with TypeScript and DaisyUI
    - WCAG 2.1 AA accessibility compliance
    - Responsive design with Tailwind breakpoints
    - Storybook documentation

2. **Listing Discovery & Search**
    - Browse homestays with filters (location, price, amenities, rating)
    - Browse local guides with filters (languages, specialization, availability)
    - Browse artisan marketplace with categories (handicrafts, textiles, art)
    - Search with autocomplete

3. **Listing Details & Reviews**
    - Detailed homestay pages (photos, amenities, house rules, location map)
    - Guide profiles (experience, languages, tour offerings)
    - Product pages (descriptions, photos, artisan story)
    - Review and rating display

4. **Booking & Cart UI**
    - Homestay booking widget with date selection and guest count
    - Shopping cart with quantity controls
    - Checkout flow UI

**Phase 2: Backend & API Integration**
**Priority: P1 (Should Have)** 🚧 PLANNED

5. **User Authentication & Profiles**
    - Tourist registration and login (email/password)
    - Service provider registration (homestays, guides, artisans)
    - Profile management with avatar upload
    - JWT-based session management

6. **Booking System**
    - Booking confirmation and status tracking
    - Cancellation workflow
    - Order tracking and history

**Phase 3: Enhanced Features**
**Priority: P2 (Nice to Have)**

7. **Trip Planner**
    - Save listings to wishlist
    - Create trip itineraries by adding bookings
    - Share itinerary via link

8. **Service Provider Dashboard**
    - View incoming bookings/orders
    - Update listing availability
    - Respond to reviews
    - Basic analytics (views, bookings)

---

### Target Users / Personas

**Primary Persona: Aarav - The Urban Explorer**

- **Demographics:**
    - Age: 25-35
    - Location: Metro cities (Delhi, Mumbai, Bangalore, Kolkata)
    - Occupation: IT Professional / Corporate Employee
    - Tech Savviness: High

- **Goals & Motivations:**
    - Escape urban routine with authentic, off-beat travel experiences
    - Connect with local cultures and communities
    - Support sustainable and responsible tourism
    - Create Instagram-worthy memories at unique locations

- **Pain Points:**
    - Difficulty finding reliable information about lesser-known destinations
    - Trust issues with unknown homestays and guides
    - Fear of being overcharged as an "outsider"
    - Language barriers in tribal regions

- **User Needs:**
    - Verified listings with genuine reviews
    - Clear pricing with no hidden costs
    - Easy communication with hosts/guides
    - Multilingual support (Hindi/English)

**Secondary Persona: Priya - The Cultural Enthusiast**

- **Demographics:**
    - Age: 35-50
    - Location: Tier 2 cities or NRI
    - Occupation: Teacher / Researcher / Retired Professional
    - Tech Savviness: Medium

- **Goals & Motivations:**
    - Deep dive into tribal art, culture, and traditions
    - Purchase authentic handicrafts directly from artisans
    - Educational travel experiences
    - Support tribal communities economically

- **Pain Points:**
    - Cannot distinguish authentic crafts from mass-produced items
    - Wants to know the story behind products
    - Needs more structured cultural experiences
    - Prefers guided tours over solo exploration

- **User Needs:**
    - Artisan profiles with craft stories
    - Curated cultural experience packages
    - Expert local guides with cultural knowledge
    - Certificate of authenticity for handicrafts

**Tertiary Persona: Ramesh - The Homestay Owner**

- **Demographics:**
    - Age: 40-60
    - Location: Rural Jharkhand (Netarhat, Betla, Patratu region)
    - Occupation: Farmer / Retired Government Employee
    - Tech Savviness: Low-Medium

- **Goals & Motivations:**
    - Earn supplementary income from spare rooms
    - Share local culture and hospitality
    - Connect with travelers from different backgrounds
    - Preserve and showcase traditional lifestyle

- **Pain Points:**
    - No digital presence or marketing capability
    - Language barrier with non-Hindi speakers
    - Difficulty managing bookings without technology
    - Lack of trust from potential guests

- **User Needs:**
    - Simple listing creation (possibly with assisted onboarding)
    - Hindi interface
    - Easy booking management
    - Verification badge to build trust

---

## Branding, Theming & Visual Identity

### Brand Identity

**Brand Name:** JharkhandYatra (झारखंड यात्रा)

**Tagline:** "Discover the Soul of Jharkhand"

**Brand Personality:**
- **Tone:** Warm, Welcoming, Authentic, Community-focused
- **Voice:** Conversational, Culturally respectful, Encouraging exploration
- **Mood:** Vibrant, Earthy, Celebratory of tribal heritage

**Brand Values:**
- **Authenticity** - Genuine experiences, real communities, verified services
- **Community First** - Empowering local economies and preserving traditions
- **Sustainability** - Promoting responsible, eco-conscious tourism
- **Accessibility** - Making hidden gems discoverable for all travelers

**Brand Story:**
JharkhandYatra was born from a simple belief: that Jharkhand's incredible natural beauty and rich tribal heritage deserve to be experienced by travelers worldwide, while the communities who call it home deserve to benefit directly from sharing their culture. We're not just a booking platform—we're a bridge connecting curious travelers with welcoming hosts, skilled artisans, and knowledgeable guides who make Jharkhand unforgettable.

---

### Logo & Visual Assets

**Logo Concept:**
[AI Suggestion: A stylized 'J' incorporating traditional Sohrai art motifs (the tribal wall painting tradition), combined with a path/journey element. The logo should work in both detailed and simplified forms.]

**Logo Specifications:**
- **Primary Logo:** Wordmark "JharkhandYatra" with decorative motif
- **Logo Variations:**
    - Full color (primary)
    - Single color (terracotta)
    - Reversed (white on dark)
    - Icon-only (for favicons, app icons)
- **Safe Space:** Minimum 16px clear space around logo
- **Minimum Size:** 120px width for wordmark, 32px for icon
- **File Formats:** SVG (primary), PNG (fallback)

**Imagery Style:**
- **Photography:** Authentic, documentary-style images of real locations and people. Avoid overly staged tourism shots. Emphasize human connection, natural landscapes, and cultural moments.
- **Illustrations:** Hand-drawn style inspired by Sohrai and Khovar art traditions—geometric patterns, nature motifs (elephants, peacocks, flowers, sun), earthy textures
- **Icons:** Google Material Symbols - Outlined variant for consistency
- **Patterns/Textures:** Subtle tribal pattern borders and dividers. Use sparingly for section breaks and card decorations.

---

### Color System (OKLCH)

**Design Philosophy:**
The color palette draws inspiration from Jharkhand's tribal art traditions—particularly Sohrai paintings which use natural earth pigments. The vibrant reds and oranges represent the warmth of tribal hospitality, while greens connect to the state's rich forests and eco-tourism focus.

#### Primary Brand Color - Terracotta Red
```css
--color-primary: oklch(55% 0.18 25);
--color-primary-content: oklch(98% 0.01 25);
```

- **Hex Approximation:** #C75239
- **Usage:** Primary CTAs, navigation highlights, brand moments, key actions
- **Meaning:** Represents the red earth of Jharkhand and the terracotta pottery tradition. Conveys warmth, welcome, and cultural richness.
- **Accessibility:** Contrast ratio with base-100: 7.2:1 ✓

**Color Variations:**
- Lighter: `oklch(70% 0.15 25)` - Hover states, subtle backgrounds
- Darker: `oklch(42% 0.20 25)` - Active states, emphasis

---

#### Secondary Brand Color - Amber Gold
```css
--color-secondary: oklch(75% 0.16 70);
--color-secondary-content: oklch(25% 0.05 70);
```

- **Hex Approximation:** #D4A24A
- **Usage:** Secondary CTAs, highlights, pricing, special badges, ratings
- **Meaning:** Represents the golden treasures of tribal craftsmanship—brass work, wheat fields, and the warmth of sunrise over Jharkhand's hills.
- **Accessibility:** Contrast ratio with base-100: 4.6:1 ✓

---

#### Accent Color - Forest Green
```css
--color-accent: oklch(50% 0.14 145);
--color-accent-content: oklch(98% 0.01 145);
```

- **Hex Approximation:** #2D7A4E
- **Usage:** Eco-tourism badges, nature-related content, success indicators, availability status
- **Meaning:** Represents Jharkhand's dense forests, eco-tourism focus, and sustainable tourism practices.
- **Accessibility:** Contrast ratio with base-100: 6.8:1 ✓

---

#### Neutral Colors
```css
--color-neutral: oklch(30% 0.02 50);
--color-neutral-content: oklch(95% 0.01 50);
```

- **Hex Approximation:** #3D3633
- **Usage:** Body text, headers, borders, subtle UI elements
- **Meaning:** Warm charcoal inspired by traditional cooking hearths

---

#### Base Colors (Backgrounds & Surfaces)

**Light Theme:**
```css
--color-base-100: oklch(98% 0.008 80);  /* Warm cream - main background */
--color-base-200: oklch(95% 0.015 75);  /* Soft beige - cards, panels */
--color-base-300: oklch(90% 0.02 70);   /* Muted tan - dividers, borders */
--color-base-content: oklch(25% 0.02 50); /* Warm dark - primary text */
```

- **Hex Approximations:** #FBF9F6, #F3EDE5, #E6DDD1, #3D3633
- **Meaning:** Inspired by handmade paper and natural fabric textures used in tribal art

---

#### Semantic Colors

**Info:**
```css
--color-info: oklch(62% 0.15 245);
--color-info-content: oklch(98% 0 0);
```
- **Hex Approximation:** #4A90B8
- **Usage:** Informational messages, help tooltips, guide availability

**Success:**
```css
--color-success: oklch(65% 0.18 145);
--color-success-content: oklch(20% 0.05 145);
```
- **Hex Approximation:** #3D9A62
- **Usage:** Booking confirmed, payment success, verified badge

**Warning:**
```css
--color-warning: oklch(80% 0.15 85);
--color-warning-content: oklch(25% 0.05 85);
```
- **Hex Approximation:** #E5B84A
- **Usage:** Limited availability, price alerts, incomplete profiles

**Error:**
```css
--color-error: oklch(58% 0.20 25);
--color-error-content: oklch(98% 0 0);
```
- **Hex Approximation:** #C44536
- **Usage:** Validation errors, booking failures, cancellations

---

### Color Usage Guidelines

**Do's:**
- ✅ Use primary (terracotta) for main CTAs and navigation active states
- ✅ Use secondary (amber) for pricing, ratings, and promotional badges
- ✅ Use accent (green) for eco-tourism tags and availability indicators
- ✅ Use semantic colors consistently across all feedback messages
- ✅ Pair vibrant colors with neutral backgrounds for breathing room
- ✅ Use tribal patterns sparingly as decorative accents, not backgrounds

**Don'ts:**
- ❌ Don't use primary and secondary colors adjacent without neutral separation
- ❌ Don't use vibrant colors for large background areas (overwhelming)
- ❌ Don't mix more than 2 brand colors in a single component
- ❌ Don't use patterns behind text content
- ❌ Don't override semantic color meanings (green ≠ error)

---

### Color Accessibility Matrix

| Text Color | Background | Contrast Ratio | WCAG Level | Use Case |
|------------|------------|----------------|------------|----------|
| base-content | base-100 | 12.5:1 | AAA | Body text |
| base-content | base-200 | 10.2:1 | AAA | Card text |
| primary-content | primary | 8.1:1 | AAA | Primary buttons |
| secondary-content | secondary | 7.4:1 | AAA | Secondary buttons |
| accent-content | accent | 7.8:1 | AAA | Eco badges |
| error-content | error | 7.2:1 | AAA | Error messages |

---

### Dark Mode Considerations

**Dark Theme Colors:**
```css
@plugin "daisyui/theme" {
  name: "jharkhandyatra-dark";
  prefersdark: true;
  color-scheme: "dark";
  
  --color-base-100: oklch(18% 0.02 50);
  --color-base-200: oklch(22% 0.025 50);
  --color-base-300: oklch(28% 0.03 50);
  --color-base-content: oklch(92% 0.015 80);
  
  --color-primary: oklch(62% 0.18 25);
  --color-secondary: oklch(78% 0.14 70);
  --color-accent: oklch(58% 0.14 145);
}
```

**Dark Mode Strategy:** Auto (system preference) with manual toggle option

[AI Suggestion: For MVP, implement light theme only. Dark mode can be added as a post-MVP enhancement.]

---

## UI/UX Design System

### Design Principles

- **Consistency:** Reuse components and patterns throughout. Same action = same appearance.
- **Accessibility:** WCAG 2.1 AA compliance minimum. Keyboard navigable, screen reader friendly.
- **Responsiveness:** Mobile-first approach. Touch-friendly on mobile, information-dense on desktop.
- **Modularity:** Atomic design methodology. Build complex UIs from simple, tested components.
- **Cultural Sensitivity:** Respectful representation of tribal art and culture. Avoid appropriation.

---

### DaisyUI 5 Theme Configuration

**Complete Theme Definition:**

```css
/* src/index.css */
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "jharkhandyatra";
  default: true;
  prefersdark: false;
  color-scheme: "light";
  
  /* Base Colors */
  --color-base-100: oklch(98% 0.008 80);
  --color-base-200: oklch(95% 0.015 75);
  --color-base-300: oklch(90% 0.02 70);
  --color-base-content: oklch(25% 0.02 50);
  
  /* Primary - Terracotta Red */
  --color-primary: oklch(55% 0.18 25);
  --color-primary-content: oklch(98% 0.01 25);
  
  /* Secondary - Amber Gold */
  --color-secondary: oklch(75% 0.16 70);
  --color-secondary-content: oklch(25% 0.05 70);
  
  /* Accent - Forest Green */
  --color-accent: oklch(50% 0.14 145);
  --color-accent-content: oklch(98% 0.01 145);
  
  /* Neutral */
  --color-neutral: oklch(30% 0.02 50);
  --color-neutral-content: oklch(95% 0.01 50);
  
  /* Semantic Colors */
  --color-info: oklch(62% 0.15 245);
  --color-info-content: oklch(98% 0 0);
  --color-success: oklch(65% 0.18 145);
  --color-success-content: oklch(20% 0.05 145);
  --color-warning: oklch(80% 0.15 85);
  --color-warning-content: oklch(25% 0.05 85);
  --color-error: oklch(58% 0.20 25);
  --color-error-content: oklch(98% 0 0);
  
  /* Border Radius - Slightly rounded for warmth */
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.75rem;
  
  /* Sizing */
  --size-selector: 1.25rem;
  --size-field: 2.75rem;
  
  /* Effects */
  --border: 1px;
  --depth: 2;
  --noise: 0;
}
```

---

### Typography

**Google Fonts Integration:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Font System:**

**Primary Font (Headings): Outfit**
- **Weights:** 400, 500, 600, 700
- **Usage:** Headings (H1-H6), navigation, buttons, card titles
- **Characteristics:** Modern geometric sans-serif with friendly, approachable feel

**Secondary Font (Body): Source Sans 3**
- **Weights:** 300, 400, 500, 600
- **Usage:** Body text, descriptions, form labels, metadata
- **Characteristics:** Highly readable, professional, optimized for screens

**Tailwind Configuration:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      'heading': ['Outfit', 'sans-serif'],
      'body': ['Source Sans 3', 'sans-serif'],
    },
  },
}
```

**Typography Scale:**

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Font |
|---------|---------------|---------------|--------|-------------|------|
| H1 | 48px (3rem) | 32px (2rem) | 700 | 1.2 | Outfit |
| H2 | 36px (2.25rem) | 28px (1.75rem) | 600 | 1.25 | Outfit |
| H3 | 28px (1.75rem) | 24px (1.5rem) | 600 | 1.3 | Outfit |
| H4 | 24px (1.5rem) | 20px (1.25rem) | 600 | 1.35 | Outfit |
| H5 | 20px (1.25rem) | 18px (1.125rem) | 500 | 1.4 | Outfit |
| H6 | 18px (1.125rem) | 16px (1rem) | 500 | 1.4 | Outfit |
| Body Large | 18px | 16px | 400 | 1.6 | Source Sans 3 |
| Body | 16px | 16px | 400 | 1.6 | Source Sans 3 |
| Body Small | 14px | 14px | 400 | 1.5 | Source Sans 3 |
| Caption | 12px | 12px | 400 | 1.4 | Source Sans 3 |
| Button | 16px | 14px | 500 | 1 | Outfit |

---

### Icons - Google Material Symbols

**Integration:**

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

**Icon Variant:** Outlined (consistent with modern, clean aesthetic)

**Project-Specific Icon Usage:**

| Category | Icon Names | Usage Context |
|----------|-----------|---------------|
| **Navigation** | home, menu, close, arrow_back, search, filter_list | App navigation |
| **Listings** | hotel, cottage, person, storefront, category | Listing types |
| **Booking** | calendar_month, schedule, event_available, event_busy | Date selection |
| **User Actions** | favorite, favorite_border, share, bookmark | Save/share listings |
| **Reviews** | star, star_half, star_border, reviews | Ratings |
| **Location** | location_on, map, explore, directions | Maps and location |
| **Amenities** | wifi, local_parking, restaurant, ac_unit, pets | Homestay features |
| **Communication** | call, chat, mail, translate | Contact options |
| **Commerce** | shopping_cart, shopping_bag, payments, receipt | Marketplace |
| **User** | person, account_circle, logout, settings | Account |
| **Status** | check_circle, error, warning, info, verified | Feedback |

**Icon Sizes:**
- Small (16px): Inline with text, badges
- Medium (20px): Buttons, form elements
- Large (24px): Card actions, navigation
- XL (32px): Empty states, feature highlights
- 2XL (48px): Hero sections, onboarding

---

### Responsive Design

**Breakpoint System:**

```tsx
const breakpoints = {
  sm: '640px',   // Mobile landscape / Large phones
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops / Small desktops
  xl: '1280px',  // Desktops
  '2xl': '1536px' // Large desktops
};
```

**Layout Patterns:**

**Mobile (<768px):**
- Single column layouts
- Bottom navigation bar (fixed)
- Full-width cards and buttons
- Horizontal scroll for listing previews
- Collapsible filters (sheet/modal)
- Touch targets minimum 44px

**Tablet (768px - 1023px):**
- 2-column grid for listings
- Side-by-side filter panel (collapsible)
- Larger touch targets
- Floating action buttons

**Desktop (≥1024px):**
- 3-4 column grid for listings
- Persistent sidebar filters
- Hover states and tooltips
- Keyboard shortcuts
- Multi-column forms

**Container Widths:**
```css
.container-narrow { max-width: 768px; }   /* Auth pages, checkout */
.container-default { max-width: 1280px; } /* Listing pages */
.container-wide { max-width: 1536px; }    /* Homepage hero */
```

---

### Accessibility Requirements

**WCAG 2.1 AA Compliance Checklist:**

**Perceivable:**
- [x] All images have descriptive alt text (including listing photos)
- [x] Color contrast ratio ≥ 4.5:1 for all text
- [x] Color is not the only indicator (icons + text for status)
- [x] Form fields have visible labels (not just placeholders)
- [x] Error messages are descriptive and helpful

**Operable:**
- [x] All functionality keyboard accessible
- [x] Visible focus indicators (2px primary color outline)
- [x] Skip to main content link
- [x] No keyboard traps in modals/dropdowns
- [x] Touch targets minimum 44x44px on mobile

**Understandable:**
- [x] Page language declared (`<html lang="en">`)
- [x] Consistent navigation across pages
- [x] Form validation with inline error messages
- [x] Confirmation before destructive actions (cancel booking)

**Robust:**
- [x] Semantic HTML elements (nav, main, article, aside)
- [x] ARIA labels for icon-only buttons
- [x] ARIA live regions for dynamic content (search results, notifications)

---

## Component Design System
https://stitch.withgoogle.com/projects/11018627272293321940

### Component Organization Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   ├── Icon/
│   │   ├── Rating/
│   │   ├── Price/
│   │   ├── Tag/
│   │   └── Skeleton/
│   │
│   ├── molecules/
│   │   ├── FormField/
│   │   ├── SearchBar/
│   │   ├── ListingCard/
│   │   ├── ReviewCard/
│   │   ├── DatePicker/
│   │   ├── GuestSelector/
│   │   ├── FilterChip/
│   │   ├── AmenityItem/
│   │   ├── NavItem/
│   │   └── CartItem/
│   │
│   ├── organisms/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── MobileNav/
│   │   ├── SearchFilters/
│   │   ├── ListingGrid/
│   │   ├── ImageGallery/
│   │   ├── BookingWidget/
│   │   ├── ReviewSection/
│   │   ├── HostCard/
│   │   ├── MapView/
│   │   └── ShoppingCart/
│   │
│   ├── layouts/
│   │   ├── MainLayout/
│   │   ├── AuthLayout/
│   │   ├── DashboardLayout/
│   │   └── CheckoutLayout/
│   │
│   └── pages/
│       ├── Home/
│       ├── Search/
│       ├── HomestayDetail/
│       ├── GuideDetail/
│       ├── ProductDetail/
│       ├── Booking/
│       ├── Checkout/
│       ├── Profile/
│       ├── Dashboard/
│       ├── Login/
│       ├── Register/
│       └── NotFound/
│
├── hooks/
│   ├── useAuth.ts
│   ├── useSearch.ts
│   ├── useBooking.ts
│   ├── useCart.ts
│   └── useApi.ts
│
├── context/
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   └── SearchContext.tsx
│
├── services/
│   ├── api.ts
│   ├── auth.service.ts
│   ├── listings.service.ts
│   ├── bookings.service.ts
│   └── orders.service.ts
│
├── types/
│   ├── user.types.ts
│   ├── listing.types.ts
│   ├── booking.types.ts
│   └── order.types.ts
│
└── utils/
    ├── formatters.ts
    ├── validators.ts
    └── constants.ts
```

---

### Atom Components

#### Avatar Component

**Key Design Decisions:**
- Built on DaisyUI's avatar component system
- Supports 5 size variants (xs, sm, md, lg, xl) with fixed width classes
- Three shape options: circle (rounded-full), rounded (rounded-xl), square (rounded)
- Presence indicators for online/offline status using DaisyUI avatar-online/offline classes
- Placeholder mode with initials for users without profile images
- Optional ring styling with customizable colors and offset
- Default placeholder image fallback using placehold.co service
- Separate text size scaling for placeholder initials to maintain readability
- Dynamic class construction using filter(Boolean).join() pattern for clean class composition

---

#### Badge Component

**Key Design Decisions:**
- Built on DaisyUI's badge component
- 5 size variants (xs, sm, md, lg, xl) using badge-* modifier classes
- 8 semantic color variants aligned with theme (neutral, primary, secondary, accent, info, success, warning, error)
- 5 style options: default (filled), outline, dash, soft, ghost for different visual weights
- Simple implementation focusing on text content display
- Flexible variant system supporting both color and style independently

---

#### Button Component

**Key Design Decisions:**
- Built on DaisyUI's btn component system
- 5 size variants (xs, sm, md, lg, xl) using btn-* modifier classes
- 8 semantic color variants matching theme colors
- 6 style options: default, outline, dash, soft, ghost, link for different contexts
- Shape modifiers: square, circle, wide, block for layout flexibility
- Loading state with DaisyUI's loading spinner component
- Active state support for toggle-style buttons
- Polymorphic rendering: can render as <button> or <a> tag based on 'as' prop
- Uses font-heading for consistent typography with brand guidelines

---

#### Icon Component

**Key Design Decisions:**
- Uses Google Material Symbols icon font
- 7 size variants (xs to 3xl) mapped to Tailwind text size classes
- Three visual variants: outlined (default), rounded, sharp matching Material Design styles
- Theme color integration with DaisyUI semantic colors
- Font variation settings control via CSS fontVariationSettings for FILL, weight, GRAD, opsz
- Click handler support with proper role and tabIndex for accessibility
- ARIA label support with fallback to icon name for screen readers
- Cursor pointer automatically added when interactive

---

#### Input Component

**Key Design Decisions:**
- Built on DaisyUI's input component
- 5 size variants (xs, sm, md, lg, xl) using input-* modifier classes
- 8 semantic color variants for validation states (neutral, primary, secondary, accent, info, success, warning, error)
- 2 style options: default and ghost for different visual contexts
- Optional bordered prop for explicit border control
- Minimal wrapper - spreads all HTML input attributes for full native functionality
- No built-in label or error handling - designed for composition in FormField molecule

---

#### Price Component

**Key Design Decisions:**
- Uses Intl.NumberFormat for proper INR currency formatting with Indian locale (en-IN)
- Zero decimal places for whole rupee amounts (minimumFractionDigits: 0)
- 4 size variants (sm, md, lg, xl) with separate sizing for price and period text
- Discount support with strikethrough original price and percentage badge
- Automatic discount percentage calculation displayed in secondary-colored badge
- Optional period text (e.g., "per night") with reduced opacity for hierarchy
- Semantic color classes (text-base-content) for consistent theming
- Flexbox baseline alignment for clean visual alignment between price, discount, and period

---

#### Rating Component

**Key Design Decisions:**
- Built on DaisyUI's rating component with radio input foundation
- 5 size variants (xs, sm, md, lg, xl) using rating-* modifier classes
- 3 mask shapes: star (default), star-2 (alternate design), heart for different contexts
- Half-star support using mask-half-1 and mask-half-2 classes for granular ratings
- Dual mode: read-only (divs) vs interactive (radio inputs) with automatic mode switching
- Optional clear button for resetting interactive ratings
- ARIA labels on each star for accessibility with proper singular/plural handling
- Radio input pattern ensures single selection with HTML5 form integration
- Gap spacing option for visual breathing room between stars

---

#### Skeleton Component

**Key Design Decisions:**
- Built on DaisyUI's skeleton component
- 2 variants: default (block) and text (inline) for different loading contexts
- 3 shape options: rectangle (default), circle (avatars), custom (user-defined)
- Custom width and height support via Tailwind utility classes
- Polymorphic rendering: <div> for default, <span> for text variant
- Can wrap content for preserving layout structure during loading
- Minimal implementation focusing on DaisyUI's built-in shimmer animation

---

#### Tag Component

**Key Design Decisions:**
- Built on DaisyUI's badge component as foundation
- 5 size variants (xs, sm, md, lg, xl) reusing badge-* classes
- 8 semantic color variants matching theme
- 4 style options: default, outline, soft, ghost for visual hierarchy
- Dismissible functionality with close button and custom icon support
- Interactive mode with click handler, role="button", and tabIndex for keyboard access
- Hover scale animation (scale-105) on interactive tags for visual feedback
- Stop propagation on dismiss to prevent triggering tag click
- Built-in gap-1 spacing between content and dismiss button
- Default SVG dismiss icon with hover opacity transition

---

**Atom Components Inventory:**

| Component | Purpose | Key Props | States |
|-----------|---------|-----------|--------|
| **Avatar** | User/host images | src, alt, size, shape, status, placeholder | default, online, offline |
| **Badge** | Status/category labels | variant, size, style | default |
| **Button** | Action triggers | variant, size, style, loading, as | default, hover, active, focus, loading, disabled |
| **Icon** | Material symbols | name, size, variant, color | default, interactive |
| **Input** | Text/number input | size, variant, style, bordered | default, focus, error, disabled |
| **Price** | Currency display | amount, originalAmount, period, size | default, discounted |
| **Rating** | Star ratings | totalStars, size, mask, half, readOnly | readonly, interactive |
| **Skeleton** | Loading placeholder | variant, shape, width, height | loading |
| **Tag** | Filter/category tags | variant, size, style, dismissible, interactive | default, interactive |

---

### Molecule Components

#### ListingCard Component

**Key Design Decisions:**
- Wraps entire card in React Router Link for full-card clickability
- Uses DaisyUI's card component with shadow-md and hover:shadow-lg for depth
- 4:3 aspect ratio for image consistency across listings
- Image hover scale effect (scale-105) on group hover for interactivity
- Lazy loading images for performance optimization
- Floating save button (favorite icon) with semi-transparent background
- Prevents click propagation on save button to avoid navigation
- Absolute positioned badges in top-left corner with flexbox wrapping
- Card body with fixed padding (p-4) for consistent spacing
- Location displayed with Material icon for visual hierarchy
- Bottom flex layout for rating and price with space-between alignment

---

#### SearchBar Component

**Key Design Decisions:**
- Form-based implementation for native submit handling
- Controlled/uncontrolled dual mode with internal state fallback
- Material icon positioned absolutely inside input (left padding adjustment)
- Filter button with responsive text (icon-only on mobile, text on desktop)
- Submit button with adaptive content (icon on mobile, text on desktop)
- Enter key triggers search via onKeyDown handler
- Size variants mapped to DaisyUI's input and button size classes
- Flexible layout using flexbox with flex-1 for search input
- Accessible with proper ARIA labels on icon-only buttons

---

#### DateRangePicker Component

**Key Design Decisions:**
- Native HTML date inputs for browser-provided date picker UI
- date-fns for date formatting to yyyy-MM-dd format required by input type="date"
- Two-column flex layout with gap-2 for visual separation
- Form control wrapper for each input with labels
- Material calendar icon positioned absolutely inside each input
- Min/max validation: start date max is end date, end date min is start date
- Error state styling with input-error class and error message display
- Flexible className prop for container customization
- Default minDate to current date to prevent past bookings

---

**Molecule Components Inventory:**

| Component | Combines | Purpose | Key Props |
|-----------|----------|---------|-----------|
| **ListingCard** | Image + Badge + Rating + Price | Display listing preview | id, type, title, image, rating, price |
| **SearchBar** | Input + Icon + Button | Search interface | onSearch, showFilterButton |
| **DateRangePicker** | Input + Calendar | Date selection for booking | value, onChange, minDate |
| **GuestSelector** | Input + Counter | Select number of guests | adults, children, onChange |
| **FormField** | Label + Input + Error | Form input with validation | label, name, error, required |
| **ReviewCard** | Avatar + Rating + Text | Display user review | author, rating, content, date |
| **FilterChip** | Tag + Close button | Active filter display | label, onRemove |
| **AmenityItem** | Icon + Label | Amenity display | icon, label |
| **NavItem** | Icon + Label + Badge | Navigation menu item | icon, label, href, badge |
| **CartItem** | Image + Title + Price + Quantity | Shopping cart item | product, quantity, onQuantityChange |
| **HostCard** | Avatar + Name + Badge | Host/Guide preview | name, avatar, verified, responseRate |

---

### Organism Components

#### Navbar Component

**Key Design Decisions:**
- Sticky positioning (top-0) with high z-index (z-50) for always-visible navigation
- DaisyUI's navbar component with three-section layout (start, center, end)
- Responsive logo: text-only on mobile, with icon/branding on desktop
- Desktop navigation uses menu-horizontal with gap-1 for proper spacing
- Hidden on mobile (lg:flex) with separate mobile menu drawer
- Integrated SearchBar component (hidden on mobile, fixed width on desktop)
- User authentication state: shows avatar dropdown if logged in, Sign In/Sign Up buttons if not
- DaisyUI dropdown-end component for user menu with role-based links
- Cart icon with badge indicator showing item count
- Mobile menu toggle button with animated icon (menu ↔ close)
- Collapsible mobile menu with border-top separator and SearchBar integration
- ARIA labels and semantic HTML for accessibility

---

#### BookingWidget Component

**Key Design Decisions:**
- Sticky sidebar positioning (sticky top-24) for visibility during scroll
- DaisyUI card with shadow-lg and border for elevated appearance
- date-fns differenceInDays for calculating number of nights
- useMemo hook for nights calculation to optimize re-renders
- Integrated DateRangePicker and GuestSelector molecule components
- Real-time price breakdown showing base price, service fee, and total
- Dynamic error handling with inline validation messages
- Minimum stay validation before allowing reservation
- URLSearchParams for passing booking data to checkout page via query string
- Conditional rendering of price breakdown only when dates are selected
- INR formatting using toLocaleString for proper Indian number format
- Disabled Reserve button logic based on validation state
- "You won't be charged yet" disclaimer for user confidence

---

**Organism Components Inventory:**

| Component | Purpose | Complexity | Key Features |
|-----------|---------|------------|--------------|
| **Navbar** | Site navigation | High | Logo, nav links, search, user menu, mobile menu |
| **Footer** | Site footer | Medium | Links, social icons, newsletter signup |
| **MobileNav** | Bottom navigation (mobile) | Medium | Fixed bottom bar with main nav icons |
| **SearchFilters** | Filter panel | High | Price range, rating, amenities, location filters |
| **ListingGrid** | Display listing cards | Medium | Responsive grid, loading states, pagination |
| **ImageGallery** | Photo gallery with lightbox | High | Thumbnail grid, fullscreen view, navigation |
| **BookingWidget** | Booking form sidebar | High | Date picker, guest selector, price breakdown |
| **ReviewSection** | Reviews list with form | High | Review cards, pagination, add review form |
| **HostCard** | Host/guide profile card | Medium | Avatar, name, verified badge, contact button |
| **MapView** | Interactive map | High | Location markers, info windows, clustering |
| **ShoppingCart** | Cart drawer/page | High | Cart items, quantity controls, checkout button |
| **Hero** | Homepage hero section | Medium | Search bar, featured image, tagline |

---

### Layout Components

#### MainLayout

**Key Design Decisions:**
- Flexbox column layout with min-h-screen for full viewport height
- Three-part structure: Navbar, main content (flex-1 for expansion), Footer
- Skip to main content link for keyboard navigation accessibility (sr-only with focus:not-sr-only)
- Configurable container widths: full (w-full), default (container mx-auto px-4), narrow (max-w-3xl)
- Optional footer and mobile navigation toggling via props
- Responsive padding on main content (py-6 on mobile, py-8 on desktop)
- Background color variants using DaisyUI base colors
- Semantic HTML with role="main" and id="main-content" for accessibility
- Mobile bottom navigation shown only on mobile (md:hidden)

---

#### AuthLayout

**Key Design Decisions:**
- Split-screen layout: 50% decorative branding (desktop only), 50% form
- Left panel with primary color background and gradient overlay (from-primary to-primary/80)
- Brand messaging on left: logo, tagline, and descriptive copy in primary-content color
- Decorative tribal pattern overlay with low opacity for subtle visual interest
- Right panel centered form with flexbox (items-center justify-center)
- Mobile-first: left panel hidden on mobile (hidden lg:flex), logo shown above form on mobile
- Card component for form content with shadow-lg for elevated appearance
- Fixed max-width (max-w-md) for form to prevent over-stretching on large screens
- Title and optional subtitle props for flexible content
- Children prop for form content composition

---

**Layout Components Inventory:**

| Layout | Purpose | Structure | Use Cases |
|--------|---------|-----------|-----------|
| **MainLayout** | Standard pages | Navbar + Content + Footer + MobileNav | Browse, search, listing details |
| **AuthLayout** | Authentication | Split screen with branding | Login, register, forgot password |
| **CheckoutLayout** | Checkout flow | Minimal header + stepper + content | Booking confirmation, payment |
| **DashboardLayout** | Provider dashboard | Sidebar + Header + Content | Manage listings, view bookings |

---

### Page Components Inventory

| Page | Route | Layout | Key Sections | Purpose |
|------|-------|--------|--------------|---------|
| **HomePage** | `/` | MainLayout | Hero, Featured Destinations, Categories, Testimonials | Landing page |
| **SearchPage** | `/search` | MainLayout | Filters, Results Grid, Map Toggle | Search results |
| **HomestaysPage** | `/homestays` | MainLayout | Filters, Listing Grid | Browse homestays |
| **HomestayDetailPage** | `/homestays/:id` | MainLayout | Gallery, Details, BookingWidget, Reviews, Host | View homestay |
| **GuidesPage** | `/guides` | MainLayout | Filters, Guide Grid | Browse guides |
| **GuideDetailPage** | `/guides/:id` | MainLayout | Profile, Tours, BookingWidget, Reviews | View guide |
| **MarketplacePage** | `/marketplace` | MainLayout | Categories, Product Grid | Browse products |
| **ProductDetailPage** | `/marketplace/:id` | MainLayout | Gallery, Details, Add to Cart, Artisan | View product |
| **CartPage** | `/cart` | MainLayout | Cart Items, Summary | Shopping cart |
| **CheckoutPage** | `/checkout` | CheckoutLayout | Shipping, Payment, Summary | Complete purchase |
| **BookingPage** | `/booking` | CheckoutLayout | Booking Details, Payment | Confirm booking |
| **LoginPage** | `/login` | AuthLayout | Login Form, Social Login | Authentication |
| **RegisterPage** | `/register` | AuthLayout | Registration Form, Role Select | User registration |
| **ProfilePage** | `/profile` | MainLayout | User Info, Bookings, Reviews | User profile |
| **DashboardPage** | `/dashboard` | DashboardLayout | Stats, Recent Bookings, Listings | Provider dashboard |
| **NotFoundPage** | `*` | MainLayout | 404 Message | Error page |

---

## Wireframe Structure

### Homepage (`/`)

**Purpose:** Introduce platform, inspire exploration, drive conversions

**Layout Type:** Full-width hero, contained sections

**Block 1 - Hero Section:**
- **Component Type:** Full-width hero with search
- **Elements:**
    - Background: Scenic Jharkhand landscape image (Netarhat sunrise)
    - Overlay: Gradient for text readability
    - Heading (H1): "Discover the Soul of Jharkhand"
    - Subheading: "Authentic homestays, expert guides, and tribal crafts"
    - SearchBar: Prominent search with location autocomplete
    - Quick Links: "Homestays", "Guides", "Marketplace" buttons
- **Responsive:** Stack elements vertically on mobile, reduce image height

**Block 2 - Featured Categories:**
- **Component Type:** 4-column card grid (2 on tablet, 1 on mobile)
- **Elements:**
    - Category cards with icons and images
    - Categories: Homestays, Local Guides, Handicrafts, Experiences
    - Hover effect with color overlay
- **Responsive:** 2x2 grid on mobile

**Block 3 - Featured Destinations:**
- **Component Type:** Horizontal scroll on mobile, 4-card grid on desktop
- **Elements:**
    - Destination cards (Netarhat, Betla, Patratu, Hundru Falls, Deoghar)
    - Each: Image, name, rating, listing count
- **Responsive:** Horizontal scroll with snap on mobile

**Block 4 - How It Works:**
- **Component Type:** 3-step process illustration
- **Elements:**
    - Step 1: "Discover" - Search icon
    - Step 2: "Book" - Calendar icon
    - Step 3: "Experience" - Heart icon
    - Brief description under each
- **Responsive:** Vertical stack on mobile

**Block 5 - Featured Homestays:**
- **Component Type:** ListingGrid (4 cards)
- **Elements:**
    - ListingCard components
    - "View All Homestays" button
- **Responsive:** 2-column on tablet, 1-column on mobile

**Block 6 - Testimonials:**
- **Component Type:** Carousel/slider
- **Elements:**
    - Review cards with avatar, quote, name, location
    - Navigation dots
- **Responsive:** Single testimonial view on mobile

**Block 7 - CTA Section:**
- **Component Type:** Split section
- **Elements:**
    - Left: "Become a Host" - Description + CTA
    - Right: "List Your Products" - Description + CTA
- **Responsive:** Stack vertically on mobile

**Navigation:**
- **Entry Points:** Direct URL, search engines, social media
- **Exit Points:** Search, category pages, listing details, auth pages
- **Primary CTA:** Search bar, "Explore" buttons

---

### Search Results Page (`/search`)

**Purpose:** Display filtered search results with refinement options

**Layout Type:** Sidebar filters (desktop), drawer filters (mobile)

**Block 1 - Search Header:**
- **Component Type:** Search bar with active filters
- **Elements:**
    - SearchBar (pre-filled with query)
    - Active filter chips (removable)
    - Results count
    - Sort dropdown (Relevance, Price, Rating)
    - View toggle (Grid/Map)

**Block 2 - Filters Sidebar (Desktop):**
- **Component Type:** Sticky sidebar
- **Elements:**
    - Listing type (Homestays, Guides, Products)
    - Price range slider
    - Rating filter (minimum stars)
    - Location/District dropdown
    - Amenities checkboxes (for homestays)
    - Languages (for guides)
    - Categories (for products)
    - "Clear All" button

**Block 3 - Results Grid:**
- **Component Type:** Responsive ListingGrid
- **Elements:**
    - ListingCard components (mixed types)
    - Loading skeletons
    - Empty state (no results)
    - Pagination
- **Responsive:** 3 columns desktop, 2 tablet, 1 mobile

**Block 4 - Map View (Toggle):**
- **Component Type:** Interactive map
- **Elements:**
    - Map with location markers
    - Marker clusters for dense areas
    - Popup cards on marker click
- **Responsive:** Full width, adjustable height

---

### Homestay Detail Page (`/homestays/:id`)

**Purpose:** Showcase homestay, enable booking

**Layout Type:** Two-column (content + booking widget on desktop)

**Block 1 - Image Gallery:**
- **Component Type:** ImageGallery
- **Elements:**
    - Primary large image
    - 4 thumbnail grid
    - "Show all photos" button
    - Lightbox on click
- **Responsive:** Single image with gallery button on mobile

**Block 2 - Header:**
- **Component Type:** Title section
- **Elements:**
    - Title (H1)
    - Location with map link
    - Rating with review count
    - Save button (heart icon)
    - Share button

**Block 3 - Host Summary:**
- **Component Type:** HostCard inline
- **Elements:**
    - Host avatar and name
    - Verified badge
    - "Superhost" badge (if applicable)
    - Hosting since date

**Block 4 - Highlights:**
- **Component Type:** Icon list
- **Elements:**
    - Key features (3-4 items)
    - Icons + short descriptions
    - Examples: "Entire cottage", "Self check-in", "Free parking"

**Block 5 - Description:**
- **Component Type:** Expandable text
- **Elements:**
    - Property description (truncated)
    - "Show more" toggle

**Block 6 - Amenities:**
- **Component Type:** Grid of AmenityItems
- **Elements:**
    - Amenity icons with labels
    - Grouped by category
    - "Show all amenities" modal

**Block 7 - Location:**
- **Component Type:** Map section
- **Elements:**
    - Embedded map (approximate location)
    - Neighborhood description
    - Nearby attractions

**Block 8 - Reviews:**
- **Component Type:** ReviewSection
- **Elements:**
    - Overall rating summary
    - Rating breakdown (cleanliness, accuracy, etc.)
    - Review cards (paginated)
    - "Write a review" button (if booked)

**Block 9 - Booking Widget (Sidebar):**
- **Component Type:** BookingWidget
- **Elements:**
    - Price per night
    - Date range picker
    - Guest selector
    - Price breakdown
    - "Reserve" button
- **Responsive:** Sticky bottom bar on mobile with "Check Availability" button

**Block 10 - House Rules:**
- **Component Type:** Collapsible section
- **Elements:**
    - Check-in/check-out times
    - Rules list
    - Cancellation policy

---

### Marketplace Page (`/marketplace`)

**Purpose:** Browse and purchase tribal handicrafts

**Layout Type:** Category navigation + product grid

**Block 1 - Category Banner:**
- **Component Type:** Hero with categories
- **Elements:**
    - Category tabs/pills (All, Textiles, Pottery, Paintings, Jewelry, etc.)
    - Optional: Featured category banner

**Block 2 - Filters Bar:**
- **Component Type:** Horizontal filter bar
- **Elements:**
    - Sort dropdown
    - Price range
    - Artisan filter
    - Filter drawer button (mobile)

**Block 3 - Product Grid:**
- **Component Type:** ListingGrid (products)
- **Elements:**
    - Product cards (image, title, artisan, price)
    - Quick add to cart button
    - Wishlist button
- **Responsive:** 4 columns desktop, 2 mobile

**Block 4 - Featured Artisans:**
- **Component Type:** Horizontal scroll
- **Elements:**
    - Artisan profile cards
    - Link to artisan page/filter

---

### Cart Page (`/cart`)

**Purpose:** Review items before checkout

**Layout Type:** Two-column (items + summary)

**Block 1 - Cart Header:**
- **Component Type:** Page header
- **Elements:**
    - Title: "Shopping Cart"
    - Item count

**Block 2 - Cart Items:**
- **Component Type:** CartItem list
- **Elements:**
    - Product image
    - Title and variant
    - Quantity selector
    - Price
    - Remove button

**Block 3 - Order Summary:**
- **Component Type:** Summary card (sticky)
- **Elements:**
    - Subtotal
    - Shipping estimate
    - Total
    - "Proceed to Checkout" button
    - Continue shopping link

---

## API Structure Overview

### Authentication Endpoints

```
POST   /api/auth/register     - User registration
POST   /api/auth/login        - User login
POST   /api/auth/logout       - User logout
GET    /api/auth/me           - Get current user
POST   /api/auth/refresh      - Refresh access token
POST   /api/auth/forgot       - Request password reset
POST   /api/auth/reset        - Reset password with token
```

### Listing Endpoints

```
GET    /api/homestays              - List homestays (with filters)
GET    /api/homestays/:id          - Get homestay details
POST   /api/homestays              - Create homestay (provider)
PUT    /api/homestays/:id          - Update homestay (provider)
DELETE /api/homestays/:id          - Delete homestay (provider)
GET    /api/homestays/:id/reviews  - Get homestay reviews

GET    /api/guides                 - List guides (with filters)
GET    /api/guides/:id             - Get guide details
POST   /api/guides                 - Create guide profile (provider)
PUT    /api/guides/:id             - Update guide profile (provider)
GET    /api/guides/:id/reviews     - Get guide reviews

GET    /api/products               - List products (with filters)
GET    /api/products/:id           - Get product details
POST   /api/products               - Create product (artisan)
PUT    /api/products/:id           - Update product (artisan)
DELETE /api/products/:id           - Delete product (artisan)
```

### Booking Endpoints

```
GET    /api/bookings               - List user bookings
POST   /api/bookings               - Create booking
GET    /api/bookings/:id           - Get booking details
PUT    /api/bookings/:id/cancel    - Cancel booking
GET    /api/bookings/:id/invoice   - Get booking invoice
```

### Order Endpoints

```
GET    /api/orders                 - List user orders
POST   /api/orders                 - Create order from cart
GET    /api/orders/:id             - Get order details
PUT    /api/orders/:id/cancel      - Cancel order
```

### Review Endpoints

```
POST   /api/reviews                - Create review
PUT    /api/reviews/:id            - Update review
DELETE /api/reviews/:id            - Delete review
```

### User Endpoints

```
GET    /api/users/profile          - Get user profile
PUT    /api/users/profile          - Update profile
PUT    /api/users/avatar           - Upload avatar
GET    /api/users/wishlist         - Get wishlist
POST   /api/users/wishlist/:id     - Add to wishlist
DELETE /api/users/wishlist/:id     - Remove from wishlist
```

### Search Endpoint

```
GET    /api/search                 - Unified search (all types)
GET    /api/search/suggestions     - Autocomplete suggestions
GET    /api/destinations           - List destinations/districts
```

---

## Database Schema Overview

### User Schema

```typescript
interface User {
  _id: ObjectId;
  email: string;
  password: string; // hashed
  name: string;
  phone?: string;
  avatar?: string;
  role: 'tourist' | 'provider' | 'admin';
  isVerified: boolean;
  providerProfile?: {
    type: 'homestay' | 'guide' | 'artisan';
    bio: string;
    languages: string[];
    responseRate: number;
    responseTime: string;
  };
  wishlist: ObjectId[]; // listing references
  createdAt: Date;
  updatedAt: Date;
}
```

### Homestay Schema

```typescript
interface Homestay {
  _id: ObjectId;
  host: ObjectId; // User reference
  title: string;
  description: string;
  propertyType: 'entire' | 'private' | 'shared';
  location: {
    address: string;
    district: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  amenities: string[];
  houseRules: string[];
  pricing: {
    basePrice: number;
    cleaningFee?: number;
    weekendPrice?: number;
  };
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  availability: {
    minStay: number;
    maxStay: number;
    blockedDates: Date[];
  };
  rating: {
    average: number;
    count: number;
  };
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}
```

### Booking Schema

```typescript
interface Booking {
  _id: ObjectId;
  user: ObjectId;
  listing: ObjectId;
  listingType: 'homestay' | 'guide';
  dates: {
    checkIn: Date;
    checkOut: Date;
  };
  guests: {
    adults: number;
    children: number;
  };
  pricing: {
    baseTotal: number;
    serviceFee: number;
    total: number;
  };
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Current Implementation Status

### Completed ✅

| Area | Status | Details |
|------|--------|---------|
| **Project Setup** | ✅ Complete | Vite + React 19 + TypeScript, TailwindCSS v4 + DaisyUI v5 |
| **Component Library** | ✅ Complete | 9 atoms, 10 molecules, 11 organisms, 4 layouts |
| **Storybook** | ✅ Complete | Component documentation and visual testing |
| **Accessibility** | ✅ Complete | WCAG 2.1 AA compliant, keyboard navigation, ARIA labels |
| **Responsive Design** | ✅ Complete | Mobile-first with sm/md/lg/xl breakpoints |
| **Pages** | ✅ Complete | 12 pages including Home, Search, Detail, Checkout |
| **Routing** | ✅ Complete | React Router v7 with all routes configured |
| **Deployment** | ✅ Complete | GitHub Pages deployment |

### In Progress 🚧

| Area | Status | Next Steps |
|------|--------|------------|
| **API Integration** | 🚧 Planned | Axios setup, Postman mock APIs, service layer |
| **State Management** | 🚧 Planned | Cart context, search context |
| **Dynamic Data** | 🚧 Planned | Replace static data with API calls |

### Planned 📋

| Area | Status | Description |
|------|--------|-------------|
| **Backend** | 📋 Future | Express.js + MongoDB + JWT auth |
| **Authentication** | 📋 Future | User registration, login, profiles |
| **Payments** | 📋 Future | Razorpay integration |

---

## Success Metrics

**MVP Completion Criteria:**
- [ ] User can register/login as tourist or provider
- [ ] User can browse and search homestays, guides, products
- [ ] User can view detailed listing pages with all information
- [ ] User can complete a booking flow (homestay or guide)
- [ ] User can add products to cart and complete checkout
- [ ] Provider can create and manage listings
- [ ] Reviews can be submitted and displayed
- [ ] Application is deployed and publicly accessible
- [ ] All pages are responsive and accessible

**Stretch Goals:**
- [ ] Map view with markers
- [ ] Wishlist functionality
- [ ] Trip planner/itinerary builder
- [ ] Provider analytics dashboard
- [ ] Multilingual support (Hindi)

---

**End of PRD**

---

*Document Version: 1.1*
*Created: December 2024*
*Updated: December 2025*
*Project: SIH 2025 - Problem Statement #25032*
*Team: [Your Team Name]*
*Deployed: [GitHub Pages](https://dbc2201.github.io/sih-2025-jharkhand-tourism/)*