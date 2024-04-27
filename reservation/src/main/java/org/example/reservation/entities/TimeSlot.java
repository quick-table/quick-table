package org.example.reservation.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class TimeSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Date startDate;

    private Date endDate;

    /**
     * True of active timeslot when no active reservation is referencing this time slot.
     * When a new reservation is created on this timeslot, the timeslot then becomes unavailable.
     */
    private boolean isAvailable;

    /**
     * Is true for timeslot that can be used for reservation purposes. Inactive timeslot are
     * ignored when computing reservation conflicts. For this reason, they are suitable for
     * remnant timeslots that follow the creation of a reservation.
     */
    private boolean isActive;

    @ManyToOne
    private RestaurantTable table;

    @OneToMany(mappedBy = "timeSlot", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Reservation> reservation;

    @ManyToOne
    private Restaurant restaurant;
}
