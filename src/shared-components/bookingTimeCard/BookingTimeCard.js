import { ReactComponent as ClockIcon } from '../../assets/clock.svg';
import { ReactComponent as MessageIcon } from '../../assets/book-message-icon.svg';
import { ReactComponent as EmailIcon } from '../../assets/email-icon.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin-icon.svg';
import { ReactComponent as FaceBookIcon } from '../../assets/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import './booking-time.css';

const BookingTimeCard = ({ bookingTime }) => {
	const { minMeeting, minLink, activeBooking, time, bookingDescription } =
		bookingTime;

	return (
		<div className="booking-time-container b-r b-s">
			<div className="book-min-wrapper flex-col flex-end w">
				<p className="mins">{minMeeting}</p>
				<div className="links-wrapper flex-row between w">
					<p className="link">{minLink}</p>
					<p>Copy link</p>
				</div>
			</div>

			<div className="active-wrapper flex-col flex-end w">
				<p>{activeBooking}</p>
				<div className="flex-row clock-wrapper">
					<ClockIcon />
					<p>{time}</p>
				</div>
			</div>

			<p className="booking-des w">{bookingDescription}</p>

			<div className="share-wrapper flex-row between w">
				<p>Share:</p>

				<MessageIcon />
				<EmailIcon />
				<LinkedInIcon />
				<FaceBookIcon />
				<TwitterIcon />
			</div>

			<div className="booking-embed flex-row between w">
				<p>Embed on Website</p>
				<p>Embed in Email</p>
			</div>

			<div className="del-clone-edit flex-row between w">
				<p className="del">Delete</p>
				<p>Clone</p>
				<p>Edit</p>
			</div>
		</div>
	);
};

export default BookingTimeCard;
