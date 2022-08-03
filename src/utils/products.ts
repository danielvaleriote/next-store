const isDevelopment = process.env.NODE_ENV === 'development';

export const fetchProducts = async (path: string): Promise<any> => {
	const apiBaseUrl = isDevelopment
		? 'http://localhost:3001/products'
		: process.env.API_BASE_URL;

	return fetch(apiBaseUrl + path).then((res) => res.json());
};
