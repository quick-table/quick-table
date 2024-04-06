package org.example.reservation.services;

import org.example.reservation.dtos.SearchRestaurantDto;
import org.example.reservation.dtos.SearchTimeSlotDto;
import org.example.reservation.entities.Reservation;
import org.example.reservation.entities.Restaurant;
import org.example.reservation.repositories.RestaurantRepository;
import org.example.reservation.repositories.TimeSlotRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RestaurantService extends BaseService {
    private final TimeSlotRepository timeSlotRepository;

    private final RestaurantRepository restaurantRepository;

    public RestaurantService(TimeSlotRepository timeSlotRepository, RestaurantRepository restaurantRepository) {
        this.timeSlotRepository = timeSlotRepository;
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> searchRestaurant(SearchRestaurantDto searchRestaurantDto) {
        return restaurantRepository.findRestaurant(searchRestaurantDto);
    }

    public List<Restaurant> getAvailableRestaurant(SearchTimeSlotDto searchTimeSlotDto) {
        return timeSlotRepository.searchAvailableRestaurant(searchTimeSlotDto);
    }

}
