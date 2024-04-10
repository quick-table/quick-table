package org.example.reservation.auth;

import java.util.HashSet;
import java.util.ArrayList;
import java.util.Collection;

import com.google.firebase.auth.FirebaseToken;
import lombok.Getter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;


public class FirebaseAuthentication implements Authentication {
    @Getter
    private final String userId;

    @Getter
    private final String email;

    private final HashSet<GrantedAuthority> authorities = new HashSet<>();

    public boolean isIn(String group) {
        return authorities
                .stream()
                .anyMatch(x -> x.getAuthority().equals(group));
    }

    public FirebaseAuthentication(FirebaseToken token) {
        this.userId = token.getClaims().get("sub").toString();
        this.email = token.getClaims().get("email").toString();

        var claimMaybes = token.getClaims().get("custom_claims");

        if (claimMaybes == null) {
            return;
        }

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
