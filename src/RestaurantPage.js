/**
 * RestaurantPage component that displays restaurant recommendations and saved restaurants.
 * Allows users to save and remove restaurants from their list.
 * @module RestaurantPage
 */

import Restaurant from './Restaurant';
import SavedRestaurant from './SavedRestaurant';
import React, {useState, useContext} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Tile.css';
import { RestaurantsContext } from './RestaurantsContext';

/**
 * Main component for displaying restaurant recommendations and managing saved restaurants.
 * Handles the display of restaurant details and provides functionality to save/remove restaurants.
 * @returns {JSX.Element} The rendered RestaurantPage component
 */
const RestaurantPage = () => {
    /** @type {[Array<Restaurant>, Function]} State for storing restaurant recommendations */
    const [restaurants, setRestaurants] = useState([
        new Restaurant("Pasta Palace", "Italian", "123 Main St", 4.5),
        new Restaurant("Pizza Place", "Italian", "789 Oak St", 4.2),
        new Restaurant("Burger Barn", "American", "321 Maple St", 4.0),
        new Restaurant("Pasta Palace", "Italian", "123 Main St", 4.5),
        new Restaurant("Pizza Place", "Italian", "789 Oak St", 4.2),
        new Restaurant("Burger Barn", "American", "321 Maple St", 4.0),
    ]);

    /** @type {Object} Context for managing saved restaurants */
    const {savedRestaurants, setSavedRestaurants} = useContext(RestaurantsContext);
    
    /** @type {Function} Navigation hook from react-router */
    const navigate = useNavigate();
    // References:
    //https://stackoverflow.com/questions/69714423/how-do-you-pass-data-when-using-the-navigate-function-in-react-router-v6
    //https://dev.to/esedev/how-to-pass-and-access-data-from-one-route-to-another-with-uselocation-usenavigate-usehistory-hooks-1g5m
    /** @type {Object} Location state containing search parameters */
    const {state} = useLocation();
    const {location, cuisine} = state;

    //Reference - https://www.dhiwise.com/post/boosting-performance-with-react-scroller-best-practices

    /**
     * Handles navigation back to the recommender page
     * @param {Event} event - The form submission event
     */
    const goBack = (event) => {
        event.preventDefault();
        navigate('/recommender');
    };

    // References:
    //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
    //https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that#:~:text=Testing%20for%20array%20elements:%20·%20Array.prototype.filter%20:,iterated%20over%20with%20is%20callback%20and%20filtered
    /**
     * Adds a restaurant to the saved restaurants list
     * @param {Restaurant} restaurant - The restaurant to be saved
     */
    const addToSavedRestaurants = (restaurant) => {
        //event.preventDefault();
        const isAlreadySaved = savedRestaurants.some((saved) => saved.getName() === restaurant.getName());

        if (!isAlreadySaved) {
            const newSaved = new SavedRestaurant(
                restaurant.getName(),
                restaurant.getCuisine(),
                restaurant.getLocation(),
                restaurant.getRating(),
                []
            );

            setSavedRestaurants([...savedRestaurants, newSaved]);
            setRestaurants(restaurants.filter(r => r.getDetails() !== restaurant.getDetails()));
        } else {
            alert("This restaurant is already saved!");
        }
    }

    /**
     * Removes a restaurant from the saved restaurants list
     * @param {SavedRestaurant} savedRestaurant - The restaurant to be removed
     */
    const removeFromSavedRestaurants = (savedRestaurant) => {
        //event.preventDefault();
        setSavedRestaurants(savedRestaurants.filter(r => r.getDetails() !== savedRestaurant.getDetails()));
    }

    // Styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center'
    };

    const headerStyle = {
        marginBottom: '20px',
        width: '100%'
    };

    const titleStyle = {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '10px'
    };

    const subtitleStyle = {
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '5px'
    };

    const sectionStyle = {
        width: '100%',
        maxWidth: '800px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '30px'
    };

    const scrollContainerStyle = {
        height: '200px',
        overflowY: 'auto',
        padding: '10px',
        width: '100%'
    };

    const tileStyle = {
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        textAlign: 'left'
    };

    const tileParagraphStyle = {
        margin: '5px 0',
        color: '#444'
    };

    const buttonStyle = {
        padding: '8px 16px',
        backgroundColor: '#6a11cb',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        transition: 'background-color 0.3s',
        marginTop: '10px'
    };

    const backButtonContainerStyle = {
        marginTop: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>What you wanted:</h1>
                <p style={subtitleStyle}>Location: {location}</p>
                <p style={subtitleStyle}>Cuisine: {cuisine}</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={{...titleStyle, fontSize: '1.5rem', marginBottom: '15px'}}>Restaurant Details</h2>
                <div style={scrollContainerStyle}>
                    {restaurants.map((restaurant, index) => (
                        <div key={index} style={tileStyle}>
                            <p style={tileParagraphStyle}>{restaurant.getDetails()}</p>
                            <p style={tileParagraphStyle}>Cuisine: {restaurant.getCuisine()}</p>
                            <p style={tileParagraphStyle}>Location: {restaurant.getLocation()}</p>
                            <p style={tileParagraphStyle}>Rating: {restaurant.getRating()}</p>
                            <button 
                                onClick={() => addToSavedRestaurants(restaurant)} 
                                type="button" 
                                style={buttonStyle}
                            >
                                Save
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div style={sectionStyle}>
                <h2 style={{...titleStyle, fontSize: '1.5rem', marginBottom: '15px'}}>Saved Restaurant Details</h2>
                <div style={scrollContainerStyle}>
                    {savedRestaurants.map((savedRestaurant, index) => (
                        <div key={index} style={tileStyle}>
                            <p style={tileParagraphStyle}>{savedRestaurant.getDetails()}</p>
                            <p style={tileParagraphStyle}>Cuisine: {savedRestaurant.getCuisine()}</p>
                            <p style={tileParagraphStyle}>Location: {savedRestaurant.getLocation()}</p>
                            <p style={tileParagraphStyle}>Rating: {savedRestaurant.getRating()}</p>
                            <p style={tileParagraphStyle}>Menu: {savedRestaurant.getMenu().join(", ")}</p>
                            <p style={tileParagraphStyle}>Is Saved: {savedRestaurant.getIsSaved() ? "Yes" : "No"}</p>
                            <button 
                                onClick={() => removeFromSavedRestaurants(savedRestaurant)} 
                                type="button" 
                                style={buttonStyle}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div style={backButtonContainerStyle}>
                <form onSubmit={goBack}>
                    <button type="submit" style={{...buttonStyle, padding: '10px 20px', fontSize: '1rem'}}>
                        Go Back
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RestaurantPage;