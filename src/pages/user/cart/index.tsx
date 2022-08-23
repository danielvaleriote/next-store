import { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import cartContext from '../../../context';
import CartProductsList from '../../../components/CartProductsList';
import Popup from '../../../components/Popup';
import { AiFillCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	text-transform: uppercase;
	font-weight: normal;
	text-align: center;
	font-size: 1.5rem;
	padding: 20px;
`;

const EmptyCartMsg = styled.h2`
	color: gray;
	text-align: center;
	font-weight: 600;
	padding: 20px;
`;

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
