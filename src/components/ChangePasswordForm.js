import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ChangePasswordForm = () => {
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();
    //checks for at least 1 letter (lower or upper), 1 number and a minimum of 8 characters
    let passwordCheck = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/;
    try {
      //check to see if value was entered
      if (!oldPassword) {
        setError("Please enter old password");
      } else {
        if (newPassword === confirmPassword) {
          if (newPassword.match(passwordCheck)) {
            handleReset();
            alert("sucess!");
          } else {
            setError(
              "Password must contain a min of 8 characters and a mixture of numbers and letters"
            );
          }
        } else {
          setError("Passwords are not matching");
        }
      }
    } catch {}
  };

  const handleReset = () => {
    setoldPassword("");
    setnewPassword("");
    setconfirmPassword("");
    setError("");
  };

  return (
    <div class="form-container">
      <h1>Change Password</h1>
      <Form>
        <Form.Group>
          <Form.Label>Old password</Form.Label>
          <Form.Control
            id="oldpassword"
            onChange={(e) => setoldPassword(e.target.value)}
            type="password"
            value={oldPassword}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>New password</Form.Label>
          <Form.Control
            id="newpassword"
            onChange={(e) => setnewPassword(e.target.value)}
            type="password"
            value={newPassword}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            id="confirmpassword"
            onChange={(e) => setconfirmPassword(e.target.value)}
            type="password"
            value={confirmPassword}
          />
        </Form.Group>
        {error ? (
          <div className="error">
            <h4>{error}</h4>
          </div>
        ) : null}
        <Button id="cancel" type="submit" variant="light" onClick={handleReset}>
          Cancel
        </Button>
        <Button
          id="changepassword"
          type="submit"
          variant="info"
          onClick={handleSubmit}
        >
          Change Passsword
        </Button>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
