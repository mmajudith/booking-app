import { useState } from 'react';
import { useDispatch } from 'react-redux';
import HeaderNavList from '../../shared-components/headerNavList/HeaderNavList';
import HeaderMenu from './headerMenu/HeaderMenu';
import Logo from '../../assets/tidycal-logo.png';
import { ReactComponent as SmileyIcon } from '../../assets/smiley.svg';
import MenuIcon from '../../assets/menu.png';
import './header.css';

const Header = () => {
	const dispatch = useDispatch();
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

			<div className="user-profile-status flex-row center">
				<p className="upgrade">Upgrade $29 lifetime access!</p>
				<div className="profile-wrapper flex-row center">
					<SmileyIcon />
					<p>Judith Onyekwelu</p>
				</div>
				<p className="earning">
					EARNINGS: <span>$0.00</span>
				</p>
			</div>

			<div className="menu-wrapper">
				<img src={MenuIcon} onClick={menuListHandler} />
				{isMenuList && <HeaderMenu />}
			</div>
		</header>
	);
};

export default Header;
