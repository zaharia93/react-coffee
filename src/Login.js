import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        auth
        .singInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch(e => alert(e.message));
    };

    const register = event => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="images/logo.png"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"></input>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you are agree with Conditions of Use & Sales. Please see our Privacy Notice , our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login__registerButton">Create Your Acount</button>
            </div>
        </div>
    )
}

export default Login;
 