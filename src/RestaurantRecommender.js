/**
 * RestaurantRecommender component that allows users to search for restaurants
 * based on location and cuisine preferences.
 * @module RestaurantRecommender
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Main component for restaurant recommendation functionality.
 * Handles user input for location and cuisine preferences, and fetches restaurant data.
 * @returns {JSX.Element} The rendered RestaurantRecommender component
 */
const RestaurantRecommender = () => {
    /** @type {[string, Function]} Location state for zipcode input */
    const [location, setLocation] = useState('');
    /** @type {[string, Function]} Cuisine state for cuisine type input */
    const [cuisine, setCuisine] = useState('');
    /** @type {Function} Navigation hook from react-router */
    const navigate = useNavigate();
    /** @type {[Array, Function]} State for storing fetched restaurant data */
    const [data, setData] = useState([]);

    // Reference - https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430
    /**
     * Handles form submission and navigation to restaurant page
     * @param {Event} event - The form submission event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        // Can handle form submission here
        // For example, send data to backend or perform any logic
        console.log('Location:', location);
        console.log('Cuisine:', cuisine);
        navigate('/restaurant', { state: { location, cuisine } });
    };

    // Reference = https://medium.com/@alexandr.fework/curl-is-a-command-line-tool-used-for-making-http-requests-e2ab67aa4672
    /**
     * Effect hook to fetch restaurant data when component mounts
     * Makes an API call to get restaurants with specific tags
     */
    useEffect(() => {
        fetch('http://localhost:8080/api/restaurants?tags=Chicken,Korean')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center'
    };

    const headerStyle = {
        marginBottom: '30px',
        width: '100%'
    };

    const titleStyle = {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '10px'
    };

    const subtitleStyle = {
        fontSize: '1.2rem',
        color: '#666'
    };

    const formContainerStyle = {
        width: '100%',
        maxWidth: '500px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        marginBottom: '30px'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };

    const formGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left'
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
        marginTop: '10px'
    };

    const dataPreviewStyle = {
        width: '100%',
        maxWidth: '800px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginTop: '30px',
        textAlign: 'left'
    };

    const dataContainerStyle = {
        maxHeight: '300px',
        overflowY: 'auto',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>Welcome to Easy Eats</h1>
                <p style={subtitleStyle}>Find the perfect restaurant for your taste</p>
            </div>
            
            <div style={formContainerStyle}>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <div style={formGroupStyle}>
                        <label htmlFor="location" style={labelStyle}>Around what zipcode do you want to find restaurants?</label>
                        <input
                            type="number"
                            style={inputStyle}
                            id="location"
                            name="location"
                            min="0"
                            max="99999999"
                            step="1"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter zipcode"
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="cuisine" style={labelStyle}>What type of cuisine sounds good?</label>
                        <input
                            type="text"
                            style={inputStyle}
                            id="cuisine"
                            name="cuisine"
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)}
                            placeholder="e.g., Italian"
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>Find Restaurants</button>
                </form>
            </div>
            
            {data.length > 0 && (
                <div style={dataPreviewStyle}>
                    <h2 style={{ marginBottom: '15px', color: '#333' }}>API Data Preview</h2>
                    <div style={dataContainerStyle}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantRecommender;
