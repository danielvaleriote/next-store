import styled from 'styled-components';
import Image from 'next/image';

export const StyledProductItem = styled.li`
	overflow: hidden;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	background-color: #fff;
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 250px;
	padding: 10px;
	border-bottom: 1px solid #3030302f;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ProductImage = styled(Image)`
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

export const Title = styled.h2`
	grid-area: title;
	font-size: 15px;
	font-weight: 600;
	text-align: center;
	overflow: hidden;
`;

export const Price = styled.h4`
	grid-area: price;
	text-align: center;
	color: var(--main-green);
	font-weight: 600;
	font-size: 15px;
`;

export const Rating = styled.h4`
	grid-area: rating;
	text-align: center;

	& abbr {
		text-decoration: none;
	}
`;

export const InfoContainer = styled.div`
	height: 120px;
	width: 100%;
	display: grid;
	grid-template:
		'title title' 80px
		'price rating' auto
		/ 2fr 3fr;
	padding: 5px;
	justify-content: center;
	align-items: center;
	max-width: 300px;
	margin: 0 auto;
`;

export const AddToCartButton = styled.button`
	background-color: var(--main-blue);
	height: 40px;
	outline: 0;
	border: 0;
	color: var(--main-white);
	width: 100%;
	font-size: 14px;
	font-weight: bold;
	text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
	text-transform: uppercase;

	&:hover {
		background-color: var(--dark-blue);
		cursor: pointer;
	}
`;
