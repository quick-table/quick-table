package org.example.reservation.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
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

    @Column(length = 5000)
    private String description;

    private String logoUrl;

    @OneToMany(mappedBy = "restaurant")
    private List<RestaurantTable> restaurantTables;

    @OneToMany(mappedBy = "restaurant")
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "restaurant")
    private List<TimeSlot> timeSlots;
}