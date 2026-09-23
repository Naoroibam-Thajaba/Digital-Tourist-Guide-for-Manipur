/**
 * Home page component for the main landing page
 *
 * Features:
 * - Hero section with search
 * - Featured categories
 * - Featured destinations
 * - How it works section
 * - Featured homestays (fetched from API)
 * - Testimonials
 * - CTA sections
 *
 * @component
 * @example
 * // Basic usage
 * <Home />
 *
 * @example
 * // With callbacks
 * <Home
 *   onSearch={(query) => navigate(`/search?q=${query}`)}
 *   onCategoryClick={(cat) => navigate(`/search?type=${cat}`)}
 * />
 */

export interface Destination {
	/** Unique identifier */
	id: string;
	/** Destination name */
	name: string;
	/** Image URL */
	image: string;
	/** Number of listings */
	listingCount: number;
}

export interface Testimonial {
	/** Unique identifier */
	id: string;
	/** Reviewer name */
	name: string;
	/** Reviewer avatar */
	avatar?: string;
	/** Review text */
	text: string;
	/** Rating value (1-5) */
	rating: number;
	/** Reviewer location */
	location?: string;
}

export interface HomeProps {
	/** Featured destinations (static data) */
	featuredDestinations?: Destination[];
	/** Testimonials/reviews (static data) */
	testimonials?: Testimonial[];
	/** Callback when search is submitted */
	onSearch?: (query: string) => void;
	/** Callback when a category is clicked */
	onCategoryClick?: (category: string) => void;
	/** Callback when a destination is clicked */
	onDestinationClick?: (destinationId: string) => void;
	/** Additional CSS classes */
	className?: string;
}
