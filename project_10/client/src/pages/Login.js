import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContex';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext); 

    let navigate = useNavigate();

    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if( response.data.error ) {
                alert(response.data.error);
            }
            else {
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({ username: response.data.username, id: response.data.id, status: true });
                navigate("/");
            }
        });
    }

    return <div className="login-container">
        <label> Username: </label>
        <input type="text" placeholder="Username..." onChange={(event) => { setUsername(event.target.value); }}></input>
        <label> Password: </label>
        <input type="password" placeholder="Password..." onChange={(event) => { setPassword(event.target.value); }}></input>

        <button onClick={login}> Login </button>

        <div className="create-acc">
            <label> Don't have account yet? </label>
            <button onClick={ () => { navigate("/register") } }> Register </button>
        </div>
        
        <div>
            <form action="http://localhost:3001/auth/login/google" method="GET">
                <button type="submit">Login with Google</button>
            </form>
        </div>
    </div>
}

export default Login;
