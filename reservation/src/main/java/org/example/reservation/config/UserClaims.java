package org.example.reservation.config;

public class UserClaims {
    public static final String ROLE_USER = "ROLE_USER";

    public static final String ROLE_ADMIN = "ROLE_ADMIN";

    public static final String ROLE_RESTAURANT_OWNER = "ROLE_RESTAURANT_OWNER";

    public static final String[] ALL_ROLES = {
            ROLE_USER,
            ROLE_ADMIN,
            ROLE_RESTAURANT_OWNER
    };
}
