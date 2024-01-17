import { ReactComponent as SmileyIcon } from '../../assets/smiley.svg';
import './header-profile.css';

const HeaderProfile = ({ screenWidth }) => {
	return (
		<div
			className={`user-profile-status ${
				screenWidth > 1024 ? `flex-row` : `flex-col`
			}  flex-row center`}
		>
			<p className="upgrade">Upgrade $29 lifetime access!</p>
			<div
				className={`profile-wrapper ${
					screenWidth > 1024 ? `flex-row` : `flex-col`
				}  center`}
			>
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
