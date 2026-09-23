import axios from 'axios';

/**
 * Axios instance configured for API calls
 *
 * Uses Postman Mock Server or local development server
 */
const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:2201/api',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Request interceptor
api.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Response interceptor
api.interceptors.response.use(
	(response) => response,
	(error) => {
		// Handle common errors
		if (error.response) {
			switch (error.response.status) {
				case 401:
					// Handle unauthorized - could redirect to login
					console.error('Unauthorized access');
					break;
				case 404:
					console.error('Resource not found');
					break;
				case 500:
					console.error('Server error');
					break;
				default:
					console.error('API Error:', error.response.data);
			}
		} else if (error.request) {
			console.error('Network error - no response received');
		} else {
			console.error('Request error:', error.message);
		}
		return Promise.reject(error);
	}
);

export default api;
