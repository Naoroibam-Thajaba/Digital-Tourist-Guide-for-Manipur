# One Manipur Tourism - Smart Digital Platform for Eco & Cultural Tourism

**SIH 2025 Problem Statement #25032**

[![Live Demo](https://img.shields.io/badge/demo-GitHub_Pages-green)](https://dbc2201.github.io/sih-2025-one-manipur-tourism/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.0-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5.2.1-000000?logo=express&logoColor=fff)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-24_LTS-339933?logo=node.js)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-10.1-FF4785?logo=storybook)](https://storybook.js.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

---

## What It Does

**One Manipur Tourism** connects travelers with authentic local experiences in Manipur—from tribal homestays and verified local guides to handcrafted artisan products—making eco and cultural tourism accessible, organized, and community-empowering.

**Tagline:** *"Discover the Soul of Manipur"*

**Live Demo:** [https://dbc2201.github.io/sih-2025-one-manipur-tourism/](https://dbc2201.github.io/sih-2025-one-manipur-tourism/)

---

## 🌟 The Problem We're Solving

Manipur possesses extraordinary natural beauty, rich tribal heritage, and incredible eco-tourism destinations like Netarhat, Betla National Park, and Hundru Falls. However:

- ❌ Tourists struggle to find reliable information about authentic local experiences
- ❌ No centralized platform for safe homestays and trustworthy guides
- ❌ Local communities remain excluded from tourism economy due to lack of digital presence
- ❌ Tribal artisans cannot reach wider markets for their authentic handicrafts
- ❌ Tourism revenue doesn't flow directly to local communities

**Our Solution:** A centralized digital marketplace bridging tourists with local service providers, ensuring authentic experiences while empowering communities economically.

---

## ✨ Key Features

### For Tourists
- ✅ **Discover Verified Homestays** - Safe, authentic tribal homestays with reviews and ratings
- ✅ **Book Expert Local Guides** - Knowledgeable guides for cultural and nature tours
- ✅ **Shop Authentic Handicrafts** - Direct-from-artisan marketplace with craft stories
- ✅ **Advanced Search & Filters** - Find experiences by location, price, rating, amenities
- ✅ **Integrated Booking System** - Seamless date selection and reservation flow
- ✅ **Trip Planning** - Wishlist and itinerary builder for multi-day trips

### For Service Providers
- ✅ **Easy Listing Creation** - Simple interface for homestay/guide/product listings
- ✅ **Booking Management Dashboard** - Track reservations and orders in real-time
- ✅ **Review & Rating System** - Build reputation through customer feedback
- ✅ **Hindi Language Support** - Accessible interface for local providers

### Technical Highlights
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Accessible UI** - WCAG 2.1 AA compliant
- ✅ **Real-time Updates** - Live availability and booking confirmations
- ✅ **Secure Authentication** - JWT-based auth with role-based access control
- ✅ **Payment Integration Ready** - Razorpay integration support

---

## Tech Stack

### Frontend (Current)
- **Framework:** React 19 with TypeScript 5.7+
- **Build Tool:** Vite 6.x
- **Routing:** React Router v7
- **Styling:** TailwindCSS v4 + DaisyUI v5
- **Component Docs:** Storybook 8
- **Icons:** Google Material Symbols (Outlined)
- **Date Handling:** date-fns

### Deployment
- **Hosting:** GitHub Pages
- **Version Control:** Git + GitHub

### Backend (Planned)
- **Runtime:** Node.js v24 LTS
- **Framework:** Express.js v5
- **Database:** MongoDB 8.0+ with Mongoose v8
- **Authentication:** JWT + bcrypt.js

---

## Quick Start

### Prerequisites

- Node.js 24 LTS ([Download](https://nodejs.org))
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/dbc2201/sih-2025-one-manipur-tourism.git
cd sih-2025-one-manipur-tourism

# Install dependencies
npm install
```

### Run Development Server

```bash
# Start the development server
npm run dev
# Frontend running at: http://localhost:5173

# Run Storybook for component documentation
npm run storybook
# Storybook running at: http://localhost:6006
```

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

---

## Project Structure

```
sih-2025-one-manipur-tourism/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── components/              # Atomic Design Components
│   │   ├── atoms/               # 9 basic building blocks
│   │   │   ├── Avatar/          # User images with status
│   │   │   ├── Badge/           # Status labels
│   │   │   ├── Button/          # Action triggers
│   │   │   ├── Icon/            # Material Symbols
│   │   │   ├── Input/           # Form inputs
│   │   │   ├── Price/           # Currency display
│   │   │   ├── Rating/          # Star ratings
│   │   │   ├── Skeleton/        # Loading placeholders
│   │   │   └── Tag/             # Filter tags
│   │   │
│   │   ├── molecules/           # 10 composite components
│   │   │   ├── AmenityItem/     # Amenity display
│   │   │   ├── CartItem/        # Cart item
│   │   │   ├── DatePicker/      # Date selection
│   │   │   ├── FilterChip/      # Active filter
│   │   │   ├── FormField/       # Form input with validation
│   │   │   ├── GuestSelector/   # Guest count
│   │   │   ├── ListingCard/     # Listing preview
│   │   │   ├── NavItem/         # Nav menu item
│   │   │   ├── ReviewCard/      # Review display
│   │   │   └── SearchBar/       # Search interface
│   │   │
│   │   ├── organisms/           # 11 complex components
│   │   │   ├── BookingWidget/   # Booking sidebar
│   │   │   ├── Footer/          # Site footer
│   │   │   ├── Hero/            # Hero section
│   │   │   ├── HostCard/        # Host profile
│   │   │   ├── ListingGrid/     # Listing grid
│   │   │   ├── MapView/         # Embedded map
│   │   │   ├── MobileNav/       # Mobile navigation
│   │   │   ├── Navbar/          # Site navigation
│   │   │   ├── ReviewSection/   # Reviews list
│   │   │   ├── SearchFilters/   # Filter panel
│   │   │   └── ShoppingCart/    # Cart drawer
│   │   │
│   │   ├── layouts/             # 4 page layouts
│   │   │   ├── AuthLayout/
│   │   │   ├── CheckoutLayout/
│   │   │   ├── DashboardLayout/
│   │   │   └── MainLayout/
│   │   │
│   │   └── pages/               # 12 route components
│   │       ├── Booking/
│   │       ├── Checkout/
│   │       ├── Dashboard/
│   │       ├── GuideDetail/
│   │       ├── Home/
│   │       ├── HomestayDetail/
│   │       ├── Login/
│   │       ├── NotFound/
│   │       ├── ProductDetail/
│   │       ├── Profile/
│   │       ├── Register/
│   │       └── Search/
│   │
│   ├── stories/                 # Storybook stories
│   ├── App.tsx                  # Root component with routing
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles + DaisyUI theme
│
├── .storybook/                  # Storybook configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
├── PRD.md                       # Product Requirements Document
└── README.md
```

---

## Component Library

### Atoms (Basic Building Blocks)
| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **Avatar** | User images | Size variants, status indicators, placeholder support |
| **Badge** | Status labels | 8 color variants, 5 style options |
| **Button** | Actions | Loading state, multiple sizes, link support |
| **Icon** | Material Symbols | Keyboard accessible, color variants |
| **Input** | Form inputs | Validation states, size variants |
| **Price** | Currency display | INR formatting, discount display |
| **Rating** | Star ratings | Interactive & readonly modes, half-star support |
| **Skeleton** | Loading states | Block & text variants |
| **Tag** | Filter tags | Dismissible, interactive modes |

### Molecules (Composite Components)
| Component | Purpose |
|-----------|---------|
| **ListingCard** | Preview cards for homestays, guides, products |
| **SearchBar** | Search with filter button |
| **ReviewCard** | User review with rating |
| **CartItem** | Shopping cart item with quantity controls |
| **GuestSelector** | Adults/children counter |

### Organisms (Complex Components)
| Component | Purpose |
|-----------|---------|
| **Navbar** | Site navigation with auth menu |
| **BookingWidget** | Date selection, guest count, pricing |
| **SearchFilters** | Price, rating, amenity filters |
| **ShoppingCart** | Cart drawer with checkout |
| **ListingGrid** | Responsive grid with loading states |

---

## Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with featured content |
| `/search` | Search | Search results with filters |
| `/homestays/:id` | HomestayDetail | Homestay details and booking |
| `/guides/:id` | GuideDetail | Guide profile and tours |
| `/products/:id` | ProductDetail | Product details |
| `/booking` | Booking | Booking confirmation |
| `/checkout` | Checkout | Cart checkout flow |
| `/login` | Login | User authentication |
| `/register` | Register | User registration |
| `/profile` | Profile | User profile |
| `/dashboard` | Dashboard | Provider dashboard |
| `*` | NotFound | 404 page |

---

## API Documentation (Planned)

> **Note:** The frontend currently uses static mock data. API integration with Postman Mock Server is planned.

### Planned Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/homestays` | List homestays with filters |
| `GET /api/homestays/:id` | Get homestay details |
| `GET /api/guides` | List guides with filters |
| `GET /api/guides/:id` | Get guide details |
| `GET /api/products` | List products with filters |
| `GET /api/products/:id` | Get product details |
| `GET /api/search` | Unified search |
| `POST /api/bookings` | Create booking |

---

## Design System

### Brand Identity

**Tagline:** "Discover the Soul of Manipur"

**Brand Values:**
- 🎯 **Authenticity** - Genuine experiences, real communities
- 🤝 **Community First** - Empowering local economies
- 🌱 **Sustainability** - Responsible, eco-conscious tourism
- 🌍 **Accessibility** - Making hidden gems discoverable

### Color Palette (OKLCH)

**Primary - Terracotta Red**
```css
--color-primary: oklch(55% 0.18 25); /* #C75239 */
```
Represents the red earth of Manipur and terracotta pottery tradition

**Secondary - Amber Gold**
```css
--color-secondary: oklch(75% 0.16 70); /* #D4A24A */
```
Represents golden treasures of tribal craftsmanship

**Accent - Forest Green**
```css
--color-accent: oklch(50% 0.14 145); /* #2D7A4E */
```
Represents Manipur's dense forests and eco-tourism focus

### Typography

**Headings:** Outfit (400, 500, 600, 700)  
**Body:** Source Sans 3 (300, 400, 500, 600)

### Icons

**Library:** Google Material Symbols (Outlined variant)

---

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run storybook    # Start Storybook
npm run deploy       # Deploy to GitHub Pages
```

---

## Deployment

The application is deployed to **GitHub Pages** using the `gh-pages` package.

```bash
# Build and deploy
npm run deploy
```

**Live URL:** [https://dbc2201.github.io/sih-2025-one-manipur-tourism/](https://dbc2201.github.io/sih-2025-one-manipur-tourism/)

---

## Accessibility

This project follows **WCAG 2.1 AA** guidelines:

- Keyboard navigation for all interactive elements
- ARIA labels for screen readers
- Semantic HTML structure
- Focus indicators
- Color contrast compliance
- Loading state announcements

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Features Completed

### Frontend ✅
- [x] Component library (atoms, molecules, organisms)
- [x] All pages (Home, Search, Detail, Checkout, Auth)
- [x] Responsive design (mobile-first)
- [x] Accessibility (WCAG 2.1 AA)
- [x] Storybook documentation
- [x] GitHub Pages deployment

### Planned 🚧
- [ ] API integration (Axios + Postman Mock)
- [ ] State management (Cart, Search contexts)
- [ ] Backend (Express.js + MongoDB)
- [ ] Authentication (JWT)
- [ ] Payment integration (Razorpay)

---

## Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add comments for complex logic

---

## 👥 Team

**Team Name:** [Your Team Name]

**Team Members:**
- **[Member 1]** - Team Lead & Full-Stack Developer - [@github](https://github.com/member1)
- **[Member 2]** - Frontend Developer - [@github](https://github.com/member2)
- **[Member 3]** - Backend Developer - [@github](https://github.com/member3)
- **[Member 4]** - UI/UX Designer & Frontend Developer - [@github](https://github.com/member4)
- **[Member 5]** - Database Architect - [@github](https://github.com/member5)
- **[Member 6]** - DevOps & Deployment - [@github](https://github.com/member6)

**Mentor:** Divyansh Bhardwaj ([@dbc2201](https://github.com/dbc2201))

---

## Documentation

- **Product Requirements Document:** [PRD.md](PRD.md)
- **Component Library:** [Storybook](https://dbc2201.github.io/sih-2025-one-manipur-tourism/storybook)

---

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

```
Copyright 2025 [Your Team Name]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

## 🙏 Acknowledgments

- **Smart India Hackathon 2025** for the opportunity
- **Manipur Tourism Department** for inspiration
- **Tribal Communities of Manipur** for their rich cultural heritage
- **Open Source Community** for amazing tools and libraries

---

## Links

- **Live Demo:** [https://dbc2201.github.io/sih-2025-one-manipur-tourism/](https://dbc2201.github.io/sih-2025-one-manipur-tourism/)
- **Repository:** [https://github.com/dbc2201/sih-2025-one-manipur-tourism](https://github.com/dbc2201/sih-2025-one-manipur-tourism)
- **Storybook:** [https://dbc2201.github.io/sih-2025-one-manipur-tourism/storybook](https://dbc2201.github.io/sih-2025-one-manipur-tourism/storybook)
- **Issue Tracker:** [GitHub Issues](https://github.com/dbc2201/sih-2025-one-manipur-tourism/issues)

---

## Roadmap

### Next Steps
- [ ] API integration with Postman Mock Server
- [ ] State management (Cart, Search contexts)
- [ ] Backend development (Express.js + MongoDB)
- [ ] User authentication (JWT)
- [ ] Payment integration (Razorpay)

### Future Features
- [ ] Multilingual Support (Hindi)
- [ ] Advanced Analytics
- [ ] AI Recommendations
- [ ] Mobile Apps

---

**Built for Manipur Tourism & Community Empowerment**

**SIH 2025 - Problem Statement #25032**

---

**Last Updated:** December 2025
**Version:** 0.8.0
**Status:** Frontend Complete, API Integration Planned
## One Manipur Tourism Backend

This fork now includes a working Express + MongoDB backend under `backend/` for the One Manipur Tourism hackathon concept. See `backend/README.md` for setup.

Local development:
```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```
Then set the frontend API URL to `http://localhost:2201/api` (or use `.env.local.example`).
