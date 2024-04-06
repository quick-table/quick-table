package org.example.reservation.services;

import org.example.reservation.auth.FirebaseAuthentication;
import org.example.reservation.exceptions.RestException;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;

public class BaseService {

    public FirebaseAuthentication getAuthentication() {
        var principal = SecurityContextHolder.getContext().getAuthentication();

        if (!(principal instanceof FirebaseAuthentication)) {
            throw new RestException()
                    .setStatus(HttpStatus.UNAUTHORIZED)
                    .setMessage("User is not authenticated")
                    .setMessageSummary("You do not have permission to access this resource ");
        }

        return (FirebaseAuthentication) principal;
    }
}
