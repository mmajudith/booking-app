import './button.css';

const Button = ({ text, color }) => {
	return (
		<button
			className={`${color === 'blue' && `btn-blue`} ${
				color === 'grey' && `btn-grey`
			} btn-create`}
		>
			{text}
		</button>
	);
};

export default Button;
