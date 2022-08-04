import type { NextPage, GetStaticProps } from 'next';
import { fetchProducts } from '../../utils/products';
import { Product } from '../../../types';

import React from 'react';
import ProductsPage from '../../components/ProductsPage';

interface Props {
	products: Product[];
}

const Jewelery: NextPage<Props> = ({ products }: Props) => {
	return <ProductsPage products={products} />;
};

export const getStaticProps: GetStaticProps = async () => {
	const products: Product[] = await fetchProducts('/category/jewelery');

	return { props: { products: products } };
};

export default Jewelery;
