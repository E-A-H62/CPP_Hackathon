// data structure for restaurant data
class Restaurant {

    constructor(name, cuisine, location, rating) {
        this.name = name;
        this.cuisine = cuisine;
        this.location = location;
        this.rating = rating;
    }

    getDetails() {
        return `Restaurant: ${this.name}, Cuisine: ${this.cuisine}, Location: ${this.location}, Rating: ${this.rating}`;
    }

    getCuisine() {
        return this.cuisine;
    }

    getLocation() {
        return this.location;
    }

    getRating() {
        return this.rating;
    }
}

export default Restaurant;