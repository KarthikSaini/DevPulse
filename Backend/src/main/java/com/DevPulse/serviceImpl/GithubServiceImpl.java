package com.DevPulse.serviceImpl;

import com.DevPulse.dto.*;
import com.DevPulse.entity.User;
import com.DevPulse.exception.UserNotFoundException;
import com.DevPulse.repository.UserRepository;
import com.DevPulse.service.GithubService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.TextStyle;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class GithubServiceImpl implements GithubService {

    private final RestClient restClient;
    private final UserRepository userRepository;

//    @Value("${github.token}")
//    private String githubToken;

    @Override
    public GithubResponse getProfile(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new UserNotFoundException("User not found"));

        String githubUsername = user.getGithubUsername();
        String githubToken = user.getGithubAccessToken();

        System.out.println(githubUsername + "  "+ githubToken);

        // Profile
        GithubProfileResponse profile = getGithubProfile(githubUsername, githubToken);

        System.out.println(profile);
        System.out.println(githubUsername);
        // Repositories
        List<GithubRepository> repositories = getRepositories(githubUsername,githubToken);

        System.out.println(repositories);

        // Statistics
        Integer totalStars = repositories.stream()
                .mapToInt(repo -> repo.getStars() == null ? 0 : repo.getStars())
                .sum();

        System.out.println(totalStars);

        Integer totalForks = repositories.stream()
                .mapToInt(GithubRepository::getForks)
                .sum();

        System.out.println(totalForks);
        // Languages
        Map<String, Integer> languages = repositories.stream()
                .filter(repo -> repo.getLanguage() != null)
                .collect(Collectors.groupingBy(
                        GithubRepository::getLanguage,
                        Collectors.summingInt(repo -> 1)
                ));

        // Dummy Activity (we'll replace later)
        List<GithubEvent> events = getEvents(githubUsername, githubToken);

        Map<String, Integer> activity = getWeeklyActivity(events);

        Map<String,Integer> heatmap =
                getContributionHeatmap(githubUsername,githubToken);

        System.out.println(heatmap);

        return GithubResponse.builder()
                .login(profile.getLogin())
                .name(profile.getName())
                .avatarUrl(profile.getAvatarUrl())
                .bio(profile.getBio())
                .htmlUrl(profile.getProfileUrl())
                .location(profile.getLocation())
                .followers(profile.getFollowers())
                .following(profile.getFollowing())
                .publicRepos(profile.getPublicRepos())

                .totalStars(totalStars)
                .totalForks(totalForks)

                .languages(languages)
                .weeklyActivity(activity)

                .repositories(repositories)
                .contributionHeatmap(heatmap)
                .build();
    }

    // Fetch GitHub profile
    private GithubProfileResponse getGithubProfile(String username, String githubToken) {

        return restClient.get()
                .uri("https://api.github.com/users/{username}", username)
                .header("Authorization", "Bearer " + githubToken)
                .header("Accept", "application/vnd.github+json")
                .retrieve()
                .body(GithubProfileResponse.class);
    }

    // Fetch all repositories
    private List<GithubRepository> getRepositories(String username, String githubToken) {

        GithubRepository[] repos = restClient.get()
                .uri("https://api.github.com/users/{username}/repos", username)
                .header("Authorization", "Bearer " + githubToken)
                .header("Accept", "application/vnd.github+json")
                .retrieve()
                .body(GithubRepository[].class);

        return repos == null
                ? Collections.emptyList()
                : Arrays.asList(repos);

    }


    private List<GithubEvent> getEvents(String username, String githubToken){

        GithubEvent[] events = restClient.get()
                .uri("https://api.github.com/users/{username}/events/public", username)
                .header("Authorization", "Bearer " + githubToken)
                .header("Accept", "application/vnd.github+json")
                .retrieve()
                .body(GithubEvent[].class);

        return events == null
                ? Collections.emptyList()
                : Arrays.asList(events);
    }

    private Map<String, Integer> getWeeklyActivity(List<GithubEvent> events) {

        Map<String, Integer> activity = new LinkedHashMap<>();

        LocalDate today = LocalDate.now();

        DateTimeFormatter formatter =
                DateTimeFormatter.ofPattern("dd MMM");

        // Initialize the last 7 days with 0 commits
        for (int i = 6; i >= 0; i--) {

            LocalDate date = today.minusDays(i);

            String key =
                    date.getDayOfWeek()
                            .getDisplayName(TextStyle.SHORT, Locale.ENGLISH)
                            + " "
                            + date.format(formatter);

            activity.put(key, 0);
        }

        // Optional: Count only development-related events
        Map<String, Integer> scores = Map.of(
                "PushEvent", 5,
                "PullRequestEvent", 8,
                "PullRequestReviewEvent", 4,
                "IssuesEvent", 3,
                "IssueCommentEvent", 2,
                "CreateEvent", 1,
                "ReleaseEvent", 6
        );

        // Count GitHub events for those days
        for (GithubEvent event : events) {

            Integer score = scores.get(event.getType());

            if (score == null) {
                continue;
            }

            LocalDate eventDate = event.getCreatedAt().toLocalDate();

            if (eventDate.isBefore(today.minusDays(6))) {
                continue;
            }

            String key =
                    eventDate.getDayOfWeek()
                            .getDisplayName(TextStyle.SHORT, Locale.ENGLISH)
                            + " "
                            + eventDate.format(formatter);

            activity.computeIfPresent(key, (k, v) -> v + score);

        }

        return activity;
    }


    @SuppressWarnings("unchecked")
    private Map<String, Integer> getContributionHeatmap(String username, String githubToken) {

        Map<String, Integer> heatmap = new LinkedHashMap<>();

        Map<String, Object> variables = new HashMap<>();

        variables.put("login", username);

        Map<String, Object> requestBody = new HashMap<>();

        requestBody.put(
                "query",
                """
                query($login:String!) {
                  user(login:$login) {
                    contributionsCollection {
                      contributionCalendar {
                        weeks {
                          contributionDays {
                            date
                            contributionCount
                          }
                        }
                      }
                    }
                  }
                }
                """
        );

        requestBody.put("variables", variables);

        Map<String, Object> response = restClient.post()
                .uri("https://api.github.com/graphql")
                .header("Authorization", "Bearer " + githubToken)
                .header("Accept", "application/vnd.github+json")
                .header("Content-Type", "application/json")
                .body(requestBody)
                .retrieve()
                .body(Map.class);

        System.out.println(response);

        Map<String, Object> data =
                (Map<String, Object>) Objects.requireNonNull(response).get("data");

        Map<String, Object> user =
                (Map<String, Object>) data.get("user");

        Map<String, Object> contributions =
                (Map<String, Object>) user.get("contributionsCollection");

        Map<String, Object> calendar =
                (Map<String, Object>) contributions.get("contributionCalendar");

        List<Map<String, Object>> weeks =
                (List<Map<String, Object>>) calendar.get("weeks");

        for (Map<String, Object> week : weeks) {

            List<Map<String, Object>> days =
                    (List<Map<String, Object>>) week.get("contributionDays");

            for (Map<String, Object> day : days) {

                heatmap.put(
                        day.get("date").toString(),
                        (Integer) day.get("contributionCount")
                );
            }
        }

        return heatmap;
    }
}
