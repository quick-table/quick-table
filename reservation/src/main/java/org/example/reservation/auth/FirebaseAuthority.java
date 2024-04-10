package org.example.reservation.auth;

import org.springframework.security.core.GrantedAuthority;

public class FirebaseAuthority implements GrantedAuthority {
    private final String authority;

    public FirebaseAuthority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return authority;
    }
}
