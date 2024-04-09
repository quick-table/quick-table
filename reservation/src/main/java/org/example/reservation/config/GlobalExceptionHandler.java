package org.example.reservation.config;

import org.springframework.http.ResponseEntity;
import org.example.reservation.dtos.ResponseWrapper;
import org.example.reservation.exceptions.RestException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler({RestException.class})
    public ResponseEntity<ResponseWrapper<Object>> handleStudentNotFoundException(RestException exception) {
        var body = new ResponseWrapper<>()
                .setData(null)
                .setStatus(exception.getStatus())
                .setError(exception.getMessage());

        return ResponseEntity
                .status(exception.getStatus())
                .body(body);
    }
}