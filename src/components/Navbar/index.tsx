import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
	Header,
	MobileNavbar,
	RegularNavbar,
	NavItem,
	NavList,
} from './styled';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
	cart?: boolean;
};

const NavLink = ({ href, children, cart }: NavLinkProps) => {
	const router = useRouter();

	return (
		<NavItem
			style={
				cart
					? { position: 'absolute', right: '20px', paddingTop: '2px' }
					: undefined
			}
		>
			<Link href={href} passHref={true}>
				<a className={router.pathname == href ? 'active' : ''}>{children}</a>
			</Link>
		</NavItem>
	);
};

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const checkForMobile = () => setIsMobile(window.innerWidth <= 750);

	useEffect(() => {
		window.addEventListener('resize', checkForMobile);
		checkForMobile();
	}, []);

	return (
		<Header>
			{isMobile ? (
				<MobileNavbar></MobileNavbar>
			) : (
				<RegularNavbar>
					<NavList>
						<NavLink href="/">Início</NavLink>
						<NavLink href="/products/electronics">Eletrônicos</NavLink>
						<NavLink href="/products/jewelery">Joalheria</NavLink>
						<NavLink href="/mensclothing">Moda masculinas</NavLink>
						<NavLink href="/womensclothing">Moda femininas</NavLink>
						<NavLink href="/user/cart" cart={true}>
							<FaShoppingCart />
						</NavLink>
					</NavList>
				</RegularNavbar>
			)}
		</Header>
	);
};

export default Navbar;
