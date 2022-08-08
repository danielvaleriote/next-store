import { Product } from '../../types';

const inDevelopment = process.env.NODE_ENV === 'development';

export const fetchProducts = async (path: string): Promise<any> => {
	const apiBaseUrl = inDevelopment
		? 'http://localhost:3001/products'
		: process.env.API_BASE_URL;

	return fetch(apiBaseUrl + path).then((res) => res.json());
};

export const filterProductsList = (products: Product[], query: string) => {
	query.trim();

	return products.filter((p) =>
		p.title.toLowerCase().includes(query.toLowerCase())
	);
};
