import { useDispatch } from 'react-redux';
import { logOut } from '../../../reduxtoolkit/actionsCreator/loginAndLogoutActions';
import './header-menu.css';

const HeaderMenu = () => {
	const dispatch = useDispatch();

	return (
		<nav className="nav-menu-lists">
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
		</nav>
	);
};

export default HeaderMenu;
