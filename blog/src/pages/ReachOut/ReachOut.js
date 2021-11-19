import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button } from "@material-ui/core";
import './ReachOut.css';

function ReachOut() {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[messageError, setMessageError] = useState("");
    const[toggle, setToggle] = useState(false);

    const Validate = () => {
        if(firstName === "") {
            setFirstNameError("Field Empty");
        }
        if(lastName === "") {
            setLastNameError("Field Empty");
        }
        if(email === "" || !email.includes('@')) {
            setEmailError("Invalid Email");
        }
        if(message === "") {
            setMessageError("Field Empty");
        }

        if(!firstName || !lastName || !email || !message ||!email.includes('@')) {
            setToggle(true);
            return false;
        }

        setToggle(false);
        return true;
    }

    const onSubmit = () => {
        let values = {firstName, lastName, email, message};
        if(Validate()) {
            fetch('http://localhost:5000/reader', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            }).then(response => {
                if(response.ok) {
                    alert("Thank you for reaching out to me!");
                } else {
                    console.log("Error");
                }
            });
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
            setFirstNameError("");
            setLastNameError("");
            setEmailError("");
            setMessageError("");
        } else {
            console.log("Error");
        }
    }

    return (
        <>
        <p className = "finalComponent">Hello, thanks a lot for taking the time out to read my blog and for trying to reach out to me! I'm very grateful for that :)</p>
        <MuiThemeProvider>
            <div style = {{margin: "70px auto", maxWidth: "450px"}}>
                <TextField
                    label = "First Name"
                    placeholder = "Enter your first name"
                    error = {toggle}
                    helperText = {firstNameError}
                    value = {firstName}
                    onChange = {(event) => {setFirstName(event.target.value)}}
                    fullWidth = "true"
                    variant="outlined"
                />
                <br />
                <br />
                <TextField
                    label = "Last Name"
                    placeholder = "Enter your last name"
                    error = {toggle}
                    helperText = {lastNameError}
                    value = {lastName}
                    onChange = {(event) => {setLastName(event.target.value)}}
                    fullWidth = "true"
                    variant="outlined"
                />
                <br />
                <br />
                <TextField
                    label = "Email"
                    placeholder = "Enter your Email id"
                    error = {toggle}
                    helperText = {emailError}
                    value = {email}
                    onChange = {(event) => {setEmail(event.target.value)}}
                    fullWidth = "true"
                    variant="outlined"
                />
                <br />
                <br />
                <TextField
                    label="Message"
                    placeholder = "I'd love to hear from you!"
                    error = {toggle}
                    helperText = {messageError}
                    value = {message}
                    onChange = {(event) => {setMessage(event.target.value)}}
                    fullWidth = "true"
                    multiline
                    maxRows={4}
                    variant="outlined"
                />
                <br />
                <br />
                <Button color = "primary" variant = "contained" onClick = {onSubmit}>
                    Submit
                </Button>
            </div>
        </MuiThemeProvider>
        </>
    )
};

export default ReachOut;