import { useSelector } from 'react-redux';
import { useDocumentTitle } from '../../hook/useDocumentTitle';
import Button from '../../shared-components/button/Button';
import BookingTimeCard from '../../shared-components/bookingTimeCard/BookingTimeCard';
import './booking-types.css';

const BookingTypes = () => {
	useDocumentTitle('Booking Types');
	const { bookingsTimeMethod } = useSelector(
		(state) => state.bookingsTypeSlice
	);

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

			<div className="w booking-gap">
				{bookingsTimeMethod &&
					bookingsTimeMethod.map((bookingTime, index) => (
						<BookingTimeCard key={index} bookingTime={bookingTime} />
					))}
			</div>
		</div>
	);
};

export default BookingTypes;
