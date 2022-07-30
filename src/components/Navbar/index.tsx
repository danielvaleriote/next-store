import { useEffect, useState } from 'react';
import { Header, MobileNavbar, RegularNavbar } from './styled';

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
				<RegularNavbar></RegularNavbar>
			)}
		</Header>
	);
};

export default Navbar;
