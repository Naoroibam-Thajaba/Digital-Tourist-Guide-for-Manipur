import { Icon } from '../../atoms/Icon';
import { Skeleton } from '../../atoms/Skeleton';
import { ListingCard } from '../../molecules/ListingCard';
import type { GridColumns, ListingGridProps } from './ListingGridProps';

/**
 * Get grid column classes based on configuration
 */
const getGridClasses = (columns: GridColumns = {}): string => {
	const { sm = 1, md = 2, lg = 3, xl = 4 } = columns;

	const colClasses = {
		1: 'grid-cols-1',
		2: 'grid-cols-2',
		3: 'grid-cols-3',
		4: 'grid-cols-4',
		5: 'grid-cols-5',
		6: 'grid-cols-6',
	};

	return [
		colClasses[sm as keyof typeof colClasses] || 'grid-cols-1',
		`sm:${colClasses[sm as keyof typeof colClasses] || 'grid-cols-1'}`,
		`md:${colClasses[md as keyof typeof colClasses] || 'grid-cols-2'}`,
		`lg:${colClasses[lg as keyof typeof colClasses] || 'grid-cols-3'}`,
		`xl:${colClasses[xl as keyof typeof colClasses] || 'grid-cols-4'}`,
	].join(' ');
};

/**
 * Skeleton card for loading state
 */
const SkeletonCard = () => (
	<div className="card bg-base-100 shadow-md">
		<figure className="aspect-[4/3]">
			<Skeleton className="w-full h-full" />
		</figure>
		<div className="card-body p-4 space-y-3">
			<Skeleton className="h-5 w-3/4" />
			<Skeleton className="h-4 w-1/2" />
			<div className="flex justify-between items-center">
				<Skeleton className="h-4 w-20" />
				<Skeleton className="h-5 w-16" />
			</div>
		</div>
	</div>
);

/**
 * Empty state component
 */
const EmptyState = ({ title, message }: { title: string; message: string }) => (
	<div
		className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center"
		role="status"
		aria-live="polite"
	>
		<div className="w-24 h-24 rounded-full bg-base-200 flex items-center justify-center mb-6" aria-hidden="true">
			<Icon name="search_off" size="xl" className="text-base-content/40" />
		</div>
		<h3 className="text-xl font-semibold text-base-content mb-2">{title}</h3>
		<p className="text-base-content/60 max-w-md">{message}</p>
	</div>
);

/**
 * ListingGrid organism component for displaying listing cards in a responsive grid
 *
 * @param props - Component props
 * @returns ListingGrid component
 */
export const ListingGrid = ({
	listings,
	loading = false,
	skeletonCount = 8,
	emptyTitle = 'No listings found',
	emptyMessage = 'Try adjusting your search or filters to find what you\'re looking for.',
	columns,
	onSave,
	savedIds = [],
	className = ''
}: ListingGridProps) => {
	const gridClasses = getGridClasses(columns);
	const savedSet = new Set(savedIds);

	// Loading state
	if (loading) {
		return (
			<div
				className={`grid ${gridClasses} gap-4 md:gap-6 ${className}`.trim()}
				role="region"
				aria-label="Search results"
				aria-busy="true"
			>
				{Array.from({ length: skeletonCount }).map((_, index) => (
					<SkeletonCard key={index} />
				))}
			</div>
		);
	}

	// Empty state
	if (listings.length === 0) {
		return (
			<div className={`grid ${gridClasses} gap-4 md:gap-6 ${className}`.trim()}>
				<EmptyState title={emptyTitle} message={emptyMessage} />
			</div>
		);
	}

	// Listings grid
	return (
		<div
			className={`grid ${gridClasses} gap-4 md:gap-6 ${className}`.trim()}
			role="region"
			aria-label={`${listings.length} listing${listings.length !== 1 ? 's' : ''} found`}
		>
			{listings.map((listing) => (
				<ListingCard
					key={listing.id}
					{...listing}
					isSaved={savedSet.has(listing.id)}
					onSave={onSave}
				/>
			))}
		</div>
	);
};
