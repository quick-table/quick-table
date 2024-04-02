package org.example.reservation.services;

import com.google.firebase.auth.FirebaseAuth;
import org.example.reservation.config.UserClaims;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
public class UserService {
    public void createRestaurantOwner(){
        var userRoles = new String[]{
                UserClaims.ROLE_USER,
                UserClaims.ROLE_ADMIN,
                UserClaims.ROLE_RESTAURANT_OWNER,
        };

        var claimContainer = new HashMap<String, Object>();
        claimContainer.put("custom_claims", userRoles);

        FirebaseAuth.getInstance().setCustomUserClaims("9aiZXwcUdyRtx2Q8jLg5T6pThQl1", claimContainer);
    }
}
