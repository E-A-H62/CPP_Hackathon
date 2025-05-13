/**
 * Context and provider for managing saved restaurants across the application.
 * @module RestaurantsContext
 */

import React, {createContext} from 'react';
import SavedRestaurant from './SavedRestaurant';

/**
 * Context for managing saved restaurants state
 * @type {React.Context}
 */
export const RestaurantsContext = createContext();

/**
 * Provider component that manages the state of saved restaurants
 * and makes it available to child components through context.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the context
 * @returns {JSX.Element} The provider component with context value
 */
export const RestaurantsProvider = ({children}) => {
    /** @type {[Array<SavedRestaurant>, Function]} State for managing saved restaurants */
    const [savedRestaurants, setSavedRestaurants] = React.useState([
        new SavedRestaurant("Sushi Spot", "Japanese", "456 Elm St", 4.8, ["Sushi", "Ramen"]),
        new SavedRestaurant("Taco Town", "Mexican", "654 Pine St", 4.6, ["Tacos", "Burritos"]),
    ]);

    return (
        <RestaurantsContext.Provider value={{ savedRestaurants, setSavedRestaurants }}>
            {children}
        </RestaurantsContext.Provider>
    );
};