package com.DevPulse.serviceImpl;

import com.DevPulse.dto.LoginRequest;
import com.DevPulse.dto.LoginResponse;
import com.DevPulse.dto.SignupRequest;
import com.DevPulse.dto.UserResponse;
import com.DevPulse.entity.User;
import com.DevPulse.exception.EmailAlreadyExistsException;
import com.DevPulse.exception.PasswordNotMatchedException;
import com.DevPulse.exception.UserNotFoundException;
import com.DevPulse.repository.UserRepository;
import com.DevPulse.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    @Override
    public UserResponse signup(SignupRequest request) {
        User findUser = userRepository.findByEmail(request.getEmail());
        if(findUser != null){
            throw new EmailAlreadyExistsException("User already exists");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        User savedUser = userRepository.save(user);

        return UserResponse.builder()
                .id(savedUser.getId())
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail());

        if(user == null){
            throw new UserNotFoundException("User not found");
        }

        if(!request.getPassword().equals(user.getPassword())){
            throw new PasswordNotMatchedException("Password is incorrect");
        }

        return LoginResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .token("Temp token")
                .build();
    }
}
