/**
 * Restaurant class that represents a restaurant entity with basic information.
 * @module Restaurant
 */

/**
 * Class representing a restaurant with its basic details.
 */
class Restaurant {
    /**
     * Creates a new Restaurant instance.
     * @param {string} name - The name of the restaurant
     * @param {string} cuisine - The type of cuisine served
     * @param {string} location - The address of the restaurant
     * @param {number} rating - The restaurant's rating
     */
    constructor(name, cuisine, location, rating) {
        this.name = name;
        this.cuisine = cuisine;
        this.location = location;
        this.rating = rating;
        this.isSaved = false;
    }

    /**
     * Returns a formatted string with all restaurant details.
     * @returns {string} Formatted string containing restaurant information
     */
    getDetails() {
        return `Restaurant: ${this.name}, Cuisine: ${this.cuisine}, Location: ${this.location}, Rating: ${this.rating}`;
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
     * Returns whether the restaurant is saved.
     * @returns {boolean} The saved status of the restaurant
     */
    getIsSaved() {
        return this.isSaved;
    }
}

export default Restaurant;