import styled from 'styled-components';

export const DropdownContainer = styled.div`
	width: 80%;
	margin: 20px auto;
	position: relative;
	max-width: 250px;
`;

export const DropdownBtn = styled.button`
	width: 100%;
	height: 27px;
	padding: 5px;
	background-color: var(--main-black);
	color: #fff;
	border: 1px solid #3030304f;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

	transition: all 0.15s ease;

	&:hover {
		cursor: pointer;
	}
`;

export const List = styled.ul`
	position: absolute;
	left: 0;
	top: 27px;
	width: 100%;
	background-color: #fff;
	border-radius: 0px 0px 5px 5px;
	padding: 0;
	border: 1px solid rgba(0, 0, 0, 0.3);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
	z-index: 9;
`;

export const Item = styled.li`
	padding: 5px;
	font-size: 12px;

	&:hover {
		cursor: pointer;
		background-color: rgba(177, 177, 177, 0.3);
	}
`;
