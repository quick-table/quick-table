package org.example.reservation.auth;

import java.util.Arrays;
import java.util.List;

public class UserClaims {
    public static final String ROLE_USER = "ROLE_USER";

    public static final String ROLE_ADMIN = "ROLE_ADMIN";

    public static final String ROLE_RESTAURANT_OWNER = "ROLE_RESTAURANT_OWNER";

    public static final List<String> ALL_ROLES = Arrays.asList(
            ROLE_USER,
            ROLE_ADMIN,
            ROLE_RESTAURANT_OWNER
    );
}
