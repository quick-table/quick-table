package org.example.reservation.dtos;

import lombok.Data;

@Data
public class CreateUserPayload {
    public String username;

    /**
     * Provide this if user must be created as restaurant owner. If not provided, user will be created as a regular user
     * capable of making reservations
     */
    public CreateRestaurantPayload createRestaurantPayload;
}