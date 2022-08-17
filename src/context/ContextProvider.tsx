import React, { useEffect, useState } from 'react';
import Context from './';
import { CartItem, Product } from '../../types';
type Props = { children: React.ReactNode };

const ContextProvider = ({ children }: Props) => {
	const [cart, setCart] = useState<CartItem[]>([]);

	useEffect(() => {
		const localCart = localStorage.getItem('cart');
		if (!localCart) return;

		try {
			const cart = JSON.parse(localCart);
			if (Array.isArray(cart) && cart.length > 0) setCart(cart);
		} catch (err) {
			console.error(err);
		}
	}, []);

	useEffect(() => updateLocalCart(), [cart]);

	const updateLocalCart = () =>
		localStorage.setItem('cart', JSON.stringify(cart));

	const addProduct = (product: Product) => {
		if (product) {
			const products = [...cart];
			let productIdx;

			const isInCart = products.some((p, idx) => {
				if (p.id !== product.id) return false;

				productIdx = idx;
				return true;
			});

			if (!isInCart) setCart([...products, { ...product, count: 1 }]);
			else {
				if (productIdx || productIdx === 0) {
					products[productIdx].count++;

					setCart(products);
				}
			}
		}
	};

	const removeProduct = (productId: number) => {
		if (productId) {
			let products = [...cart];

			const productIdx = products.findIndex((p) => p.id === productId);
			if (productIdx === -1) return;

			products.splice(productIdx, 1);

			setCart(products);
		}
	};

	return (
		<Context.Provider value={{ cart, setCart, addProduct, removeProduct }}>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
