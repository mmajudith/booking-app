import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../reduxtoolkit/actionsCreator/loginAndLogoutActions';
import InfoAccordion from '../../components/infoAccordion/InfoAccordion';
import Input from '../../shared-components/input/Input';
import { defaultUser } from '../../services/defaultUser';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import GoogleLogo from '../../assets/google-logo.png';
import './login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [checkbox, setCheckbox] = useState('');
	const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	//Login submit function handler
	const submitHandler = (e) => {
		e.preventDefault();
		if (!email || !password) {
			return toast.warn('Both email and password field are required!');
		}
		if (email !== defaultUser.email && password !== defaultUser.password) {
			return toast.error('Wrong credentials!');
		}

		const user = { email, password };
		dispatch(logIn(user));
		toast.success('Successfully login.');
		setIsSubmitSuccess(true);
	};

	useEffect(() => {
		if (isSubmitSuccess) {
			navigate('/');
		}

		return setIsSubmitSuccess(false);
	}, [isSubmitSuccess]);

	return (
		<div className="login-container">
			<div className="logo">
				<Logo className="w" />
			</div>
			<InfoAccordion />

			<div className="login-form-container w">
				<p className="login-name w">Login</p>
				<form onSubmit={submitHandler} className="login-form">
					<div style={{ paddingBottom: 20, paddingTop: 10 }}>
						<Input
							label={'Your Email'}
							type={'email'}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							label={'Your Password'}
							type={'password'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Input
							label={'Remember me'}
							type={'checkbox'}
							// value={checkbox}
							// onChange={(e) => setCheckbox(e.target.value)}
						/>
					</div>

					<div className="login-btn-wrapper">
						<button type={'submit'} className="login-btn w">
							Login →
						</button>
					</div>
				</form>

				<div className="login-option-line w flex-row between">
					<span className="right-line"></span>
					<span className="">Or:</span>
					<span className="left-line"></span>
				</div>

				<div className="w" style={{ padding: '20px 24px' }}>
					<div className="login-google-btn w flex-row center">
						<img src={GoogleLogo} alt="google logo" />
						<p>Login with Google</p>
					</div>
				</div>

				<div className="flex-row between w register-wrapper">
					<p>Forgot your password?</p>
					<p>Not registered?</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
