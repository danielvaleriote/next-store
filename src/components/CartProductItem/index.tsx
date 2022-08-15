import React from 'react';
import { CartItem } from '../../../types';
import cart from '../../pages/user/cart';
import {
	StyledItem,
	StyledImage,
	ImageContainer,
	ProductTitle,
	ProductContainer,
	PriceAndCount,
	PriceContainer,
	BtnsContainer,
	ChangeCountBtn,
	RemoveProductBtn,
} from './styled';
import { FaTrash } from 'react-icons/fa';

const CartProductItem = ({ cartItem }: { cartItem: CartItem }) => {
	return (
		cartItem && (
			<ProductContainer>
				<StyledItem>
					<ImageContainer>
						<StyledImage
							src={cartItem.image}
							objectFit="contain"
							width={180}
							height={140}
						/>
					</ImageContainer>
					<ProductTitle>{cartItem.title}</ProductTitle>
					<PriceContainer>
						<PriceAndCount>
							{cartItem.count}x R$ {cartItem.price}{' '}
						</PriceAndCount>
						<h4 style={{ fontWeight: 'normal' }}>
							Total:{' '}
							<b>
								R${' '}
								{cartItem.price.toLocaleString(undefined, {
									minimumFractionDigits: 2,
								})}
							</b>
						</h4>
					</PriceContainer>
					<BtnsContainer>
						<div>
							<ChangeCountBtn>-</ChangeCountBtn>
							{` ${cartItem.count} `}
							<ChangeCountBtn>+</ChangeCountBtn>
						</div>
						<RemoveProductBtn>
							<FaTrash size={20} />
						</RemoveProductBtn>
					</BtnsContainer>
				</StyledItem>
			</ProductContainer>
		)
	);
};

export default CartProductItem;
