package org.example.reservation.entities;


import lombok.Data;

import java.util.Set;

import jakarta.persistence.*;

@Entity
@Data
public class User {
    @Id
    private String id;

    private String username;

    @OneToMany(mappedBy = "owner")
    private Set<Restaurant> restaurants;
}
