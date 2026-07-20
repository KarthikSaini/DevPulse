package com.DevPulse.controller;

import com.DevPulse.dto.UserRequest;
import com.DevPulse.dto.UserResponse;
import com.DevPulse.entity.User;
import com.DevPulse.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<UserResponse> creatUser(@Valid @RequestBody UserRequest request){

        UserResponse response = userService.createUser(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public ResponseEntity<UserResponse> getByEmail(@RequestBody Map<String, String> request){
        String email = request.get("email");
        UserResponse response = userService.getByEmail(email);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/profile/{userId}")
    public ResponseEntity<UserResponse> getById(@PathVariable Long userId){
        UserResponse response = userService.getById(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUsers(){
        List<UserResponse> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUser(@PathVariable Long id,@RequestBody UserRequest request){
        UserResponse response = userService.updateUser(id,request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){
        boolean isDeleted = userService.deleteUser(id);
        return !isDeleted ? new ResponseEntity<>("User Deleted",HttpStatus.OK) :
                new ResponseEntity<>("User not deleted", HttpStatus.NOT_FOUND);
    }
}
