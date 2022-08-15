import { Product, CartItem } from '../../types';
import { Dispatch, SetStateAction } from 'react';

const inDevelopment = process.env.NODE_ENV === 'development';

export const fetchProducts = async (path: string): Promise<any> => {
	const apiBaseUrl = inDevelopment
		? 'http://localhost:3001/products'
		: process.env.API_BASE_URL;

	return fetch(apiBaseUrl + path)
		.then((res) => res.json())
		.catch((err) => console.error(err.message));
};

export const filterProductsList = (products: Product[], query: string) => {
	query.trim();

	return products.filter((p) =>
		p.title.toLowerCase().includes(query.toLowerCase())
	);
};

export const addToCart = (
	product: Product,
	setProducts?: Dispatch<SetStateAction<CartItem[]>>
) => {
	if (!setProducts) return;

	if (
		product &&
		typeof product === 'object' &&
		'id' in product &&
		'title' in product &&
		'price' in product &&
		'description' in product &&
		'category' in product &&
		'image' in product &&
		'rating' in product
	) {
		setProducts((prevProducts) => {
			const savedProductIndex = prevProducts.findIndex(
				(p) => p.id == product.id
			);

			let newCart;

			if (savedProductIndex === -1)
				newCart = [...prevProducts, { ...product, count: 1 }];
			else {
				newCart = [...prevProducts];
				newCart[savedProductIndex].count++;
			}

			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		});
	}
};
