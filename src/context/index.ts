import { createContext } from 'react';
import { CartItem } from '../../types';

export default createContext<{
	cart?: CartItem[];
	setCart?: React.Dispatch<React.SetStateAction<CartItem[]>>;
}>({ cart: undefined, setCart: undefined });
