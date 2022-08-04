import React from 'react';
import type { Product } from '../../../types';

type Props = {
	products: Product[];
};

const ProductsPage = ({ products }: Props) => {
	return (
		<>
			{products.map((p) => (
				<p>{p.title}</p>
			))}
		</>
	);
};

export default ProductsPage;
