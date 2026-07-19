package com.DevPulse.service;

import com.DevPulse.dto.GithubResponse;

public interface GithubService {

    GithubResponse getProfile(Long userId);

}
