package org.example.reservation.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class TimeSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Date startDate;

    private Date endDate;

    private boolean isAvailable;

    @OneToOne
    private RestaurantTable table;

    @ManyToOne
    private Restaurant restaurant;
}
