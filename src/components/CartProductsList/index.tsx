import React, { useContext } from 'react';
import { ProductsList } from './styled';
import { CartItem } from '../../../types';
import CartProductItem from '../CartProductItem';
import Popup from '../Popup';
import { AiFillCloseCircle } from 'react-icons/ai';
import context from '../../context';

const CartProductsList = ({ cart }: { cart: CartItem[] }) => {
	const ctx = useContext(context);
	return (
		<ProductsList>
			{cart.map((item) => {
				return <CartProductItem cartItem={item} key={item.id} />;
			})}
			{ctx.popup.active && ctx.popup.currPopupId === 'removeFromCart' && (
				<Popup popupId="removeFromCart" variant="danger">
					<AiFillCloseCircle size={25} />
					Produto removido do carrinho.
				</Popup>
			)}
		</ProductsList>
	);
};

export default CartProductsList;
