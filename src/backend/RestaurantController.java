package com.restaurants.types.restaurants;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * REST Controller for handling restaurant-related HTTP requests.
 * Provides endpoints for retrieving restaurant information.
 */
@RestController
@RequestMapping(path = "api/restaurants")
public class RestaurantController {
    /** Service for handling restaurant business logic */
    private final RestaurantsService restaurantsService;

    /**
     * Constructor for RestaurantController.
     * 
     * @param restaurantsService the service for restaurant operations
     */
    @Autowired
    public RestaurantController(RestaurantsService restaurantsService) {
        this.restaurantsService = restaurantsService;
    }

    /**
     * GET endpoint to retrieve restaurants.
     * If tags are provided, returns restaurants matching all the specified tags.
     * Otherwise, returns all restaurants.
     * 
     * @param tags optional comma-separated list of tags to filter restaurants
     * @return a list of restaurants matching the criteria
     */
    @GetMapping
    public List<Restaurants> getRestaurants(@RequestParam(required = false) String tags) {
        if (tags != null) {
            return restaurantsService.getRestaurantFromDesc(tags.split(","));
        } else {
            return restaurantsService.getRestaurants();
        }
    }
}
