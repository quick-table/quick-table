package org.example.reservation.services;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import org.example.reservation.auth.UserClaims;
import org.example.reservation.entities.User;
import org.example.reservation.exceptions.RestException;
import org.example.reservation.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

@Component
public class UserService extends BaseService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser() throws FirebaseAuthException {
        var requestingUser = getAuthentication();

        var existingUser = userRepository.findById(requestingUser.getUserId());

        if (existingUser != null) {
            throw new RestException()
                    .setStatus(HttpStatus.CONFLICT)
                    .setMessage("There already exists a database user linked with this Firebase user")
                    .setMessageSummary("Something went wrong with the user creation process. Please try again later.");
        }

        var userRoles = new String[]{
                UserClaims.ROLE_USER
        };

        var newUser = new User()
                .setId(requestingUser.getUserId())
                .setUsername("Placeholder user name");

        userRepository.save(newUser);

        var claimContainer = new HashMap<String, Object>();
        claimContainer.put("custom_claims", userRoles);

        FirebaseAuth.getInstance().setCustomUserClaims(requestingUser.getUserId(), claimContainer);

        return newUser;
    }

    public List<String> updateUserRoles(String id, List<String> newRoles) throws FirebaseAuthException {
        for (String newRole : newRoles) {
            if (!UserClaims.ALL_ROLES.contains(newRole)) {
                throw new RestException()
                        .setStatus(HttpStatus.BAD_REQUEST)
                        .setMessage(String.format("Invalid role %s provided", newRole))
                        .setMessageSummary("Failed to promote user due to internal server error");
            }
        }

        var claimContainer = new HashMap<String, Object>();
        claimContainer.put("custom_claims", newRoles);

        FirebaseAuth.getInstance().setCustomUserClaims(id, claimContainer);

        return newRoles;
    }
}
