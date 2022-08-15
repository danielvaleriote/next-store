import styled from 'styled-components';
import Image from 'next/image';

export const StyledItem = styled.li`
	display: grid;
	height: 180px;
	padding: 20px;
	grid-template:
		'img title title' 3fr
		'img price buttons' 1fr
		/1fr 1fr 1fr;
	column-gap: 20px;
	max-width: 700px;
	margin: 0 auto;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	padding: 10px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: img;
`;

export const StyledImage = styled(Image)`
	width: 180px;

	max-height: 100px;
	margin: 0 auto;
	gap: 5px;
	margin-bottom: 10px;
`;

export const ProductTitle = styled.h3`
	grid-area: title;
	font-weight: 600;
	font-size: 1.17rem;
`;

export const PriceContainer = styled.div`
	grid-area: price;
	justify-self: start;
`;

export const PriceAndCount = styled.h4`
	font-weight: normal;
	justify-self: start;
`;

export const BtnsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	grid-area: buttons;
`;

export const ChangeCountBtn = styled.button`
	padding: 5px;
	border: 0;
	outline: 0;
	font-size: 1.2rem;
	background-color: transparent;

	&:hover {
		cursor: pointer;
	}
`;

export const RemoveProductBtn = styled.button`
	background-color: transparent;
	border: 0;
	outline: 0;
	transform: translateX(-3px);
	&:hover {
		cursor: pointer;
	}
`;

export const ProductContainer = styled.div`
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

	@media screen and (max-width: 650px) {
		${StyledItem} {
			display: flex;
			flex-direction: column;
			height: 370px;
			justify-content: center;
			gap: 10px;
			text-align: center;
		}

		${ProductTitle} {
			font-size: 1rem;
		}

		${BtnsContainer} {
			padding-top: 20px;
			gap: 20px;
			flex-direction: row;
		}
	}
`;
