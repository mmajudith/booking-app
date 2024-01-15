import { useState } from 'react';
import Chat from './chat/Chat';
import { ReactComponent as MessageIcon } from '../../assets/message-icon.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down.svg';
import './chat-bot.css';

const ChatBot = () => {
	const [isChatBot, setIsChatBot] = useState(false);

	const chatBotHandler = () => {
		setIsChatBot(!isChatBot);
	};

	return (
		<div
			className="chat-bot-container"
			style={{
				width: 'content-fit',
				height: 'content-fit',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
				paddingRight: 20,
			}}
		>
			{isChatBot && <Chat chatBotHandler={chatBotHandler} />}

			<div
				className="chat-icons-wrapper flex-col center"
				onClick={chatBotHandler}
			>
				{isChatBot ? <ArrowDownIcon /> : <MessageIcon />}
			</div>
		</div>
	);
};

export default ChatBot;
