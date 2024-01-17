import { useDispatch } from 'react-redux';
import { logOut } from '../../../reduxtoolkit/actionsCreator/loginAndLogoutActions';
import HeaderNavList from '../../../shared-components/headerNavList/HeaderNavList';
import HeaderProfile from '../../../shared-components/headerProfile/HeaderProfile';
import './header-menu.css';

const HeaderMenu = ({ screenWidth, menuListHandler }) => {
	const dispatch = useDispatch();

	return (
		<nav className="nav-menu-lists">
			{screenWidth < 1024 && (
				<HeaderNavList
					screenWidth={screenWidth}
					menuListHandler={menuListHandler}
				/>
			)}
			<ul className="b-bottom">
				{[['Settings'], ['Integrations']].map(([list], index) => (
					<li key={index}>{list}</li>
				))}
			</ul>
			<ul className="b-bottom">
				{[
					['Directory'],
					['Pricing'],
					['Roadmap'],
					['Features Request'],
					['Help'],
				].map(([list], index) => (
					<li key={index}>{list}</li>
				))}
			</ul>
			<ul>
				<li onClick={() => dispatch(logOut())}>LogOut</li>
			</ul>
			{screenWidth < 1024 && <HeaderProfile />}
		</nav>
	);
};

export default HeaderMenu;
