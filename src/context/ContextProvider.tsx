import React, { useEffect, useState } from 'react';
import Context from './';
import { CartItem } from '../../types';
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

	return (
		<Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>
	);
};

export default ContextProvider;
