package org.example.reservation.dtos;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ResponseWrapper<T> {
    private T data;

    private String error;

    private HttpStatus status;

    public ResponseWrapper(T response) {
        this.data = response;
        this.status = HttpStatus.OK;
    }

    public ResponseWrapper() {
    }
}
