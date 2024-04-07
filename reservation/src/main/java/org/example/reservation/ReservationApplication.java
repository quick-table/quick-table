package org.example.reservation;

import org.example.reservation.auth.FirebaseProvider;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

@SpringBootApplication
@EnableMethodSecurity(securedEnabled = true)
public class ReservationApplication {
    public static void main(String[] args) {
        FirebaseProvider.initialize();
        SpringApplication.run(ReservationApplication.class, args);
    }
}
