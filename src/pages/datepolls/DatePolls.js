import Button from '../../shared-components/button/Button';
import { useDocumentTitle } from '../../hook/useDocumentTitle';
import './date-polls.css';

const DatePolls = () => {
	useDocumentTitle('Date Polls');
	return (
		<div className="date-polls-container w flex-col center">
			<div className="w flex-row between polls-gap">
				<div className="flex-row between polls-title-wrapper">
					<h2>Date Polls</h2>
					<Button text={'+ Create new date poll'} color={'blue'} />
				</div>
				<div className="flex-row between v-wrapper">
					<p>View:</p>
					<p className="polls flex-col flex-s-s">All polls</p>
				</div>
			</div>
		</div>
	);
};

export default DatePolls;
