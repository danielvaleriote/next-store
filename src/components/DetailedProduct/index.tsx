import { useContext } from 'react';
import {
	Container,
	StyledProduct,
	ImageContainer,
	PriceAndRating,
	Price,
	Rating,
	AddToCartBtn,
	Description,
	DescriptionContainer,
	Title,
} from './styled';

import Stars from 'react-star-ratings';

import { Product } from '../../../types';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import cartContext from '../../context';
import Popup from '../Popup';

const DetailedProduct = ({ product }: { product: Product }) => {
	if (!product) return <div>Error</div>;

	const { title, description, rating, image, price } = product;

	const context = useContext(cartContext);

	return (
		<Container>
			<StyledProduct>
				<Title>{title}</Title>
				<ImageContainer>
					<Image
						src={image}
						alt={product.title}
						layout="fill"
						objectFit="contain"
					/>
				</ImageContainer>
				<PriceAndRating>
					<Price>
						R${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
					</Price>
					<Rating>
						<Stars
							rating={rating.rate}
							starRatedColor="#ffd055"
							starEmptyColor="gray"
							name="rating"
							starDimension="15px"
							starSpacing="0px"
						/>
						({rating.count})
					</Rating>
				</PriceAndRating>
				<AddToCartBtn
					onClick={() => {
						context.actions.addProduct(product);

						context.setPopup({ active: true, currPopupId: 'addToCart' });
					}}
				>
					Adicionar ao carrinho{' '}
					<FaShoppingCart style={{ transform: 'translateY(2px)' }} />
				</AddToCartBtn>
				<DescriptionContainer>
					<h3>DESCRIÇÃO DO PRODUTO</h3>
					<Description>{description}</Description>
				</DescriptionContainer>
			</StyledProduct>
			{context.popup.active && (
				<Popup popupId={context.popup.currPopupId}>
					Produto adicionado ao carrinho
					<FaShoppingCart size={20} />
				</Popup>
			)}
		</Container>
	);
};

export default DetailedProduct;
