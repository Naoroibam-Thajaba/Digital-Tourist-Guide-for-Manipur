import { Avatar } from '../../atoms/Avatar';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import type { HostCardProps } from './HostCardProps';

/**
 * HostCard organism for displaying host profile information
 *
 * Shows host details, ratings, response stats, and contact options
 *
 * @param props - Component props
 * @returns HostCard component
 */
export const HostCard = ({
	name,
	avatar,
	bio,
	rating,
	reviewCount = 0,
	responseRate,
	responseTime,
	isSuperhost = false,
	joinedDate,
	listingsCount,
	onContact,
	className = ''
}: HostCardProps) => {
	return (
		<div className={`card bg-base-100 shadow-lg border border-base-200 ${className}`.trim()}>
			<div className="card-body p-6">
				{/* Host Header */}
				<div className="flex items-start gap-4">
					{/* Avatar */}
					<div className="relative">
						<Avatar
							src={avatar}
							alt={name}
							size="lg"
							status={isSuperhost ? 'online' : undefined}
						/>
						{isSuperhost && (
							<div className="absolute -bottom-1 -right-1 bg-primary text-primary-content rounded-full p-1">
								<Icon name="verified" size="sm" />
							</div>
						)}
					</div>

					{/* Host Info */}
					<div className="flex-1">
						<h3 className="font-heading text-xl font-bold">{name}</h3>

						{/* Superhost Badge */}
						{isSuperhost && (
							<Badge size="sm" variant="primary" className="mt-1">
								Superhost
							</Badge>
						)}

						{/* Member Since */}
						{joinedDate && (
							<p className="text-sm text-base-content/60 mt-1">
								Hosting since {joinedDate}
							</p>
						)}
					</div>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-3 gap-4 my-4 py-4 border-y border-base-200">
					{/* Reviews */}
					<div className="text-center">
						<div className="font-bold text-lg">{reviewCount}</div>
						<div className="text-xs text-base-content/60">Reviews</div>
					</div>

					{/* Rating */}
					{rating !== undefined && (
						<div className="text-center">
							<div className="font-bold text-lg flex items-center justify-center gap-1">
								{rating.toFixed(1)}
								<Icon name="star" size="sm" className="text-warning" fill />
							</div>
							<div className="text-xs text-base-content/60">Rating</div>
						</div>
					)}

					{/* Listings */}
					{listingsCount !== undefined && (
						<div className="text-center">
							<div className="font-bold text-lg">{listingsCount}</div>
							<div className="text-xs text-base-content/60">Listings</div>
						</div>
					)}
				</div>

				{/* Bio */}
				{bio && (
					<p className="text-sm text-base-content/80 line-clamp-3 mb-4">
						{bio}
					</p>
				)}

				{/* Response Info */}
				<div className="space-y-2 mb-4">
					{responseRate !== undefined && (
						<div className="flex items-center gap-2 text-sm">
							<Icon name="reply" size="sm" className="text-base-content/60" />
							<span>Response rate: {responseRate}%</span>
						</div>
					)}
					{responseTime && (
						<div className="flex items-center gap-2 text-sm">
							<Icon name="schedule" size="sm" className="text-base-content/60" />
							<span>Responds {responseTime}</span>
						</div>
					)}
				</div>

				{/* Contact Button */}
				<Button
					style="outline"
					className="w-full"
					onClick={onContact}
				>
					<Icon name="chat" size="sm" />
					Contact Host
				</Button>

				{/* Safety Notice */}
				<p className="text-xs text-base-content/50 text-center mt-3">
					<Icon name="shield" size="sm" className="inline mr-1" />
					To protect your payment, never transfer money outside of the platform.
				</p>
			</div>
		</div>
	);
};
