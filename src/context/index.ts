import { createContext } from 'react';
import { CartItem, Product } from '../../types';

export default createContext<{
	cart: CartItem[];
	setCart?: React.Dispatch<React.SetStateAction<CartItem[]>>;
	actions: {
		addProduct: (product: Product) => void;
		changeProductCount: (productId: number, newCount: number) => void;
	};
	popup: { active: boolean; currPopupId: string };
	setPopup: React.Dispatch<
		React.SetStateAction<{
			active: boolean;
			currPopupId: string;
		}>
	>;
}>({
	cart: [],
	setCart: undefined,
	actions: {
		addProduct: () => {},
		changeProductCount: () => {},
	},
	popup: { active: false, currPopupId: '' },
	setPopup: () => {},
});
