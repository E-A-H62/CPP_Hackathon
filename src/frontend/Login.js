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

    // Styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center'
    };

    const titleStyle = {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '30px'
    };

    const formStyle = {
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };

    const formGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        width: '100%'
    };

    const labelStyle = {
        marginBottom: '8px',
        fontWeight: '500',
        color: '#444'
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem',
        transition: 'border-color 0.3s'
    };

    const buttonStyle = {
        padding: '12px 20px',
        backgroundColor: '#6a11cb',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
        marginTop: '10px',
        width: '100%'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Login</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formGroupStyle}>
                    <label htmlFor="username" style={labelStyle}>Username</label>
                    <input
                        type="text"
                        style={inputStyle}
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>Password</label>
                    <input
                        type="password"
                        style={inputStyle}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    );
};

export default Login;