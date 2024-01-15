import { Link } from 'react-router-dom';

const HeaderNav = () => {
	return (
		<nav>
			<ul>
				{[
					['Booking Types', '/'],
					['Date Polls', '/date-polls'],
					['My Bookings', '/my-Bookings'],
					['My Contacts', '/my-contacts'],
				].map(([list, url], index) => (
					<li key={index}>
						<Link to={url}>{list}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default HeaderNav;
