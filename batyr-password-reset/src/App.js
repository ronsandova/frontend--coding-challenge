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
		(event.password !== newPassword && event.valid)
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
    if(passwordMatchError) {
      return {
        valid: false,
        errorMsg: msg ? "Passwords do no match" : null
      }
    }
  }

	return (
		<div>
			<h1>Change Password</h1>
			<form>
				<div>
					<label>Old Password</label>
					<PasswordInput
						required="true"
						onBlurEvent={handlePasswordBlurEvent}
					/>
				</div>
				<div>
					<label>New Password</label>
					<PasswordInput
						passwordPattern="(?=.*\d)(?=.*\w)(?!.*\s).{8,}"
						onBlurEvent={handleNewPasswordBlurEvent}
            matchError={constructMatchError(false)}
					/>
				</div>
				<div>
					<label>Confirm Password</label>
					<PasswordInput
						passwordPattern="(?=.*\d)(?=.*\w)(?!.*\s).{8,}"
						onBlurEvent={handleConfirmPasswordBlurEvent}
            matchError={constructMatchError(true)}
					/>
				</div>
				<div>
					<button>Cancel</button>
					<button disabled={!checkFormValid()}>
						Change Password
					</button>
				</div>
			</form>
		</div>
	);
}

export default App;
