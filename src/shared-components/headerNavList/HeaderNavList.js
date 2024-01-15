import { Link, NavLink } from 'react-router-dom';

const HeaderNav = () => {
	const activeClassName = 'nav-link-active';
	return (
		<ul className="flex-row between">
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

export default HeaderNav;
