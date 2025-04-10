import Restaurant from './Restaurant';
import SavedRestaurant from './SavedRestaurant';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantPage = () => {
    // using dummy data to display on webpage
    const restaurant1 = new Restaurant("Pasta Palace", "Italian", "123 Main St", 4.5);
    const restaurant2 = new Restaurant("Pizza Place", "Italian", "789 Oak St", 4.2);
    const restaurant3 = new Restaurant("Burger Barn", "American", "321 Maple St", 4.0);
    const restaurants = [restaurant1, restaurant2, restaurant3];
    const savedRestaurant = new SavedRestaurant("Sushi Spot", "Japanese", "456 Elm St", 4.8, ["Sushi", "Ramen"]);
    const navigate = useNavigate();

    const goBack = (event) => {
        event.preventDefault();
        navigate('/recommender');
    };

    return (
        <div>
            <h1>Restaurant Details</h1>
            {restaurants.map((restaurant, index) => (
                <div key={index}>
                <p>{restaurant.getDetails()}</p>
                <div class="tile">
                    <p>Cuisine: {restaurant.getCuisine()}</p>
                    <p>Location: {restaurant.getLocation()}</p>
                    <p>Rating: {restaurant.getRating()}</p>
                </div>
            </div>
            ))};

            <h1>Saved Restaurant Details</h1>
            <p>{savedRestaurant.getDetails()}</p>
            <div class="tile">
                <p>Cuisine: {savedRestaurant.getCuisine()}</p>
                <p>Location: {savedRestaurant.getLocation()}</p>
                <p>Rating: {savedRestaurant.getRating()}</p>
                <p>Menu: {savedRestaurant.getMenu().join(", ")}</p>
                <p>Is Saved: {savedRestaurant.getIsSaved() ? "Yes" : "No"}</p>
            </div>

            <form onSubmit={goBack}>
                <button type="submit" className="btn btn-primary">Go Back</button>
            </form>

        </div>
    );
}

export default RestaurantPage;