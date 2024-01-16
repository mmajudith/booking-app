import { useState } from 'react';
import HeaderNavList from '../../shared-components/headerNavList/HeaderNavList';
import HeaderMenu from './headerMenu/HeaderMenu';
import HeaderProfile from '../../shared-components/headerProfile/HeaderProfile';
import Logo from '../../assets/tidycal-logo.png';
import MenuIcon from '../../assets/menu.png';
import './header.css';

const Header = () => {
	const [isMenuList, setIsMenuList] = useState(false);

	const menuListHandler = () => {
		setIsMenuList(!isMenuList);
	};

	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>

			<HeaderNavList />
			<HeaderProfile />

			<div className="menu-wrapper">
				<img src={MenuIcon} alt="header menu icon" onClick={menuListHandler} />
				{isMenuList && <HeaderMenu />}
			</div>
		</header>
	);
};

export default Header;
