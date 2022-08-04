import React from 'react';
import type { Product } from '../../../types';
import ProductsList from '../ProductsList';

type Props = { products: Product[] };

const ProductsPage = ({ products }: Props) => {
	return (
		<>
			<ProductsList products={products} />
		</>
	);
};

export default ProductsPage;
