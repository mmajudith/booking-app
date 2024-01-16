import Button from '../../shared-components/button/Button';
import BookingTimeCard from '../../shared-components/bookingTimeCard/BookingTimeCard';
import { bookingsTimeMethod } from '../../bookingsTimeMethodData';
import './booking-types.css';

const BookingTypes = () => {
	return (
		<div className="booking-type-container">
			<div className="booking-method-wrapper w flex-row between">
				<div className="booking-type-title flex-row">
					<h2>Booking types</h2>
					<Button text={'+ Create new booking type'} color={'blue'} />
				</div>

				<div className="btn-page-wrapper flex-row">
					<Button text={'Embed booking page ?'} color={'grey'} />
					<Button text={'View your bookings page'} color={'grey'} />
				</div>
			</div>

			<div className="w flex-row between booking-gap">
				{bookingsTimeMethod.map((bookingTime, index) => (
					<BookingTimeCard key={index} bookingTime={bookingTime} />
				))}
			</div>
		</div>
	);
};

export default BookingTypes;
