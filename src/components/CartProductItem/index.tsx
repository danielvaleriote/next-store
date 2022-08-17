import React, { useContext } from 'react';
import { CartItem } from '../../../types';
import cartContext from '../../context';
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
	const context = useContext(cartContext);

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
							<ChangeCountBtn onClick={() => context.addProduct(cartItem)}>
								+
							</ChangeCountBtn>
						</div>
						<RemoveProductBtn
							onClick={() => context.removeProduct(cartItem.id)}
						>
							<FaTrash size={20} />
						</RemoveProductBtn>
					</BtnsContainer>
				</StyledItem>
			</ProductContainer>
		)
	);
};

export default CartProductItem;
