import React, { useState } from 'react'

function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        console.log(password)
        if(e.target.value.length < 1) {
            setConfirmError("Confirming your password is required!");
        } else if(e.target.value != password) {
            setConfirmError("Passwords do not match.");
        } else {
            setConfirmError("");
        }
    }




    return (
        <form>
            <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" onChange={ handleFirstName}/>
            { firstNameError 
            ? <p>{firstNameError}</p>
            : ""
            }
            </div>

            <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" onChange={ handleLastName }/>
            { lastNameError 
            ? <p>{lastNameError}</p>
            : ""
            }
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={ handleEmail }/>
            { emailError 
            ? <p>{emailError}</p>
            : ""
            }
            </div>

            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={ handlePassword }/>
            { passwordError 
            ? <p>{passwordError}</p>
            : ""
            }
            </div>

            <div>
            <label htmlFor="confirm">Confirm Password:</label>
            <input type="password" id="confirm" onChange={ handleConfirm }/>
            { confirmError 
            ? <p>{confirmError}</p>
            : ""
            }
            </div>

            <hr />
            <div><h4>Form Data:</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
            </div>
        </form>
    )
}

export default Form