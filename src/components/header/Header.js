import { useDispatch } from 'react-redux';
import { logOut } from '../../reduxtoolkit/actionsCreator/loginAndLogoutActions';
import HeaderNavList from '../../shared-components/headerNavList/HeaderNavList';
import Logo from '../../assets/tidycal-logo.png';
import './header.css';

const Header = () => {
	const dispatch = useDispatch();
	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>
			<HeaderNavList />
			<p onClick={() => dispatch(logOut())}>LogOut</p>
		</header>
	);
};

export default Header;
