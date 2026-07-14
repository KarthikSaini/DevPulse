package com.DevPulse.serviceImpl;

import com.DevPulse.dto.GithubProfileResponse;
import com.DevPulse.dto.GithubRepositoryApiResponse;
import com.DevPulse.dto.GithubRepositoryResponse;
import com.DevPulse.entity.User;
import com.DevPulse.exception.UserNotFoundException;
import com.DevPulse.repository.UserRepository;
import com.DevPulse.service.GithubService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

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

    @Override
    public List<GithubRepositoryResponse> getRepositories(Long userId){

        User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("User not found")
        );

        String githubUsername = user.getGithubUsername();

        GithubRepositoryApiResponse[] repositories = restClient.get()
                .uri("https://api.github.com/users/{username}/repos",
                        githubUsername)
                .retrieve()
                .body(GithubRepositoryApiResponse[].class);

        return Arrays.stream(Objects.requireNonNull(repositories)).map(
                repo -> GithubRepositoryResponse.builder()
                        .name(repo.getName())
                        .description(repo.getDescription())
                        .language(repo.getLanguage())
                        .stars(repo.getStargazersCount())
                        .forks(repo.getForksCount())
                        .watchers(repo.getWatchersCount())
                        .size(repo.getSize())
                        .defaultBranch(repo.getDefaultBranch())
                        .repoUrl(repo.getHtmlUrl())
                        .createdAt(repo.getCreatedAt())
                        .updatedAt(repo.getUpdatedAt())
                        .build()
        ).toList();
    }
}
