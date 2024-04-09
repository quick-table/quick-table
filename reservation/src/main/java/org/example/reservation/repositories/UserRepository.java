package org.example.reservation.repositories;

import org.example.reservation.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findById(String id);
}
