package org.example.reservation;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import org.example.reservation.auth.FirebaseProvider;
import org.example.reservation.config.UserClaims;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.io.IOException;

class AuthenticationTest {

    @Test
    void authenticateShouldWork() throws IOException, FirebaseAuthException {
        FirebaseProvider.initialize();

        var userRoles = new String[]{
                UserClaims.ROLE_USER,
                UserClaims.ROLE_ADMIN,
                UserClaims.ROLE_RESTAURANT_OWNER,
        };

        var claimContainer = new HashMap<String, Object>();
        claimContainer.put("custom_claims", userRoles);

        FirebaseAuth.getInstance().setCustomUserClaims("9aiZXwcUdyRtx2Q8jLg5T6pThQl1", claimContainer);
        assert true;
    }
}
