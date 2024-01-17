import { useDocumentTitle } from '../../hook/useDocumentTitle';
import Button from '../../shared-components/button/Button';
import './my-contacts.css';

const MyContacts = () => {
	useDocumentTitle('Contacts');
	return (
		<div className="my-contact-container w flex-col center">
			<div className="w flex-row between contact-gap">
				<h2>
					Contacts <span>0</span>
				</h2>

				<div className="flex-row flex-gap-15">
					<div className="input-search-wrapper">
						<input type="text" placeholder="Search" />
					</div>
					<Button text={'Export contacts'} color={'blue'} />
				</div>
			</div>

			<table>
				<thead>
					<tr>
						<td>Contact</td>
						<td>Bookings</td>
						<td>Created</td>
					</tr>
				</thead>
			</table>
		</div>
	);
};

export default MyContacts;
