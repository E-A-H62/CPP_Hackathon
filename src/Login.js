/**
 * Login component that handles user authentication.
 * @module Login
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Login component that provides a form for user authentication.
 * Handles user input and navigation to the recommender page upon successful login.
 * @returns {JSX.Element} The rendered Login component
 */
const Login = () => {
    /** @type {[string, Function]} State for username input */
    const [username, setUsername] = useState('');
    /** @type {[string, Function]} State for password input */
    const [password, setPassword] = useState('');
    /** @type {Function} Navigation hook from react-router */
    const navigate = useNavigate();

    /**
     * Handles form submission and navigation to recommender page
     * @param {Event} event - The form submission event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        // Can handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // Navigate to the restaurant recommender page after login
        navigate('/recommender');
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;