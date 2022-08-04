import React from 'react';
import { ListContainer, StyledProductsList } from './styled';
import ProductItem from '../ProductItem';
import { Product } from '../../../types';

type Props = { products: Product[] };

const ProductsList = ({ products }: Props) => {
	return (
		<ListContainer>
			<StyledProductsList>
				{products.map((p) => (
					<ProductItem product={p} key={p.id} />
				))}
			</StyledProductsList>
		</ListContainer>
	);
};

export default ProductsList;
