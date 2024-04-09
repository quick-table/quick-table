package org.example.reservation.repositories;


import org.example.reservation.entities.RestaurantTable;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantTableRespository extends CrudRepository<RestaurantTable, Integer> {

}
