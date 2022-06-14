import axios from 'axios';
import { logout } from './authService';

const URL = process.env.REACT_APP_API_HOST || 'http://localhost:44390';
let accessToken;
if (typeof window !== 'undefined') {
	accessToken = window.localStorage.getItem('token') || null;
}

export const create = (opts = {}) => {
	const http = axios.create({
		baseURL: URL + '/api',
		...opts,
	});

	http.interceptors.request.use((request) => {
		if (opts.useAccessToken !== false) {
			request.headers.common.Authorization = `Bearer ${accessToken}`;
		} else {
			delete request.headers.common.Authorization;
		}
		return request;
	});

	http.interceptors.response.use(
		(response) => response.data,
		(error) => {
			if (error.response && [401, 403].includes(error.response.status)) {
				logout();
			}

			return Promise.reject(error);
		},
	);
	return http;
};
