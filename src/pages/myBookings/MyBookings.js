import Button from '../../shared-components/button/Button';
import { ReactComponent as CalenderIcon } from '../../assets/calender-icon.svg';
import './my-bookings.css';

const MyBooking = () => {
	return (
		<div className="my-booking-container w flex-col center">
			<div className="w flex-row between">
				<h2>
					Bookings <span>0</span>
				</h2>

				<div className="flex-row between flex-gap">
					<div className="flex-row between f-wrapper">
						<p>Filter:</p>
						<p className="filter flex-col flex-s-s">Upcoming bookings</p>
					</div>
					<Button text={'Export bookings ?'} color={'grey'} />
					<div className="cal-icon-wrapper flex-col center">
						<CalenderIcon />
					</div>
				</div>
			</div>

			<p className="upcoming w">You have no upcoming bookings.</p>
		</div>
	);
};

export default MyBooking;
