package com.DevPulse.service;

import com.DevPulse.dto.UserRequest;
import com.DevPulse.dto.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);

    List<UserResponse> getAllUsers();

    UserResponse getByEmail(String email);

    UserResponse updateUser(Long id, UserRequest request);

    boolean deleteUser(Long id);

    UserResponse getById(Long id);

}
