import { ReactComponent as ResetIcon } from '../../../assets/reset-icon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/close-icon.svg';
import { ReactComponent as SendIcon } from '../../../assets/send-icon.svg';
import './chat.css';

const Chat = ({ chatBotHandler }) => {
	return (
		<div className="chat-wrapper">
			<div className="chat-title-wrapper w flex-row between">
				<p className="bot-name">TidyCal Support Bot</p>
				<div className="reset-close-icon-wrapper">
					<ResetIcon />
					<CloseIcon onClick={chatBotHandler} />
				</div>
			</div>
			<div className="text-wrapper w flex-col">
				<p className="chat-text">Hi there. 👋 Do you need any help?</p>

				<div className="w flex-row flex-start">
					<p className="question m-right">What is TidyCal?</p>
					<p className="question">Where are your FAQs?</p>
				</div>
			</div>
			<div className="send-message-wrapper w flex-row between">
				<input type="text" placeholder="Message..." />
				<SendIcon />
			</div>
		</div>
	);
};

export default Chat;
