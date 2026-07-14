package com.DevPulse.controller;

import com.DevPulse.dto.GithubProfileResponse;
import com.DevPulse.dto.GithubRepositoryResponse;
import com.DevPulse.service.GithubService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.PublicKey;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/github")
public class GithubController {

    private final GithubService githubService;

    @GetMapping("/{userId}")
    public GithubProfileResponse getProfile(@PathVariable Long userId){
        return githubService.getProfile(userId);
    }

    @GetMapping("/user/{userId}/repos")
    public List<GithubRepositoryResponse> getRepositories(@PathVariable Long userId){
        return githubService.getRepositories(userId);
    }

}
