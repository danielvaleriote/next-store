import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: #fff;
	min-height: calc(100vh - 67px);
`;

export const StyledProduct = styled.div`
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	padding: 20px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.h1`
	font-size: 1.3rem;
	font-weight: 600;
	text-align: center;
`;

export const ImageContainer = styled.div`
	position: relative;
	min-width: 90%;
	height: 270px;
	max-width: 90%;
`;

export const PriceAndRating = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
`;

export const Price = styled.h4`
	color: var(--main-green);
	font-weight: 600;
	font-size: 1.2rem;
`;

export const Rating = styled.h4`
	display: flex;
	font-weight: 600;
	gap: 5px;
`;

export const AddToCartBtn = styled.button`
	width: 100%;
	padding: 10px;
	background-color: var(--main-blue);
	outline: 0;
	border: 0;
	color: var(--main-white);
	font-weight: bold;
	border-radius: 5px;
	cursor: pointer;
	text-transform: uppercase;
	font-size: 14px;

	&:hover {
		background-color: var(--dark-blue);
	}
`;

export const DescriptionContainer = styled.div`
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	text-align: center;
	padding: 20px;
`;

export const Description = styled.p`
	margin-top: 15px;
	text-align: center;
	max-width: 530px;
	line-height: 1.8;
`;
