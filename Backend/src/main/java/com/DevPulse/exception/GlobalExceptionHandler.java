package com.DevPulse.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleRuntimeException(RuntimeException ex){

        ErrorResponse error = ErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .error(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase())
                .message(ex.getMessage())
                .build();

        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(error);
    }

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleEmailAlreadyExistsException(EmailAlreadyExistsException ex){

        ErrorResponse error = ErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(409)   // status(HttpStatus.CONFLICT.value())
                .error(HttpStatus.CONFLICT.getReasonPhrase())
                .errorCode("EMAIL_ALREADY_EXISTS")
                .message("Email already exists")
                .build();

        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(error);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(UserNotFoundException ex){
        ErrorResponse error =ErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.UNAUTHORIZED.value())   // 401
                .error(HttpStatus.UNAUTHORIZED.getReasonPhrase())
                .message(ex.getMessage())
                .errorCode("USER_NOT_FOUND")
                .message("User does not exist.")
                .build();

        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(error);
    }

    @ExceptionHandler(PasswordNotMatchedException.class)
    public ResponseEntity<ErrorResponse> handlePasswordNotMatchedException(PasswordNotMatchedException ex){
        ErrorResponse error = ErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(401)
                .error(HttpStatus.UNAUTHORIZED.getReasonPhrase())
                .errorCode("INVALID_PASSWORD")
                .message("Password is incorrect")
                .message(ex.getMessage())
                .build();

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(error);
    }
}
