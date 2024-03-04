package org.example.reservation.controllers;

import org.example.reservation.config.UserClaims;
import org.example.reservation.entities.Restaurant;
import org.example.reservation.repositories.RestaurantRepository;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/api")
public class RestaurantController {
    private final RestaurantRepository restaurantRepository;

    public RestaurantController(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    @Secured(UserClaims.ROLE_ADMIN)
    @GetMapping(path="admin") // Map ONLY POST Requests
    public String secureGet() {
        return "This endpoint requires Admin";
    }

    @Secured(UserClaims.ROLE_USER)
    @GetMapping(path="user") // Map ONLY POST Requests
    public String requiresUser() {
        return "this endpoint requires user";
    }

    @Secured(UserClaims.ROLE_RESTAURANT_OWNER)
    @GetMapping(path="owner") // Map ONLY POST Requests
    public String secureOwnerGetRequest() {
        return "This endpoint requires owner";
    }



    @GetMapping(path="secure-any") // Map ONLY POST Requests
    public String secureAnyAuthorization() {
        return "This is not secured";
    }

    @GetMapping(path="unsecure") // Map ONLY POST Requests
    public String unsecureGet() {
        return "This is not secured";
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