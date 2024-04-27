package org.example.reservation.controllers;

import org.example.reservation.dtos.ResponseWrapper;
import org.example.reservation.dtos.SearchRestaurantDto;
import org.example.reservation.dtos.SearchTimeSlotDto;
import org.example.reservation.services.RestaurantService;
import org.springframework.web.bind.annotation.*;
import org.example.reservation.entities.Restaurant;

import java.util.List;

@RestController
@RequestMapping(path = "/api/restaurants")
public class RestaurantController extends BaseController {
    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @PostMapping("query")
    public ResponseWrapper<List<Restaurant>> searchRestaurant(@RequestBody SearchRestaurantDto searchRestaurantDto) {
        return ok(restaurantService.searchRestaurant(searchRestaurantDto));
    }

    @PostMapping("time-slot/query")
    public ResponseWrapper<List<Restaurant>> searchAvailableRestaurant(@RequestBody SearchTimeSlotDto searchTimeSlotDto) {
        return ok(restaurantService.getAvailableRestaurant(searchTimeSlotDto));
    }
}