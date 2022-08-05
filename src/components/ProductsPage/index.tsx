import React, { useEffect, useState } from 'react';
import type { Product } from '../../../types';
import { filterProductsList } from '../../utils/products';
import ProductsList from '../ProductsList';
import SearchBar from '../SearchBar/index';

type Props = { products: Product[] };

const ProductsPage = ({ products }: Props) => {
	const [searchValue, setSearchValue] = useState('');
	const [displayedProducts, setDisplayedProducts] = useState(products);

	useEffect(() => {
		const filteredProducts = filterProductsList(products, searchValue);
		setDisplayedProducts(filteredProducts);
	}, [searchValue]);
	return (
		<>
			<SearchBar value={searchValue} setValue={setSearchValue} />
			<ProductsList products={displayedProducts} />
		</>
	);
};

export default ProductsPage;
