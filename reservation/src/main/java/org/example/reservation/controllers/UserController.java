package org.example.reservation.controllers;

import org.example.reservation.auth.UserClaims;
import org.example.reservation.entities.Reservation;
import org.example.reservation.entities.User;
import org.example.reservation.dtos.ResponseWrapper;
import org.example.reservation.services.ReservationService;
import org.example.reservation.services.UserService;
import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/api/users")
public class UserController extends BaseController {
    private final UserService userService;
    private final ReservationService reservationService;

    public UserController(UserService userService, ReservationService reservationService) {
        this.userService = userService;
        this.reservationService = reservationService;
    }

    @PostMapping
    public ResponseWrapper<User> createNewUser() throws FirebaseAuthException {
        return created(userService.createUser());
    }

    @PutMapping("{id}/roles")
    @Secured(UserClaims.ROLE_ADMIN)
    public ResponseWrapper<List<String>> updateUserPermissions(
            @PathVariable String id,
            @RequestBody List<String> roles
    ) throws FirebaseAuthException {
        return ok(userService.updateUserRoles(id, roles));
    }

    @GetMapping("{id}/reservations")
    public ResponseWrapper<List<Reservation>> getReservation(@PathVariable String id) {
        return created(reservationService.getUserReservation(id));
    }
}
