/**
 * Hero organism component for homepage hero section
 *
 * @component
 * @example
 * // Basic hero
 * <Hero />
 *
 * @example
 * // Hero with custom content
 * <Hero
 *   title="Custom Title"
 *   subtitle="Custom subtitle text"
 *   backgroundImage="/images/hero.jpg"
 *   onSearch={(query) => console.log(query)}
 * />
 */

export interface HeroProps {
	/** Background image URL */
	backgroundImage?: string;
	/** Main heading text */
	title?: string;
	/** Subtitle/description text */
	subtitle?: string;
	/** Callback when search is submitted */
	onSearch?: (query: string) => void;
	/** Additional CSS classes */
	className?: string;
}
