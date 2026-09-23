/**
 * MapView organism component for displaying location maps
 *
 * @component
 * @example
 * <MapView
 *   center={{ lat: 23.3441, lng: 85.3096 }}
 *   markers={[{ id: '1', lat: 23.3441, lng: 85.3096, title: 'Ranchi' }]}
 * />
 */

export interface MapMarker {
	/** Unique identifier */
	id: string;
	/** Latitude */
	lat: number;
	/** Longitude */
	lng: number;
	/** Marker title */
	title?: string;
	/** Marker description */
	description?: string;
	/** Price to display (for listing markers) */
	price?: number;
}

export interface MapCenter {
	/** Latitude */
	lat: number;
	/** Longitude */
	lng: number;
}

export interface MapViewProps {
	/** Map center coordinates */
	center?: MapCenter;
	/** Zoom level (1-20) */
	zoom?: number;
	/** Markers to display on the map */
	markers?: MapMarker[];
	/** Height of the map container */
	height?: string;
	/** Callback when a marker is clicked */
	onMarkerClick?: (marker: MapMarker) => void;
	/** Location name for display */
	locationName?: string;
	/** Whether to show the "View on Google Maps" link */
	showExternalLink?: boolean;
	/** Additional CSS classes */
	className?: string;
}
