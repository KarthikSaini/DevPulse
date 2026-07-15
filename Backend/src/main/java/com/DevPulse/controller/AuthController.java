package com.DevPulse.controller;

import com.DevPulse.dto.LoginRequest;
import com.DevPulse.dto.LoginResponse;
import com.DevPulse.dto.SignupRequest;
import com.DevPulse.dto.UserResponse;
import com.DevPulse.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<UserResponse> signup(@Valid @RequestBody SignupRequest request){
        return new ResponseEntity<>(authService.signup(request), HttpStatus.CREATED);
    }

    @PostMapping("login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request){
        return ResponseEntity.ok(authService.login(request));
    }

}
