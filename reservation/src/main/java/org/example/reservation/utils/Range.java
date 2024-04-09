package org.example.reservation.utils;

import lombok.Data;

@Data
public class Range<T> {
    private T start;
    private T end;
}
