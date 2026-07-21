package com.DevPulse.serviceImpl;

import com.DevPulse.dto.UserRequest;
import com.DevPulse.dto.UserResponse;
import com.DevPulse.entity.User;
import com.DevPulse.exception.EmailAlreadyExistsException;
import com.DevPulse.exception.UserNotFoundException;
import com.DevPulse.repository.UserRepository;
import com.DevPulse.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    @Override
    public UserResponse createUser(UserRequest request) {

        if(userRepository.existsByEmail(request.getEmail())){
           throw new EmailAlreadyExistsException("User already exists");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .bio(request.getBio())
                .githubUsername(request.getGithubUsername())
                .profileImage(request.getProfileImage())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        User savedUser = userRepository.save(user);

        return mapToUserResponse(savedUser);
    }

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> Users = userRepository.findAll();
        return Users.stream().map(this::mapToUserResponse)
                .toList();
    }

    @Override
    public UserResponse getByEmail(String email) {

        User user = userRepository.findByEmail(email);
        if(user == null){
            throw new UserNotFoundException("User not found");
        }

//        User user = userRepository.findByEmail(email)
//                .orElseThrow(()-> new UserNotFoundException("User not found"));

        return mapToUserResponse(user);

    }

    @Override
    public UserResponse updateUser(Long id, UserRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException("User not found"));

        if(request.getBio()!=null){
            user.setBio(request.getBio());
        }
        if(request.getName()!=null){
            user.setName(request.getName());
        }
        if(request.getEmail()!=null){
            user.setEmail(request.getEmail());
        }
        if(request.getGithubUsername()!=null){
            user.setGithubUsername(request.getGithubUsername());
        }
        if(request.getProfileImage()!=null){
            user.setProfileImage(request.getProfileImage());
        }
        if(request.getLeetcode_username()!=null){
            user.setLeetcode_username(request.getLeetcode_username());
        }

        user.setUpdatedAt(LocalDateTime.now());

        User updatedUser = userRepository.save(user);
        return mapToUserResponse(updatedUser);
    }

    @Override
    public boolean deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException("User not found"));

        userRepository.delete(user);

        Optional<User> deletedUser = userRepository.findById(id);
        return deletedUser.isPresent();
    }

    @Override
    public UserResponse getById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException("User not found"));

        return mapToUserResponse(user);
    }

    private UserResponse mapToUserResponse(User user){
        return UserResponse.builder()
                .id(user.getId()).
                name(user.getName())
                .email(user.getEmail())
                .bio(user.getBio())
                .leetcode_username(user.getLeetcode_username())
                .githubUsername(user.getGithubUsername())
                .profileImage(user.getProfileImage())
                .build();
    }
}
