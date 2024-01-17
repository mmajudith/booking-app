import { NavLink } from 'react-router-dom';
import './header-nav-list.css';

const HeaderNavList = ({ screenWidth }) => {
	const activeClassName = 'nav-link-active';
	return (
		<ul
			className={`${
				screenWidth > 1024 ? `flex-row between` : `flex-col center`
			} nav-list`}
		>
			{[
				['Booking Types', '/'],
				['Date Polls', '/date-polls'],
				['My Bookings', '/my-Bookings'],
				['My Contacts', '/my-contacts'],
			].map(([list, url], index) => (
				<li key={index}>
					<NavLink
						to={url}
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}
					>
						{list}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default HeaderNavList;
