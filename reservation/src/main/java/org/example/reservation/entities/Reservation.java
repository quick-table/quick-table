package org.example.reservation.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private ReservationStatus status;

    @ManyToOne
    private Restaurant restaurant;

    @ManyToOne
    private TimeSlot timeSlot;

    @ManyToOne
    private User user;
}

