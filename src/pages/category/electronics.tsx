import type { NextPage, GetStaticProps } from 'next';
import { fetchProducts } from '../../utils/products';
import { Product } from '../../../types';

import React from 'react';

interface Props {
	products: Product[];
}

const Electronics: NextPage<Props> = ({ products }: Props) => {
	return <div>Electronics</div>;
};

export const getStaticProps: GetStaticProps = async () => {
	const products: Product[] = await fetchProducts('/category/electronics');

	return { props: { products: products } };
};

export default Electronics;
