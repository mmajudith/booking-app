import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import ChatBot from './components/chatBot/ChatBot';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import BookingTypes from './pages/bookingTypes/BookingTypes';
import DatePolls from './pages/datepolls/DatePolls';
import MyBookings from './pages/myBookings/MyBookings';
import MyContacts from './pages/myContacts/MyContacts';

const App = () => {
	const { currentUser } = useSelector((state) => state.authSlice);

	const RequireAuth = ({ children }) => {
		return currentUser ? (
			<>
				<Header />
				{children}
			</>
		) : (
			<Navigate to="/login" />
		);
	};

	return (
		<div className="App">
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<ChatBot />
			<Routes>
				<Route path="/">
					<Route path="login" element={<Login />} />
					<Route
						index
						element={
							<RequireAuth>
								<BookingTypes />
							</RequireAuth>
						}
					/>
					<Route
						path="date-polls"
						element={
							<RequireAuth>
								<DatePolls />
							</RequireAuth>
						}
					/>
					<Route
						path="my-Bookings"
						element={
							<RequireAuth>
								<MyBookings />
							</RequireAuth>
						}
					/>
					<Route
						path="my-contacts"
						element={
							<RequireAuth>
								<MyContacts />
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
