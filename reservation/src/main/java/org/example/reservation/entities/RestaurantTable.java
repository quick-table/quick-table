package org.example.reservation.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class RestaurantTable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    private Integer capacity;

    @ManyToOne
    private Restaurant restaurant;
}
