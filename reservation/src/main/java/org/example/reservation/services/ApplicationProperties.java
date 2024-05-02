package org.example.reservation.services;

import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;

@Data
@Component
public class ApplicationProperties {
    @Value("${firebase.private-key.path}")
    private String firebasePrivateKeyPath;
}
