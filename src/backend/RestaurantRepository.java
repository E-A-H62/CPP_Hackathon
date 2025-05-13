package com.restaurants.types.restaurants;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repository interface for managing Restaurant entities.
 * Provides CRUD operations and custom query methods for restaurant data.
 */
@Repository
public interface RestaurantRepository extends JpaRepository<Restaurants, String> {
    
    /**
     * Finds a restaurant by its description.
     * 
     * @param rName the description to search for
     * @return an Optional containing the restaurant if found, empty otherwise
     */
    Optional<Restaurants> findByRdesc(String rName);
}
