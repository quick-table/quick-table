package org.example.reservation.config;

import com.google.firebase.auth.FirebaseToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

public class FirebaseAuthentication implements Authentication {
    private final HashSet<GrantedAuthority> authorities = new HashSet<>();

    FirebaseAuthentication(FirebaseToken token) {
        var claimMaybes = token.getClaims().get("custom_claims");

        if (!(claimMaybes instanceof ArrayList<?> claims)) {
            throw new IllegalArgumentException("User custom claims are not valid. We expected an array");
        }

        for (var claimMaybe : claims) {
            if (!(claimMaybe instanceof String claim)) {
                throw new IllegalArgumentException("User custom claims are not valid. We expected an array of strings");
            }

            authorities.add(new FirebaseAuthority(claim));
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getDetails() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return null;
    }

    @Override
    public boolean isAuthenticated() {
        return true;
    }

    @Override
    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
        throw new UnsupportedOperationException();
    }

    @Override
    public String getName() {
        return null;
    }
}
