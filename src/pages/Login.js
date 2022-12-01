import { Button, FormControl, TextField } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import React from 'react';
import { BRAND, SIGN_IN } from '../constants';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    localStorage.clear();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        if (email.trim() === "" || password.trim() === "") {
            setErrorMessage("Empty fields!");
            return;
        }
        else setErrorMessage("");

        //TO DO: backend login 
        // set error message if login failed -> setErrorMessage("Wrong username or password!")
        //localStorage.setItem("userId", 1); //set value for the authUser

        if (errorMessage.trim()) return;
        navigate("/products");
    };

    return (
        <div className="LoginPage">
            <FormControl className="Login-formControl">
                <div className="Login-Title">
                    <p>{BRAND}</p>
                    <SelfImprovementIcon className="Icon" />
                </div>
                <TextField
                    className="Login-InputField"
                    label='Email'
                    variant='standard'
                    required
                    onChange={(e) => setEmail(e.target.value)}>
                </TextField>
                <TextField
                    className="Login-InputField"
                    label='Password'
                    variant='standard'
                    required
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}>
                </TextField>
                {errorMessage && <div className="Login-ErrorMessage">{errorMessage}</div>}
                <Button
                    className="Login-Button"
                    onClick={handleLogin}
                    sx={{ margin: 3, color: 'black' }}
                >
                    {SIGN_IN}
                </Button>
            </FormControl>
        </div>
    );
};

export default Login;