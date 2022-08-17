import { createContext } from 'react';
import { CartItem, Product } from '../../types';

export default createContext<{
	cart?: CartItem[];
	setCart?: React.Dispatch<React.SetStateAction<CartItem[]>>;
	actions: {
		addProduct: (product: Product) => void;
		changeProductCount: (productId: number, newCount: number) => void;
	};
}>({
	cart: undefined,
	setCart: undefined,
	actions: {
		addProduct: () => {},
		changeProductCount: () => {},
	},
});
