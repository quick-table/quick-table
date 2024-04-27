package org.example.reservation.repositories;

import org.example.reservation.dtos.SearchTimeSlotDto;
import org.example.reservation.entities.Restaurant;
import org.example.reservation.entities.TimeSlot;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface TimeSlotRepository extends CrudRepository<TimeSlot, Integer> {
    @Query("""
            SELECT t FROM TimeSlot t
            WHERE (t.startDate < :#{#query.startDate} and :#{#query.endDate} < t.endDate)
            """)
    List<TimeSlot> searchTimeSlot(SearchTimeSlotDto query);


    /**
     * Returns the list of time slots on the provided table that the provided time range overlaps with
     */
    @Query("""
            SELECT t FROM TimeSlot t
            WHERE t.table.id = :tableId and
                (
                    (t.startDate <= :endDate and :endDate <= t.endDate) or
                    (t.startDate <= :startDate and :startDate <= t.endDate) or
                    (:startDate <= t.startDate and t.endDate <= :endDate)
                )
            """)
    List<TimeSlot> findRelevantTimeSlot(Date startDate, Date endDate, int tableId);


    @Query("""
            SELECT t.restaurant FROM TimeSlot t
            WHERE (t.startDate < :#{#query.startDate} and :#{#query.endDate} < t.endDate) and
                   t.isAvailable and
                   (:#{#query.name} is null or t.restaurant.name LIKE %:#{#query.name}%)
            group by t.restaurant
            """)
    List<Restaurant> searchAvailableRestaurant(SearchTimeSlotDto query);
}
