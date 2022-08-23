import type { NextPage, GetStaticProps } from 'next';
import { fetchProducts } from '../../utils/products';
import { Product } from '../../../types';
import ProductsPage from '../../components/ProductsPage';
import React from 'react';
import Head from 'next/head';

interface Props {
	products: Product[];
}

const Electronics: NextPage<Props> = ({ products }: Props) => {
	return (
		<>
			<Head>
				<title>Eletrônicos | Next Store</title>
			</Head>
			<ProductsPage products={products}></ProductsPage>;
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const products: Product[] = await fetchProducts('/category/electronics');

	return { props: { products: products } };
};

export default Electronics;
