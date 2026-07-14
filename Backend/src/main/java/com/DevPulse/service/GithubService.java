package com.DevPulse.service;

import com.DevPulse.dto.GithubProfileResponse;
import com.DevPulse.dto.GithubRepositoryResponse;

import java.util.List;

public interface GithubService {

    GithubProfileResponse getProfile(Long userId);

    List<GithubRepositoryResponse> getRepositories(Long userId);
}
