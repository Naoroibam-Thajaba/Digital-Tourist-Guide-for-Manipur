import { useState } from 'react';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import { ListingGrid } from '../../organisms/ListingGrid';
import { SearchFilters, defaultFilterState } from '../../organisms/SearchFilters';
import type { FilterState } from '../../organisms/SearchFilters';
import type { HomestaysProps } from './HomestaysProps';
import { useApi } from '../../../hooks/useApi';
import { homestaysService } from "../../../services/homestays.service.ts";
import type { Homestay } from "../../../types/api.types.ts";
import type { ListingCardProps } from '../../molecules/ListingCard';

/** Transform Homestay to ListingGrid format */
const transformHomestay = (homestay: Homestay): Omit<ListingCardProps, 'isSaved' | 'onSave'> => ({
	id: homestay.id,
	type: 'homestay' as const,
	title: homestay.title,
	image: homestay.images[0] || '',
	location: homestay.location,
	rating: homestay.rating,
	reviewCount: homestay.reviewCount,
	price: homestay.price,
	period: 'per night',
});

/**
 * Homestays page component for browsing homestay listings
 */
export const Homestays = ({
	homestays: externalHomestays,
	totalCount: externalTotalCount,
	loading: externalLoading = false,
	filters: externalFilters,
	onFilterChange,
	onApplyFilters,
	onClearFilters,
	savedIds = [],
	onSave,
	page = 1,
	totalPages = 8,
	onPageChange,
	className = '',
}: HomestaysProps) => {
	// Fetch homestays from API (uses VITE_API_BASE_URL from .env)
	const { data: apiData, loading: apiLoading, error } = useApi(
		() => homestaysService.getAll(),
		[]
	);

	// Transform API data to ListingCard format
	const apiListings = apiData?.data?.map(transformHomestay) || [];
	const externalListings = externalHomestays?.map(transformHomestay) || [];

	// Use external data if provided, otherwise use API data
	const listings = externalListings.length > 0 ? externalListings : apiListings;

	const loading = externalLoading || apiLoading;
	const totalCount = externalTotalCount ?? apiData?.meta?.total ?? listings.length;

	// Internal filter state (used if no external control)
	const [internalFilters, setInternalFilters] = useState<FilterState>({
		...defaultFilterState,
		listingType: 'homestay',
	});
	const [showMobileFilters, setShowMobileFilters] = useState(false);
	const [sortBy, setSortBy] = useState<'recommended' | 'price-low' | 'price-high' | 'rating'>('recommended');

	// Use external or internal filters
	const filters = externalFilters || internalFilters;
	const handleFilterChange = onFilterChange || setInternalFilters;
	const handleClearFilters = onClearFilters || (() => setInternalFilters({
		...defaultFilterState,
		listingType: 'homestay',
	}));

	return (
		<div className={`min-h-screen bg-base-200 ${className}`.trim()}>
			{/* Page Header */}
			<div className="bg-base-100 border-b border-base-200">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<div>
							<h1 className="font-heading text-2xl md:text-3xl font-bold">
								Homestays in Jharkhand
							</h1>
							<p className="text-base-content/60 mt-1">
								{loading ? 'Loading...' : `${totalCount} authentic tribal homestays`}
							</p>
						</div>

						{/* Sort & Filter Controls */}
						<div className="flex items-center gap-3">
							{/* Sort Dropdown */}
							<div className="dropdown dropdown-end">
								<label tabIndex={0} className="btn btn-ghost btn-sm gap-2">
									<Icon name="sort" size="sm" />
									Sort
								</label>
								<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52">
									{[
										{ value: 'recommended', label: 'Recommended' },
										{ value: 'price-low', label: 'Price: Low to High' },
										{ value: 'price-high', label: 'Price: High to Low' },
										{ value: 'rating', label: 'Top Rated' },
									].map((option) => (
										<li key={option.value}>
											<button
												onClick={() => setSortBy(option.value as typeof sortBy)}
												className={sortBy === option.value ? 'active' : ''}
											>
												{option.label}
											</button>
										</li>
									))}
								</ul>
							</div>

							{/* Mobile Filter Button */}
							<Button
								style="outline"
								size="sm"
								className="lg:hidden"
								onClick={() => setShowMobileFilters(true)}
							>
								<Icon name="filter_list" size="sm" />
								Filters
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="container mx-auto px-4 py-6">
				<div className="flex gap-6">
					{/* Desktop Filters Sidebar */}
					<aside className="hidden lg:block w-72 flex-shrink-0">
						<div className="sticky top-20">
							<SearchFilters
								filters={filters}
								onChange={handleFilterChange}
								onClear={handleClearFilters}
								listingType="homestay"
								showListingTypeSelector={false}
							/>
						</div>
					</aside>

					{/* Listings Grid */}
					<div className="flex-1">
						<ListingGrid
							listings={listings}
							loading={loading}
							skeletonCount={6}
							savedIds={savedIds}
							onSave={onSave}
							columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
							emptyTitle={error ? "Unable to load homestays" : "No homestays found"}
							emptyMessage={error ? "Please check your connection and try again." : "Try adjusting your filters to find more results."}
						/>

						{/* Pagination */}
						{!loading && listings.length > 0 && totalPages > 1 && (
							<div className="mt-8 flex justify-center">
								<div className="join">
									<button
										className="join-item btn btn-sm"
										disabled={page <= 1}
										onClick={() => onPageChange?.(page - 1)}
									>
										<Icon name="chevron_left" size="sm" />
									</button>

									{Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
										let pageNum: number;
										if (totalPages <= 5) {
											pageNum = i + 1;
										} else if (page <= 3) {
											pageNum = i + 1;
										} else if (page >= totalPages - 2) {
											pageNum = totalPages - 4 + i;
										} else {
											pageNum = page - 2 + i;
										}

										return (
											<button
												key={pageNum}
												className={`join-item btn btn-sm ${page === pageNum ? 'btn-active' : ''}`}
												onClick={() => onPageChange?.(pageNum)}
											>
												{pageNum}
											</button>
										);
									})}

									<button
										className="join-item btn btn-sm"
										disabled={page >= totalPages}
										onClick={() => onPageChange?.(page + 1)}
									>
										<Icon name="chevron_right" size="sm" />
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Mobile Filter Drawer */}
			{showMobileFilters && (
				<>
					{/* Backdrop */}
					<div
						className="fixed inset-0 bg-black/50 z-40 lg:hidden"
						onClick={() => setShowMobileFilters(false)}
					/>

					{/* Drawer */}
					<div className="fixed inset-y-0 right-0 w-full max-w-sm bg-base-100 z-50 lg:hidden shadow-xl">
						{/* Drawer Header */}
						<div className="flex items-center justify-between p-4 border-b border-base-200">
							<h3 className="font-semibold text-lg">Filters</h3>
							<Button
								style="ghost"
								size="sm"
								className="btn-circle"
								onClick={() => setShowMobileFilters(false)}
							>
								<Icon name="close" size="md" />
							</Button>
						</div>

						{/* Filters */}
						<SearchFilters
							filters={filters}
							onChange={handleFilterChange}
							onClear={handleClearFilters}
							onApply={() => {
								onApplyFilters?.();
								setShowMobileFilters(false);
							}}
							listingType="homestay"
							showListingTypeSelector={false}
							isMobileDrawer
						/>
					</div>
				</>
			)}
		</div>
	);
};
