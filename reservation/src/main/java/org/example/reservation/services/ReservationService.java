package org.example.reservation.services;

import org.example.reservation.auth.UserClaims;
import org.example.reservation.repositories.*;
import org.springframework.http.HttpStatus;
import org.example.reservation.entities.TimeSlot;
import org.example.reservation.entities.Reservation;
import org.example.reservation.exceptions.RestException;
import org.example.reservation.dtos.CreateReservationDto;
import org.example.reservation.entities.ReservationStatus;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Component
public class ReservationService extends BaseService {
    private final UserRepository userRepository;

    private final ReservationRepository reservationRepository;

    private final TimeSlotRepository timeSlotRepository;

    private final RestaurantTableRespository restaurantTableRepository;

    public ReservationService(
            UserRepository userRepository,
            TimeSlotRepository timeSlotRepository,
            ReservationRepository reservationRepository,
            RestaurantTableRespository restaurantTableRepository
    ) {
        this.userRepository = userRepository;
        this.timeSlotRepository = timeSlotRepository;
        this.reservationRepository = reservationRepository;
        this.restaurantTableRepository = restaurantTableRepository;
    }

    public Reservation createReservation(CreateReservationDto createReservationDto) {
        var targetUser = userRepository.findById(createReservationDto.getUserId());
        var targetTable = restaurantTableRepository.findById(createReservationDto.getTableId());

        if (targetUser.isEmpty()) {
            throw new RestException()
                    .setStatus(HttpStatus.NOT_FOUND)
                    .setMessageSummary("The target user does not exist")
                    .setMessage(String.format("User with Id %s does not exist", createReservationDto.getUserId()));

        }

        if (targetTable.isEmpty()) {
            throw new RestException()
                    .setStatus(HttpStatus.NOT_FOUND)
                    .setMessageSummary("The target time slot does not exist")
                    .setMessage(String.format("Time slot with Id %s does not exist", createReservationDto.getUserId()));
        }

        var relevantTimeSlots = timeSlotRepository.findRelevantTimeSlot(
                createReservationDto.getStartDate(),
                createReservationDto.getEndDate(),
                createReservationDto.getTableId()
        );

        var takenTimeSlots = relevantTimeSlots.stream()
                .filter(TimeSlot::isAvailable)
                .toList();

        if (!takenTimeSlots.isEmpty()) {
            throw new RestException()
                    .setStatus(HttpStatus.CONFLICT)
                    .setMessageSummary("This range overlaps with an existing reservation")
                    .setMessage("The selected time range on this table overlaps with an existing reservation");
        }

        var earliestDate = relevantTimeSlots.stream()
                .min(Comparator.comparing(TimeSlot::getStartDate))
                .orElseThrow();

        var latestDate = relevantTimeSlots.stream()
                .max(Comparator.comparing(TimeSlot::getEndDate))
                .orElseThrow();

        var newTimeSlots = new ArrayList<TimeSlot>();


        // See explanation below
        if (earliestDate.getStartDate().compareTo(createReservationDto.getStartDate()) != 0) {
            var newTimeSlot = new TimeSlot()
                    .setAvailable(true)
                    .setTable(earliestDate.getTable())
                    .setRestaurant(earliestDate.getRestaurant())
                    .setStartDate(earliestDate.getStartDate())
                    .setEndDate(createReservationDto.getStartDate());

            newTimeSlots.add(newTimeSlot);
        }

        // If the latest available timeslot ends at the same time as this reservation, there is no need
        // to create a new timeslot outside the reservation because the reservation will take up the entire
        // When it is not the case we need to create a new timeslot right after the reservation
        if (latestDate.getEndDate().compareTo(createReservationDto.getEndDate()) != 0) {
            var newTimeSlot = new TimeSlot()
                    .setAvailable(true)
                    .setTable(latestDate.getTable())
                    .setRestaurant(latestDate.getRestaurant())
                    .setStartDate(latestDate.getStartDate())
                    .setEndDate(createReservationDto.getStartDate());

            newTimeSlots.add(newTimeSlot);
        }

        var reservationTimeSlot = new TimeSlot()
                .setAvailable(false)
                .setTable(targetTable.get())
                .setEndDate(createReservationDto.getEndDate())
                .setStartDate(createReservationDto.getStartDate())
                .setRestaurant(targetTable.get().getRestaurant());

        var newReservation = new Reservation()
                .setUser(targetUser.get())
                .setTimeSlot(reservationTimeSlot)
                .setStatus(ReservationStatus.ACTIVE)
                .setRestaurant(targetTable.get().getRestaurant());

        newTimeSlots.add(reservationTimeSlot);

        timeSlotRepository.saveAll(newTimeSlots);
        reservationRepository.save(newReservation);

        return newReservation;
    }

    public Reservation cancelReservation(int reservationId) {
        var user = getAuthentication();
        var targetReservation = reservationRepository.findById(reservationId);

        if (targetReservation.isEmpty()) {
            throw new RestException()
                    .setStatus(HttpStatus.CONFLICT)
                    .setMessageSummary("We couldn't find your reservation")
                    .setMessage(String.format("Reservation with id %s was not found", reservationId));
        }

        if (
                !user.isIn(UserClaims.ROLE_ADMIN) &&
                !targetReservation.get().getUser().getId().equals(user.getUserId()) &&
                !targetReservation.get().getRestaurant().getOwner().getId().equals(user.getUserId())
        ) {
            throw new RestException()
                    .setStatus(HttpStatus.UNAUTHORIZED)
                    .setMessageSummary("You do not have permission to cancel this reservation")
                    .setMessage("Only admin, restaurant owner or user who create the reservation can cancel it");
        }

        targetReservation.get().setStatus(ReservationStatus.CANCELLED);

        return targetReservation.get();
    }

    public List<Reservation> getUserReservation(String userId) {
        var user = getAuthentication();

        if (!user.isIn(UserClaims.ROLE_ADMIN) && !user.getUserId().equals(userId)) {
            throw new RestException()
                    .setStatus(HttpStatus.UNAUTHORIZED)
                    .setMessage("You can only access your own reservations")
                    .setMessageSummary("You can only access your own reservations");
        }

        return reservationRepository.findByUserId(userId);
    }
}
