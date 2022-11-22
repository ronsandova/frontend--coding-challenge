import "./App.css";
import PasswordInput from "./components/PasswordInput";
import { useState } from "react";

function App() {
	const [formValid, setFormValid] = useState({
		oldPassword: false,
		newPassword: false,
		confirmPassword: false,
		valid: false,
	});
	const [newPassword, setNewPassword] = useState("");
	const [passwordMatchError, setPasswordMatchError] = useState(false);

	const handlePasswordBlurEvent = (event) => {
		setFormValid((prevFormValid) => {
			return { ...prevFormValid, oldPassword: event.valid };
		});
	};

	const handleNewPasswordBlurEvent = (event) => {
		setNewPassword(event.password);
		setFormValid((prevFormValid) => {
			return { ...prevFormValid, newPassword: event.valid };
		});
	};

	const handleConfirmPasswordBlurEvent = (event) => {
		event.password !== newPassword && event.valid
			? setPasswordMatchError(true)
			: setPasswordMatchError(false);
			
		setFormValid((prevFormValid) => {
			return {
				...prevFormValid,
				confirmPassword: event.password === newPassword && event.valid,
			};
		});
	};

	const checkFormValid = () => {
		return (
			formValid.oldPassword &&
			formValid.newPassword &&
			formValid.confirmPassword
		);
	};

	const constructMatchError = (msg) => {
		if (passwordMatchError) {
			return {
				valid: false,
				errorMsg: msg ? "Passwords do not match" : null,
			};
		}
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="p-3 password-wrapper">
				<h1 className="display-6" label="Change Password">
					Change Password
				</h1>
				<form className="m-1">
					<PasswordInput
						id="oldPassword"
						required="true"
						onBlurEvent={handlePasswordBlurEvent}
						label="Old Password"
					/>

					<PasswordInput
						id="newPassword"
						passwordPattern="(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{8,}"
						onBlurEvent={handleNewPasswordBlurEvent}
						matchError={constructMatchError(false)}
						label="New Password"
					/>
					<PasswordInput
						id="confirmPassword"
						passwordPattern="(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{8,}"
						onBlurEvent={handleConfirmPasswordBlurEvent}
						matchError={constructMatchError(true)}
						label="Confirm Password"
					/>

					<div>
						<button className="btn btn-outline-secondary m-1">
							Cancel
						</button>
						<button
							className="btn btn-primary m-1"
							disabled={!checkFormValid()}
							id="passwordResetConfirm"
						>
							Change Password
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
