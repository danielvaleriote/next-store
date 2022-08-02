import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
	Header,
	MobileNavbar,
	RegularNavbar,
	StyledItem,
	NavList,
	ToggleMobileNav,
	StyledLink,
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

const Navbar = () => {
	const router = useRouter();

	const [isMobile, setIsMobile] = useState(false);
	const checkForMobile = () => setIsMobile(window.innerWidth <= 750);

	useEffect(() => {
		window.addEventListener('resize', checkForMobile);
		checkForMobile();
	}, []);

	return (
		<Header>
			{isMobile ? (
				<MobileNavbar>
					<ToggleMobileNav>
						<GiHamburgerMenu size={20} color={'#fff'} />
					</ToggleMobileNav>
					<NavLink href="/">Início</NavLink>
					<NavLink href="/user/cart">
						<FaShoppingCart size={20} color="#fff" />
					</NavLink>
				</MobileNavbar>
			) : (
				<RegularNavbar>
					<NavList>
						<NavItem href="/">Início</NavItem>
						<NavItem href="/products/electronics">Eletrônicos</NavItem>
						<NavItem href="/products/jewelery">Joalheria</NavItem>
						<NavItem href="/mensclothing">Moda masculinas</NavItem>
						<NavItem href="/womensclothing">Moda femininas</NavItem>
						<NavItem href="/user/cart" cart={true}>
							<FaShoppingCart />
						</NavItem>
					</NavList>
				</RegularNavbar>
			)}
		</Header>
	);
};

export default Navbar;
