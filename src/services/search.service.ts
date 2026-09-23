import api from './api';
import type { ApiResponse, SearchResult, SearchParams } from '../types/api.types';

/**
 * Search service for unified search operations
 */
export const searchService = {
	/**
	 * Search across all listing types
	 */
	async search(params: SearchParams): Promise<ApiResponse<SearchResult[]>> {
		const response = await api.get<ApiResponse<SearchResult[]>>('/search', { params });
		return response.data;
	},

	/**
	 * Get autocomplete suggestions
	 */
	async getSuggestions(query: string): Promise<string[]> {
		const response = await api.get<{ data: string[] }>('/search/suggestions', {
			params: { q: query }
		});
		return response.data.data;
	},
};
