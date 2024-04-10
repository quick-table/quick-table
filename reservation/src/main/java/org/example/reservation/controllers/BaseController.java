package org.example.reservation.controllers;

import org.example.reservation.dtos.ResponseWrapper;
import org.springframework.http.HttpStatus;

public class BaseController {
    protected  <T> ResponseWrapper<T> ok(T data) {
        return new ResponseWrapper<>(data).setStatus(HttpStatus.OK);
    }


    protected  <T> ResponseWrapper<T> created(T data) {
        return new ResponseWrapper<>(data).setStatus(HttpStatus.CREATED);
    }
}
