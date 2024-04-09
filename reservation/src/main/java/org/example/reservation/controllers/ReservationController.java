package org.example.reservation.controllers;

import org.example.reservation.dtos.CreateReservationDto;
import org.example.reservation.dtos.ResponseWrapper;
import org.example.reservation.entities.Reservation;
import org.example.reservation.services.ReservationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/reservations")
public class ReservationController extends BaseController {
    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("{id}/cancellation")
    public ResponseWrapper<Reservation> cancelReservation(@PathVariable int id) {
        return created(reservationService.cancelReservation(id));
    }

    @PostMapping
    public ResponseWrapper<Reservation> createReservation(@RequestBody CreateReservationDto createReservationDto) {
        return created(reservationService.createReservation(createReservationDto));
    }
}
