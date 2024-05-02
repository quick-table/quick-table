package org.example.reservation.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private Restaurant restaurant;

    @ManyToOne
    @JsonIgnore
    private TimeSlot timeSlot;

    @ManyToOne
    @JsonIgnore
    private User user;
}

