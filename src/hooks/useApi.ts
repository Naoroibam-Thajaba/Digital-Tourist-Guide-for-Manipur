import { useState, useEffect, useCallback } from 'react';

/**
 * Result type for useApi hook
 */
interface UseApiResult<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
	refetch: () => void;
}

/**
 * Generic API hook for fetching data
 *
 * @param fetchFn - Async function that fetches data
 * @param deps - Dependency array for refetching
 * @param options - Additional options
 * @returns API state with data, loading, error, and refetch function
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useApi(
 *   () => homestaysService.getById(id),
 *   [id]
 * );
 * ```
 */
export function useApi<T>(
	fetchFn: () => Promise<T>,
	deps: unknown[] = [],
	options: { immediate?: boolean } = { immediate: true }
): UseApiResult<T> {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(options.immediate ?? true);
	const [error, setError] = useState<Error | null>(null);

	const fetch = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const result = await fetchFn();
			setData(result);
		} catch (err) {
			setError(err as Error);
		} finally {
			setLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);

	useEffect(() => {
		if (options.immediate !== false) {
			fetch();
		}
	}, [fetch, options.immediate]);

	return { data, loading, error, refetch: fetch };
}

/**
 * Mutation hook for POST/PUT/DELETE operations
 */
interface UseMutationResult<T, V> {
	data: T | null;
	loading: boolean;
	error: Error | null;
	mutate: (variables: V) => Promise<T | null>;
	reset: () => void;
}

/**
 * Generic mutation hook for creating/updating/deleting data
 *
 * @param mutationFn - Async function that performs the mutation
 * @returns Mutation state with mutate function
 *
 * @example
 * ```tsx
 * const { mutate, loading, error } = useMutation(
 *   (data: CreateBookingData) => bookingsService.create(data)
 * );
 *
 * const handleSubmit = async () => {
 *   await mutate(bookingData);
 * };
 * ```
 */
export function useMutation<T, V>(
	mutationFn: (variables: V) => Promise<T>
): UseMutationResult<T, V> {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const mutate = useCallback(
		async (variables: V): Promise<T | null> => {
			setLoading(true);
			setError(null);
			try {
				const result = await mutationFn(variables);
				setData(result);
				return result;
			} catch (err) {
				setError(err as Error);
				return null;
			} finally {
				setLoading(false);
			}
		},
		[mutationFn]
	);

	const reset = useCallback(() => {
		setData(null);
		setError(null);
		setLoading(false);
	}, []);

	return { data, loading, error, mutate, reset };
}
