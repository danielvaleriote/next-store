import React, { useEffect, useState } from 'react';
import Context from './';
import { CartItem, Product, Popup } from '../../types';
type Props = { children: React.ReactNode };

const ContextProvider = ({ children }: Props) => {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [popup, setPopup] = useState<Popup>({
		active: false,
		currPopupId: '',
	});

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

	const actions = {
		addProduct: (product: Product) => {
			const products = [...cart];
			const productIdx = products.findIndex((p) => p.id === product.id);

			if (productIdx === -1) products.push({ ...product, count: 1 });
			else products[productIdx].count++;

			setCart(products);
		},

		changeProductCount: (id: number, newCount: number) => {
			const products = [...cart];
			const productIdx = products.findIndex((p) => p.id === id);

			if (productIdx === -1) return;
			if (newCount === 0) products.splice(productIdx, 1);
			else products[productIdx].count = newCount;

			setCart(products);
		},
	};

	return (
		<Context.Provider value={{ cart, setCart, actions, popup, setPopup }}>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
