package org.example.reservation.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    private String email;

    @ManyToOne
    private User owner;

    private String logoUrl;

    @OneToMany(mappedBy = "restaurant")
    private Set<RestaurantTable> restaurants;

    @OneToMany(mappedBy = "restaurant")
    private Set<Reservation> reservations;
}