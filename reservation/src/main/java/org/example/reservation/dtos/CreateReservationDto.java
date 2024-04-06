package org.example.reservation.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class CreateReservationDto {
    private int tableId;

    private int userId;

    private Date startDate;

    private Date endDate;
}
