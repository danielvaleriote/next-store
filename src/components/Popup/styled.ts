import styled from 'styled-components';

export const PopupContainer = styled.div`
	& .fadeout {
		animation: fadeout 0.6s forwards ease;
	}

	@keyframes fadeout {
		from {
			opacity: 0.95;
		}
		to {
			opacity: 0;
		}
	}
`;

export const StyledPopup = styled.div`
	position: fixed;
	left: 50%;
	bottom: 2%;
	transform: translate(-50%);
	max-width: 400px;
	width: 90%;
	min-height: 70px;
	max-height: 150px;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	color: #fff;
	background-color: var(--main-black);
	font-weight: bold;
	text-transform: uppercase;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
	text-align: center;
	letter-spacing: 0.5px;
	z-index: 9;
	opacity: 0.95;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5px;

	animation: fade 0.6s forwards ease;

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.95;
		}
	}
`;
