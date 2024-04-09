package org.example.reservation.config;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import lombok.NonNull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.reservation.auth.FirebaseAuthentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class AuthenticationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
        var context = SecurityContextHolder.getContext();
        var bearerToken = request.getHeader("Authorization");

        if (bearerToken == null || !bearerToken.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        var token = bearerToken.substring(7);

        FirebaseToken firebaseToken;

        try {
            firebaseToken = FirebaseAuth.getInstance().verifyIdToken(token);
        } catch (FirebaseAuthException exception) {
            filterChain.doFilter(request, response);
            return;
        }

        var authentication = new FirebaseAuthentication(firebaseToken);

        context.setAuthentication(authentication);

        filterChain.doFilter(request, response);
    }
}
