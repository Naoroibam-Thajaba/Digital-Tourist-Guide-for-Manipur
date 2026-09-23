import { useApi } from '../../../hooks/useApi';
import { guidesService } from '../../../services/guides.service';
import { ListingGrid } from '../../organisms/ListingGrid';
import type { ListingCardProps } from '../../molecules/ListingCard';
import type { Guide } from '../../../types/api.types';

const transformGuide = (guide: Guide): Omit<ListingCardProps, 'isSaved' | 'onSave'> => ({
	id: guide.id,
	type: 'guide',
	title: guide.name,
	image: guide.avatar || '',
	location: `${guide.location}, ${guide.district}`,
	rating: guide.rating,
	reviewCount: guide.reviewCount,
	price: guide.pricePerDay,
	period: 'per day',
	badges: guide.verified ? [{ label: 'Verified', variant: 'success' as const }] : undefined,
});

export const Guides = () => {
	const { data, loading, error } = useApi(() => guidesService.getAll({ limit: 20 }), []);
	const guides = data?.data?.map(transformGuide) || [];

	return (
		<main className="min-h-screen bg-base-200 py-10 md:py-16">
			<div className="container mx-auto px-4">
				<div className="mb-8">
					<p className="text-sm font-semibold uppercase tracking-wide text-primary">One Manipur Tourism</p>
					<h1 className="font-heading text-3xl md:text-4xl font-bold mt-2">Local Guides in Manipur</h1>
					<p className="text-base-content/70 mt-2 max-w-2xl">
						Meet verified local guides for culture walks, nature trails, food tours, and Loktak Lake experiences.
					</p>
				</div>

				<ListingGrid
					listings={guides}
					loading={loading}
					skeletonCount={4}
					columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
					emptyTitle={error ? 'Guides are unavailable' : 'No guides found'}
					emptyMessage={error ? 'Start the backend and seed the guide data to see local guides.' : 'New local guides will appear here soon.'}
				/>
			</div>
		</main>
	);
};
