import './input.css';

const Input = ({ label, type, value, onChange }) => {
	return (
		<div
			className={`${
				type === `checkbox` ? `check-container` : `input-container`
			} w`}
		>
			<label>
				{label}
				{`${type === `checkbox` ? `` : `:`}`}
			</label>
			<input type={type} value={value} onChange={onChange} />
		</div>
	);
};

export default Input;
