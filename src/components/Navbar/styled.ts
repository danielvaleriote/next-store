import styled from 'styled-components';

export const Header = styled.header`
	background-color: var(--main-black);
	display: flex;
	align-items: center;
	padding: 20px;
	position: relative;
`;

export const NavList = styled.ul`
	display: flex;
	gap: 20px;
`;

export const NavItem = styled.li`
	color: var(--main-white);
	font-size: 1.1rem;
	white-space: nowrap;
	&:first-child {
		padding-right: 20px;
	}
	& a {
		opacity: 0.7;
	}
	& a:hover {
		opacity: 0.9;
		text-shadow: 1px 1px 3px rgba(100, 100, 100, 0.8);
	}
	& .active {
		opacity: 1;
	}
`;

export const MobileNavbar = styled.nav``;

export const RegularNavbar = styled.nav``;
