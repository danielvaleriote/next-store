import React from 'react';
import { ProductsList } from './styled';
import { CartItem } from '../../../types';
import CartProductItem from '../CartProductItem';

const CartProductsList = ({ cart }: { cart: CartItem[] }) => {
	return (
		<ProductsList>
			{cart.map((item) => {
				return <CartProductItem cartItem={item} key={item.id} />;
			})}
		</ProductsList>
	);
};

export default CartProductsList;
