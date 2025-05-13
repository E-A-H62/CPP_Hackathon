package com.restaurants.types.restaurants;

import jakarta.persistence.*;

/**
 * Entity class representing a restaurant in the database.
 * This class maps to the "restaurants" table and contains basic restaurant information.
 */
@Entity
@Table(name = "restaurants")
public class Restaurants {
    /** Unique identifier for the restaurant */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Market or area where the restaurant is located */
    @Column(name = "market")
    private String market;

    /** Name of the restaurant */
    @Column(name = "rname")
    private String rname;

    /** Description of the restaurant */
    @Column(name = "rdesc")
    private String rdesc;

    /** Address of the restaurant */
    @Column(name = "raddy")
    private String raddy;

    /**
     * Default constructor required by JPA.
     */
    public Restaurants() {
    }

    /**
     * Constructor with all fields.
     * 
     * @param id Unique identifier for the restaurant
     * @param market Market or area where the restaurant is located
     * @param rname Name of the restaurant
     * @param rdesc Description of the restaurant
     * @param raddy Address of the restaurant
     */
    public Restaurants(Long id, String market, String rname, String rdesc, String raddy) {
        this.id = id;
        this.market = market;
        this.rname = rname;
        this.rdesc = rdesc;
        this.raddy = raddy;
    }

    /**
     * Gets the restaurant's unique identifier.
     * 
     * @return the restaurant's ID
     */
    public Long getId() {
        return id;
    }

    /**
     * Gets the market or area where the restaurant is located.
     * 
     * @return the restaurant's market
     */
    public String getMarket() {
        return market;
    }

    /**
     * Gets the name of the restaurant.
     * 
     * @return the restaurant's name
     */
    public String getRname() {
        return rname;
    }

    /**
     * Gets the description of the restaurant.
     * 
     * @return the restaurant's description
     */
    public String getRdesc() {
        return rdesc;
    }

    /**
     * Gets the address of the restaurant.
     * 
     * @return the restaurant's address
     */
    public String getRaddy() {
        return raddy;
    }
}
