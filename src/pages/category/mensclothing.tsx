import type { NextPage, GetStaticProps } from 'next';
import { fetchProducts } from '../../utils/products';
import { Product } from '../../../types';
import ProductsPage from '../../components/ProductsPage';
import React from 'react';

interface Props {
	products: Product[];
}

const MensClothing: NextPage<Props> = ({ products }: Props) => {
	return <ProductsPage products={products} />;
};

export const getStaticProps: GetStaticProps = async () => {
	const products: Product[] = await fetchProducts("/category/men's clothing");

	return { props: { products: products } };
};

export default MensClothing;