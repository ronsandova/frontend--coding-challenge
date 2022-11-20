
function PasswordInput(props) {
    const passwordPattern = props?.passwordPattern;
    const required = props?.required;

     return (
		<input
			type="text"
			pattern={passwordPattern}
			required={required ? true : false}
		></input>
	);
}

export default PasswordInput;