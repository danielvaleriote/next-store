import styled from 'styled-components';

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
	text-shadow: 1px 1px 3px rgba(100, 100, 100, 0.8);

	&:hover {
		opacity: 1;
	}
`;

export const SideMenuBackdrop = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 10;
`;

export const StyledSideMenu = styled.nav`
	position: fixed;
	left: -200px;
	top: 0;
	background-color: var(--main-black);
	height: 100vh;
	max-width: 200px;
	width: 100%;
	z-index: 100;
	padding: 15px;
	transition: all 0.3s ease;

	& ul {
		display: flex;
		flex-direction: column;
		gap: 20px;

		justify-content: center;
	}
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

	& svg {
		transition: all 0.3s ease;
	}
`;

export const RegularNavbar = styled.nav`
	& ul {
		display: flex;
		gap: 20px;
	}
`;
