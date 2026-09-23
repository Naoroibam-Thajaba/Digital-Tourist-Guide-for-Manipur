/**
 * Avatar component based on DaisyUI
 *
 * @component
 * @example
 * // Basic avatar
 * <Avatar src="/path/to/image.jpg" alt="Username" />
 *
 * @example
 * // Avatar with online status
 * <Avatar src="/path/to/image.jpg" alt="User name" status="online" />
 *
 * @example
 * // Placeholder avatar with initials
 * <Avatar placeholder="JD" />
 */

export type PresenceStatus = 'online' | 'offline';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'rounded' | 'square';

export interface AvatarProps {
	/** Image source URL */
	src?: string;
	/** Alt text for the image */
	alt?: string;
	/** Predefined size of the avatar */
	size?: AvatarSize;
	/** Shape of the avatar */
	shape?: AvatarShape;
	/** Online/offline presence indicator */
	status?: PresenceStatus;
	/** Text to display when in placeholder mode (e.g., initials) */
	placeholder?: string;
	/** Whether to show a ring around the avatar */
	ring?: boolean;
	/** Tailwind ring color class */
	ringColor?: string;
	/** Additional CSS classes */
	className?: string;
}