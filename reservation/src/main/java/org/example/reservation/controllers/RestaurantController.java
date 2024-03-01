package org.example.reservation.controllers;

import org.example.reservation.entities.Restaurant;
import org.example.reservation.repositories.RestaurantRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/api")
public class RestaurantController {
    private final RestaurantRepository restaurantRepository;

    public RestaurantController(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    @PostMapping(path="/restaurant") // Map ONLY POST Requests
    public String addNewUser (@RequestBody Restaurant restaurant) {
        restaurantRepository.save(restaurant);
        return "You got it brother";
    }

    @GetMapping(path="/restaurant")
    public Iterable<Restaurant> getAllUsers() {
        return restaurantRepository.findAll();
    }
}