import { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import cartContext from '../../../context';
import { Title, Container, EmptyCartMsg } from './styled';
import CartProductsList from '../../../components/CartProductsList';
import Popup from '../../../components/Popup';
import { AiFillCloseCircle } from 'react-icons/ai';

const cart: NextPage = () => {
	const { cart, popup } = useContext(cartContext);

	return (
		<>
			<Head>
				<title>Carrinho de compras - Next Store</title>
				<meta name="description" content="Carrinho de compras do usuário." />
			</Head>
			<Container>
				<Title>Meu carrinho</Title>
				<hr />
				{cart && cart.length === 0 ? (
					<EmptyCartMsg>O carrinho está vazio.</EmptyCartMsg>
				) : (
					<CartProductsList cart={cart || []} />
				)}

				{popup.active && popup.currPopupId === 'removeFromCart' && (
					<Popup popupId="removeFromCart" variant="danger">
						<AiFillCloseCircle size={25} />
						Produto removido do carrinho.
					</Popup>
				)}
			</Container>
		</>
	);
};

export default cart;
