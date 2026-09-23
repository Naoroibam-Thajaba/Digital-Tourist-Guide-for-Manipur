import api from './api';
import type { ApiResponse, Booking, CreateBookingData } from '../types/api.types';

/**
 * Bookings service for API operations
 */
export const bookingsService = {
	/**
	 * Get all bookings for current user
	 */
	async getAll(): Promise<ApiResponse<Booking[]>> {
		const response = await api.get<ApiResponse<Booking[]>>('/bookings');
		return response.data;
	},

	/**
	 * Get a single booking by ID
	 */
	async getById(id: string): Promise<Booking> {
		const response = await api.get<{ data: Booking }>(`/bookings/${id}`);
		return response.data.data;
	},

	/**
	 * Create a new booking
	 */
	async create(data: CreateBookingData): Promise<Booking> {
		const response = await api.post<{ data: Booking }>('/bookings', data);
		return response.data.data;
	},

	/**
	 * Cancel a booking
	 */
	async cancel(id: string): Promise<Booking> {
		const response = await api.put<{ data: Booking }>(`/bookings/${id}/cancel`);
		return response.data.data;
	},
};
