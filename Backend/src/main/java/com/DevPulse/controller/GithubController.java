package com.DevPulse.controller;

import com.DevPulse.dto.GithubProfileResponse;
import com.DevPulse.service.GithubService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/github")
public class GithubController {

    private final GithubService githubService;

    @GetMapping("/{userId}")
    public GithubProfileResponse getProfile(@PathVariable Long userId){
        return githubService.getProfile(userId);
    }

}
