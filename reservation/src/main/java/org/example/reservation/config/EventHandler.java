package org.example.reservation.config;

import org.example.reservation.auth.FirebaseProvider;
import org.example.reservation.services.ApplicationProperties;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class EventHandler {
    private final ApplicationProperties properties;

    public EventHandler(ApplicationProperties properties){
        this.properties = properties;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReadyEvent() {
        FirebaseProvider.initialize(this.properties.getFirebasePrivateKeyPath());
    }
}
