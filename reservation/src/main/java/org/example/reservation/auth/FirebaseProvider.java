package org.example.reservation.auth;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.example.reservation.exceptions.DependencyInitializationException;
import org.springframework.util.ResourceUtils;

import java.io.FileInputStream;
import java.io.IOException;

public class FirebaseProvider {
    private FirebaseProvider(){}

    public static void initialize() {
        try {
            var file = ResourceUtils.getFile("classpath:firebase-private-key.secret.json");

            var options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(new FileInputStream(file)))
                    .build();

            FirebaseApp.initializeApp(options);
        }catch (IOException exception) {
            throw new DependencyInitializationException("Failed to initialize Firebase.", exception);
        }
    }
}
