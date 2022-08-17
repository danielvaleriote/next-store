import { createContext } from 'react';
import { CartItem, Product } from '../../types';

export default createContext<{
	cart?: CartItem[];
	setCart?: React.Dispatch<React.SetStateAction<CartItem[]>>;
	addProduct: (product: Product) => void;
	removeProduct: (productId: number) => void;
}>({
	cart: undefined,
	setCart: undefined,
	addProduct: () => {},
	removeProduct: () => {},
});
