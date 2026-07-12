package com.DevPulse.controller;

import com.DevPulse.dto.UserRequest;
import com.DevPulse.dto.UserResponse;
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
    public ResponseEntity<UserResponse> getById(@RequestBody Map<String, String> request){
        String email = request.get("email");
        UserResponse response = userService.getByEmail(email);
        return new ResponseEntity<>(response, HttpStatus.FOUND);
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
}
