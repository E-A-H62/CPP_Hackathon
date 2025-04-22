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

    return (
        <div>
            <h1>What you wanted:</h1>
            <p>Location: {location}</p>
            <p>Cuisine: {cuisine}</p>

            <h1>Restaurant Details</h1>
            <div style={{ height: '200px', overflow: 'scroll' }}>
                {restaurants.map((restaurant, index) => (
                <div key={index}>
                    <div class="tile">
                        <p>{restaurant.getDetails()}</p>
                        <p>Cuisine: {restaurant.getCuisine()}</p>
                        <p>Location: {restaurant.getLocation()}</p>
                        <p>Rating: {restaurant.getRating()}</p>
                        <button onClick={() => addToSavedRestaurants(restaurant)} type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
                ))};
            </div>

            <h1>Saved Restaurant Details</h1>
            <div style={{ height: '200px', overflow: 'scroll' }}>
                {savedRestaurants.map((savedRestaurant, index) => (
                <div key={index}>
                    <div class="tile">
                        <p>{savedRestaurant.getDetails()}</p>
                        <p>Cuisine: {savedRestaurant.getCuisine()}</p>
                        <p>Location: {savedRestaurant.getLocation()}</p>
                        <p>Rating: {savedRestaurant.getRating()}</p>
                        <p>Menu: {savedRestaurant.getMenu().join(", ")}</p>
                        <p>Is Saved: {savedRestaurant.getIsSaved() ? "Yes" : "No"}</p>
                        <button onClick={() => removeFromSavedRestaurants(savedRestaurant)} type="submit" className="btn btn-primary">Remove</button>
                    </div>
                </div>
                ))};
            </div>

            <form onSubmit={goBack}>
                <button type="submit" className="btn btn-primary">Go Back</button>
            </form>

        </div>
    );
}

export default RestaurantPage;