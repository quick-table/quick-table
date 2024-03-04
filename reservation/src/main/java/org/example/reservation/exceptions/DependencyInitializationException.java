package org.example.reservation.exceptions;

public class DependencyInitializationException extends RuntimeException {
    public DependencyInitializationException(String message, Throwable cause) {
        super(message, cause);
    }
}
