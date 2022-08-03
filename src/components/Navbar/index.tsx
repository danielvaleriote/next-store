import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
	Header,
	MobileNavbar,
	RegularNavbar,
	StyledItem,
	ToggleMobileNav,
	StyledLink,
	StyledSideMenu,
	SideMenuBackdrop,
} from './styled';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
	cart?: boolean;
};

const NavLink = ({ href, children }: NavLinkProps) => {
	const router = useRouter();

	return (
		<Link href={href} passHref={true}>
			<StyledLink className={router.pathname == href ? 'active' : ''}>
				{children}
			</StyledLink>
		</Link>
	);
};

const NavItem = ({ href, children, cart }: NavLinkProps) => {
	return (
		<StyledItem
			style={
				cart
					? { position: 'absolute', right: '20px', paddingTop: '2px' }
					: undefined
			}
		>
			<NavLink href={href}>{children}</NavLink>
		</StyledItem>
	);
};

const SideMenuItem = ({
	href,
	children,
	closeMenu,
}: {
	href: string;
	children: React.ReactNode;
	closeMenu: () => void;
}) => {
	return (
		<li onClick={closeMenu}>
			<NavLink href={href}>{children}</NavLink>
		</li>
	);
};

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [showSideMenu, setShowSideMenu] = useState(false);

	const checkForMobile = () => setIsMobile(window.innerWidth <= 750);
	const toggleSideMenu = () => setShowSideMenu(!showSideMenu);

	useEffect(() => {
		window.addEventListener('resize', checkForMobile);
		checkForMobile();
	}, []);

	useEffect(() => {
		document.body.style.overflow = showSideMenu ? 'hidden' : 'auto';
	}, [showSideMenu]);

	return (
		<Header>
			{isMobile ? (
				<MobileNavbar>
					<NavLink href="/user/cart">
						<FaShoppingCart size={20} color="#fff" />
					</NavLink>
					<NavLink href="/">Início</NavLink>
					<ToggleMobileNav onClick={() => setShowSideMenu(true)}>
						<GiHamburgerMenu
							size={20}
							color={'#fff'}
							style={
								showSideMenu
									? { transform: 'rotate(90deg)' }
									: { transform: 'rotate(0deg)' }
							}
						/>
					</ToggleMobileNav>

					{showSideMenu && (
						<SideMenuBackdrop
							onClick={(e) => {
								if (e.target === e.currentTarget) toggleSideMenu();
							}}
						/>
					)}
					<StyledSideMenu
						id="sideMenu"
						style={showSideMenu ? { left: '0' } : { left: '-200px' }}
					>
						<ul>
							<SideMenuItem
								href="/category/electronics"
								closeMenu={toggleSideMenu}
							>
								Eletrônicos
							</SideMenuItem>
							<SideMenuItem
								href="/category/jewelery"
								closeMenu={toggleSideMenu}
							>
								Joalheria
							</SideMenuItem>
							<SideMenuItem
								href="/category/mensclothing"
								closeMenu={toggleSideMenu}
							>
								Moda masculinas
							</SideMenuItem>
							<SideMenuItem
								href="/category/womensclothing"
								closeMenu={toggleSideMenu}
							>
								Moda femininas
							</SideMenuItem>
						</ul>
					</StyledSideMenu>
				</MobileNavbar>
			) : (
				<RegularNavbar>
					<ul>
						<NavItem href="/">Início</NavItem>
						<NavItem href="/category/electronics">Eletrônicos</NavItem>
						<NavItem href="/category/jewelery">Joalheria</NavItem>
						<NavItem href="/category/mensclothing">Moda masculinas</NavItem>
						<NavItem href="/category/womensclothing">Moda femininas</NavItem>
						<NavItem href="/user/cart" cart={true}>
							<FaShoppingCart />
						</NavItem>
					</ul>
				</RegularNavbar>
			)}
		</Header>
	);
};

export default Navbar;
