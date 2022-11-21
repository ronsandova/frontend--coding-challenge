import React, { useEffect, useState } from "react";

function PasswordInput(props) {
	const [passwordValid, setPasswordValid] = useState({
		valid: true,
		errorMsg: "",
	});
	const passwordPattern = props?.passwordPattern;
	const required = props?.required;

	useEffect(() => {
		if(props.matchError) {
			setPasswordValid(props.matchError)
		}
	}, [props])

	const onBlurHandler = (event) => {
		const inputValue = event.target.value;
		let valid = false

		if (passwordPattern) {
			const passwordRegex = new RegExp(passwordPattern);
			valid = passwordRegex.test(inputValue);
			setPasswordValid({
				valid: valid,
				errorMsg: valid
					? ""
					: "Password must be 8 or more characters and a mixture of numbers and letters",
			});
		}

		if (required) {
			valid = inputValue.length > 0
			setPasswordValid({
				valid: valid,
				errorMsg: valid ? "" : "Password can not be blank",
			});
		}

        props.onBlurEvent({ password: inputValue, valid: valid });
	};

	return (
		<div>
			<input
				type="text"
				pattern={passwordPattern}
				required={required ? true : false}
				onBlur={onBlurHandler}
			/>
			{passwordValid.errorMsg ? <p>{passwordValid.errorMsg}</p> : null}
		</div>
	);
}

export default PasswordInput;
