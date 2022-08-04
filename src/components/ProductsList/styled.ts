import styled from 'styled-components';

export const ListContainer = styled.section`
	margin: 25px 0px 50px 0px;
	padding: 25px;
`;

export const StyledProductsList = styled.ul`
	display: grid;
	gap: 25px;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	margin: 0 auto;
`;
