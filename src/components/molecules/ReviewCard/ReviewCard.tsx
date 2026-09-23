import { Avatar } from '../../atoms/Avatar';
import { Rating } from '../../atoms/Rating';
import type { ReviewCardProps } from './ReviewCardProps';

/**
 * ReviewCard component for displaying user reviews with avatar, rating, and content
 *
 * @param props - Component props
 * @returns ReviewCard component
 */
export const ReviewCard = ({
	author,
	rating,
	content,
	date,
	avatarSrc,
	avatarPlaceholder,
	className = ''
}: ReviewCardProps) => {
	// Format date
	const formatDate = (dateInput: string | Date): string => {
		const dateObj = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
		return dateObj.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	// Get initials from author name if no placeholder provided
	const getInitials = (name: string): string => {
		return name
			.split(' ')
			.map(word => word[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	};

	const placeholder = avatarPlaceholder || getInitials(author);

	return (
		<article
			className={`card bg-base-100 shadow-md p-4 sm:p-6 ${className}`}
			aria-label={`Review by ${author}, ${rating} out of 5 stars`}
		>
			<div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
				{/* Avatar */}
				<Avatar
					src={avatarSrc}
					placeholder={avatarSrc ? undefined : placeholder}
					alt={author}
					size="md"
					shape="circle"
				/>

				{/* Review Content */}
				<div className="flex-1 w-full">
					{/* Author and Rating */}
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
						<div>
							<h3 className="font-semibold text-base sm:text-lg">{author}</h3>
							<p className="text-xs sm:text-sm text-base-content/60">{formatDate(date)}</p>
						</div>
						<Rating
							name={`review-${author}-${date}`}
							value={rating}
							readOnly
							size="sm"
							color="bg-warning"
						/>
					</div>

					{/* Review Text */}
					<p className="text-sm sm:text-base text-base-content/80 leading-relaxed">{content}</p>
				</div>
			</div>
		</article>
	);
};
