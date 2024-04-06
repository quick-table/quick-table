package org.example.reservation.repositories;

import org.example.reservation.dtos.SearchRestaurantDto;
import org.example.reservation.entities.Reservation;
import org.example.reservation.entities.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReservationRepository extends CrudRepository<Reservation, Integer> {
    @Query("""
            SELECT r FROM Restaurant r
            WHERE r.name LIKE %:#{#searchRestaurantDto.restaurantName}%
            """)
    List<Restaurant> findRestaurant(SearchRestaurantDto searchRestaurantDto);


    @Query("""
            SELECT r FROM Reservation r
            WHERE r.user.id = :userId
            """)
    List<Reservation> findByUserId(String userId);
}
