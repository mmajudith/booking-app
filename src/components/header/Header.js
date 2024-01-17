import { useState, useEffect } from 'react';
import HeaderNavList from '../../shared-components/headerNavList/HeaderNavList';
import HeaderMenu from './headerMenu/HeaderMenu';
import HeaderProfile from '../../shared-components/headerProfile/HeaderProfile';
import Logo from '../../assets/tidycal-logo.png';
import MenuIcon from '../../assets/menu.png';
import './header.css';

const Header = () => {
	const [isMenuList, setIsMenuList] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const menuListHandler = () => {
		setIsMenuList(!isMenuList);
	};

	useEffect(() => {
		window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

		return window.addEventListener('resize', () =>
			setScreenWidth(window.innerWidth)
		);
	}, [screenWidth]);

	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>
			{screenWidth > 1024 && (
				<>
					<HeaderNavList screenWidth={screenWidth} />
					<HeaderProfile screenWidth={screenWidth} />
				</>
			)}

			<img
				src={MenuIcon}
				className="menu-icon"
				alt="header menu icon"
				onClick={menuListHandler}
			/>
			{isMenuList && <HeaderMenu screenWidth={screenWidth} />}
		</header>
	);
};

export default Header;
