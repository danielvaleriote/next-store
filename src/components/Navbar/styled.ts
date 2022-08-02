import styled from 'styled-components';
import Link from 'next/link';

export const Header = styled.header`
	background-color: var(--main-black);
	display: flex;
	align-items: center;
	padding: 20px;
	position: relative;

	& .active {
		opacity: 1;
	}
`;

export const NavList = styled.ul`
	display: flex;
	gap: 20px;
`;

export const StyledItem = styled.li`
	&:first-child {
		padding-right: 20px;
	}
	& a {
		white-space: nowrap;
		font-size: 1.1rem;
		color: var(--main-white);
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

export const StyledLink = styled.a`
	white-space: nowrap;
	font-size: 1.1rem;
	color: var(--main-white);
	opacity: 0.7;
	opacity: 0.9;
	text-shadow: 1px 1px 3px rgba(100, 100, 100, 0.8);
	opacity: 0.8;
`;

export const MobileNavbar = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const ToggleMobileNav = styled.button`
	background-color: transparent;
	border: 0;
	cursor: pointer;
`;

export const RegularNavbar = styled.nav``;
