import { useContext } from 'react';
import {
	AddToCartButton,
	ImageContainer,
	ProductImage,
	InfoContainer,
	Price,
	Rating,
	Title,
	StyledProductItem,
} from './styled';
import { Product } from '../../../types';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import cartContext from '../../context';
const StarRatings = dynamic(() => import('react-star-ratings'), {
	ssr: false,
});

type Props = { product: Product };

const ProductItem = ({ product }: Props) => {
	const { title, rating, price, image } = product;
	const context = useContext(cartContext);

	return (
		<StyledProductItem>
			<ImageContainer>
				<ProductImage
					src={image}
					alt={product.title}
					width={340}
					height={229}
				/>
			</ImageContainer>
			<InfoContainer>
				<Title>
					<Link href={'/products/' + product.id}>{title}</Link>
				</Title>
				<Price>
					R$
					{price.toLocaleString(undefined, {
						minimumFractionDigits: 2,
					})}
				</Price>
				<Rating>
					<StarRatings
						rating={rating.rate}
						starRatedColor="#ffd055"
						starEmptyColor="gray"
						name="rating"
						starDimension="15px"
						starSpacing="0px"
					/>
					({rating.count})
				</Rating>
			</InfoContainer>
			<AddToCartButton onClick={() => context.actions.addProduct(product)}>
				Adicionar ao carrinho
				<FaShoppingCart
					size={14}
					style={{ marginLeft: '10px', transform: 'translateY(2px)' }}
				/>
			</AddToCartButton>
		</StyledProductItem>
	);
};

export default ProductItem;
