import { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import cartContext from '../../../context';
import { Title, Container, EmptyCartMsg } from './styled';

const cart: NextPage = () => {
	const { cart } = useContext(cartContext);

	return (
		<>
			<Head>
				<title>Carrinho de compras - Next Store</title>
				<meta name="description" content="Carrinho de compras do usuário." />
			</Head>
			<Container>
				<Title>Meu carrinho</Title>
				<hr style={{ marginBottom: '5px' }} />
				{cart && cart.length === 0 && (
					<EmptyCartMsg>O carrinho está vazio.</EmptyCartMsg>
				)}
			</Container>
		</>
	);
};

export default cart;
