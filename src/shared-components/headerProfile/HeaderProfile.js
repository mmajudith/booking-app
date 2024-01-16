import { ReactComponent as SmileyIcon } from '../../assets/smiley.svg';
import './header-profile.css';

const HeaderProfile = () => {
	return (
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
	);
};

export default HeaderProfile;
