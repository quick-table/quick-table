package org.example.reservation.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String email;

    @ManyToOne
    private User owner;

    private String logoUrl;

    @OneToMany(mappedBy = "restaurant")
    private Set<RestaurantTable> restaurantTables;

    @OneToMany(mappedBy = "restaurant")
    private Set<Reservation> reservations;
}