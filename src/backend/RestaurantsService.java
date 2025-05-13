package com.restaurants.types.restaurants;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service class that provides business logic for restaurant operations.
 * Handles restaurant data retrieval and filtering based on various criteria.
 */
@Component
public class RestaurantsService {
    /** Repository for restaurant data access */
    private final RestaurantRepository restaurantRepository;

    /**
     * Constructor for RestaurantsService.
     * 
     * @param restaurantRepository the repository for restaurant data access
     */
    @Autowired
    public RestaurantsService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    /**
     * Retrieves all restaurants from the database.
     * 
     * @return a list of all restaurants
     */
    public List<Restaurants> getRestaurants() {
        return restaurantRepository.findAll();
    }

    /**
     * Retrieves restaurants that match all the specified tags in their description.
     * The search is case-insensitive.
     * 
     * @param tags variable number of tags to search for in restaurant descriptions
     * @return a list of restaurants that match all the specified tags
     */
    public List<Restaurants> getRestaurantFromDesc(String... tags) {
        return restaurantRepository.findAll().stream()
                .filter(restaurants -> {
                    String desc = restaurants.getRdesc().toLowerCase();
                    return Arrays.stream(tags)
                            .map(String::toLowerCase)
                            .allMatch(desc::contains);
                })
                .collect(Collectors.toList());
    }

//    public List<Restaurants> getAnyRestaurantFromDesc(String... tags) {
//        return restaurantRepository.findAll().stream()
//                .filter(restaurants -> {
//                    String desc = restaurants.getRdesc().toLowerCase();
//                    return Arrays.stream(tags)
//                            .map(String::toLowerCase)
//                            .anyMatch(desc::contains);
//                })
//                .collect(Collectors.toList());
//    }
}
