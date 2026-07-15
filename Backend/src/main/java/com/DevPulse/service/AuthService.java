package com.DevPulse.service;

import com.DevPulse.dto.LoginRequest;
import com.DevPulse.dto.LoginResponse;
import com.DevPulse.dto.SignupRequest;
import com.DevPulse.dto.UserResponse;

public interface AuthService {

    UserResponse signup(SignupRequest request);

    LoginResponse login(LoginRequest request);
}
