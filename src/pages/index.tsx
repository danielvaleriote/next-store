import type { NextPage, GetStaticProps } from 'next';
import { fetchProducts } from '../utils/products';
import { Product } from '../../types';

interface Props {
	products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
	return (
		<div>
			<h1>Início</h1>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const products: Product[] = await fetchProducts('/');

	return {
		props: {
			products: products,
		},
	};
};

export default Home;
