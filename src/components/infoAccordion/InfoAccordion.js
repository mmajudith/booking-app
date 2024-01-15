import { useState } from 'react';
import { defaultUser } from '../../services/defaultUser';
import './info-accordion.css';

const InfoAccordion = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { email, password } = defaultUser;

	const isOpenHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="info-container w">
			<p onClick={isOpenHandler} className="click-test b-r b-s">
				Click to reveal test login details:
			</p>
			{isOpen && (
				<div className="b-r b-s">
					<p>Email: {email}</p>
					<p>Password: {password}</p>
				</div>
			)}
		</div>
	);
};

export default InfoAccordion;
