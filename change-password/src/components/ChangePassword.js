import React, { useRef, useState } from "react"
import "./ChangePassword.css";

export default function ChangePassword() {
    const oldpasswordRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const [cha, setCha] = useState("")
    const RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/;

    // Password Match
    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("*Passwords do not match*")
        }

        if (!RegExp !== passwordConfirmRef.current.value) {
            return setCha("*Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character*")
        }
    }

    return (
        <>
            <div className="Card">
                <div className="Card-Body">
                    {/* Heading */}
                    <h2 className="text-center mb-4">
                        Change  password
                    </h2>
                    {/* Alert  */}
                    <div className="a-message" variant="danger">{error}</div>

                    <form onSubmit={handleSubmit} style={{
                        minWidth: "400px"
                    }}>
                        <div className="form-box w-100">
                            {/* Old Password*/}
                            <div id="password">
                                <label> Old Password</label><br />
                                <input className="w-100" type="password" ref={oldpasswordRef} required />
                            </div>
                            {/* New Password*/}
                            <div id="password">
                                <label> New Password</label><br />
                                <div className="a-message" variant="danger">{cha}</div>
                                <input className="w-100" type="password" ref={passwordRef} required />
                            </div>
                            {/* Confirm password */}
                            <div id="password-confirm">
                                <label>Confirm password</label><br />
                                <input className="w-100" type="password" ref={passwordConfirmRef} required />
                            </div>
                        </div>
                        <br />
                        {/* Buttons */}
                        <button type="reset" className="font-500 btn btn-outline-secondary cancel-btn" value="Reset">Cancel</button>
                        <button type="submit" className="btn btn-info text-light font-500 " value="Submit" onSubmit={handleSubmit} >Change password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

