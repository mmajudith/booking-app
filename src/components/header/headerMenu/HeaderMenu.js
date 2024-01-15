import { useDispatch } from 'react-redux';
import { logOut } from '../../../reduxtoolkit/actionsCreator/loginAndLogoutActions';

const HeaderMenu = () => {
	const dispatch = useDispatch();

	return (
		<nav>
			<ul>
				<li onClick={() => dispatch(logOut())}>LogOut</li>
			</ul>
		</nav>
	);
};

export default HeaderMenu;
