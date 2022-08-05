import type { NextPage, GetStaticProps } from 'next';
import { fetchProducts } from '../utils/products';
import { Product } from '../../types';
import ProductsPage from '../components/ProductsPage';

interface Props {
	products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
	return <ProductsPage products={products}></ProductsPage>;
};

export const getStaticProps: GetStaticProps = async () => {
	const products: Product[] = await fetchProducts('/');

	return { props: { products: products } };
};

export default Home;
