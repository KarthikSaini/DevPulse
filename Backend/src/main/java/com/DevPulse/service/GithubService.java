package com.DevPulse.service;

import com.DevPulse.dto.GithubProfileResponse;

public interface GithubService {

    GithubProfileResponse getProfile(Long userId);
}
