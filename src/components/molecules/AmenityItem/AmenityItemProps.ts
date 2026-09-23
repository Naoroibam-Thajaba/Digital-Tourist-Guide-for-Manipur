/**
 * AmenityItem component for displaying amenities with icon and label
 *
 * @component
 * @example
 * // Basic amenity
 * <AmenityItem icon="wifi" label="Free Wi-Fi" />
 *
 * @example
 * // Unavailable amenity
 * <AmenityItem icon="pets" label="Pet friendly" available={false} />
 *
 * @example
 * // Large amenity
 * <AmenityItem icon="local_parking" label="Free Parking" size="lg" />
 */

export type AmenityItemSize = 'sm' | 'md' | 'lg';

export interface AmenityItemProps {
	/** Material icon name */
	icon: string;
	/** Amenity label text */
	label: string;
	/** Whether the amenity is available */
	available?: boolean;
	/** Size variant */
	size?: AmenityItemSize;
	/** Additional CSS classes */
	className?: string;
}
