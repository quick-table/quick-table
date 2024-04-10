package org.example.reservation.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;

@Data
@EqualsAndHashCode(callSuper = true)
public class RestException extends RuntimeException {
    private String message;

    private HttpStatus status;

    private String  messageSummary;
}
