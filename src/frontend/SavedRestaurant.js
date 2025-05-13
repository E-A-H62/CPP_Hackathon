/**
 * SavedRestaurant class that extends Restaurant to represent a saved restaurant with additional menu information.
 * @module SavedRestaurant
 */

import Restaurant from './Restaurant';

/**
 * Class representing a saved restaurant with menu information.
 * Extends the base Restaurant class to add menu functionality.
 * @extends Restaurant
 */
class SavedRestaurant extends Restaurant {
    /**
     * Creates a new SavedRestaurant instance.
     * @param {string} name - The name of the restaurant
     * @param {string} cuisine - The type of cuisine served
     * @param {string} location - The address of the restaurant
     * @param {number} rating - The restaurant's rating
     * @param {Array<string>} menu - The restaurant's menu items
     */
    constructor(name, cuisine, location, rating, menu) {
        super(name, cuisine, location, rating);
        this.isSaved = true; // Indicates that this restaurant is saved
        this.menu = menu; // Menu of the saved restaurant
    }

    /**
     * Returns a formatted string with all saved restaurant details.
     * @returns {string} Formatted string containing saved restaurant information
     */
    getDetails() {
        return `Saved Restaurant: ${this.name}, Cuisine: ${this.cuisine}, Location: ${this.location}, Rating: ${this.rating}`;
    }
    
    /**
     * Returns the restaurant name.
     * @returns {string} The restaurant name
     */
    getName() {
        return this.name;
    }

    /**
     * Returns the restaurant cuisine type.
     * @returns {string} The cuisine type
     */
    getCuisine() {
        return this.cuisine;
    }

    /**
     * Returns the restaurant location.
     * @returns {string} The restaurant location
     */
    getLocation() {
        return this.location;
    }

    /**
     * Returns the restaurant rating.
     * @returns {number} The restaurant rating
     */
    getRating() {
        return this.rating;
    }

    /**
     * Returns the restaurant's menu items.
     * @returns {Array<string>} The restaurant's menu
     */
    getMenu() {
        return this.menu; // Returns the menu of the saved restaurant
    }
    
    /**
     * Returns whether the restaurant is saved.
     * @returns {boolean} Always returns true for saved restaurants
     */
    getIsSaved() {
        return this.isSaved; // Returns true indicating that this restaurant is saved
    }
}

export default SavedRestaurant;