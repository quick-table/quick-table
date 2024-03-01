package org.example.reservation.repositories;

import org.example.reservation.entities.Restaurant;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RestaurantRepository extends CrudRepository<Restaurant, Integer> {
    @Query("select r from Restaurant r where r.name = :restaurant.name")
    List<Restaurant> findUsersByCustomersFirstname(@Param("customer") Restaurant restaurant);
}
