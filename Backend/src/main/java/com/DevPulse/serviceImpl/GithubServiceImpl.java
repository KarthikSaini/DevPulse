package com.DevPulse.serviceImpl;

import com.DevPulse.dto.GithubProfileResponse;
import com.DevPulse.entity.User;
import com.DevPulse.exception.UserNotFoundException;
import com.DevPulse.repository.UserRepository;
import com.DevPulse.service.GithubService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
@RequiredArgsConstructor
public class GithubServiceImpl implements GithubService {

    private final RestClient restClient;
    private final UserRepository userRepository;

    @Override
    public GithubProfileResponse getProfile(Long userId) {

        User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("User not found")
        );

        String githubUsername = user.getGithubUsername();

        return restClient.get()
                .uri("https://api.github.com/users/{username}",
                        githubUsername)
                .retrieve()
                .body(GithubProfileResponse.class);
    }
}
