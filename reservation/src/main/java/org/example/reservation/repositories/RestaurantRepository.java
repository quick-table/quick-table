package org.example.reservation.repositories;

import org.example.reservation.dtos.SearchRestaurantDto;
import org.example.reservation.entities.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RestaurantRepository extends CrudRepository<Restaurant, Integer> {
    @Query("""
            SELECT r FROM Restaurant r
            WHERE r.name LIKE %:#{#searchRestaurantDto.restaurantName}%
            """)
    List<Restaurant> findRestaurant(SearchRestaurantDto searchRestaurantDto);
}
