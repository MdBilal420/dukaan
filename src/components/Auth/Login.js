import React from 'react';
import "./login.css"

const Login = () => {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input type="text" placeholder="Username" />

                <label>Password</label>
                <input type="text" placeholder="Password" />

                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
