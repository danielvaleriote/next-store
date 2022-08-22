import React, { useContext, useEffect, useState } from 'react';
import type { Product } from '../../../types';
import { filterProductsList } from '../../utils/products';
import ProductsList from '../ProductsList';
import SearchBar from '../SearchBar/index';
import SortDropdown from '../SortDropdown';
import { order } from '../../../types';
import context from '../../context';
import Popup from '../Popup';
import { FaShoppingCart } from 'react-icons/fa';

type Props = { products: Product[] };

const ProductsPage = ({ products }: Props) => {
	const [searchValue, setSearchValue] = useState('');
	const [displayedProducts, setDisplayedProducts] = useState(products);

	const ctx = useContext(context);

	useEffect(
		() => setDisplayedProducts(() => filterProductsList(products, searchValue)),
		[searchValue]
	);

	const handleSort = (order: order) => {
		if (!order) return;

		if (order === 'lowestPrice')
			setDisplayedProducts((products) =>
				[...products].sort((pA, pB) => pA.price - pB.price)
			);

		if (order === 'highestPrice')
			setDisplayedProducts((products) =>
				[...products].sort((pA, pB) => pB.price - pA.price)
			);

		if (order === 'rating')
			setDisplayedProducts((products) =>
				[...products].sort((pA, pB) => pB.rating.rate - pA.rating.rate)
			);
	};

	return (
		<>
			<SearchBar value={searchValue} setValue={setSearchValue} />
			<SortDropdown handleSort={handleSort} />
			{displayedProducts.length > 0 ? (
				<ProductsList products={displayedProducts} />
			) : (
				<h2 style={{ textAlign: 'center', fontWeight: 600, marginTop: '50px' }}>
					Nenhum produto encontrado.
				</h2>
			)}
			{ctx.popup.active && ctx.popup.currPopupId === 'addToCart' && (
				<Popup popupId={ctx.popup.currPopupId}>
					Produto adicionado ao carrinho
					<FaShoppingCart size={20} />
				</Popup>
			)}
		</>
	);
};

export default ProductsPage;
