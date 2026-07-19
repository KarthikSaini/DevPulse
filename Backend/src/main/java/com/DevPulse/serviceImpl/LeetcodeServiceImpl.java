package com.DevPulse.serviceImpl;

import com.DevPulse.dto.LeetcodeResponse;
import com.DevPulse.dto.RecentSubmission;
import com.DevPulse.entity.User;
import com.DevPulse.exception.UserNotFoundException;
import com.DevPulse.repository.UserRepository;
import com.DevPulse.service.LeetcodeService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import com.fasterxml.jackson.core.type.TypeReference;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class LeetcodeServiceImpl implements LeetcodeService {

    private final UserRepository userRepository;

    private final RestClient restClient;

    @Override
    public LeetcodeResponse getDashboard(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        String leetcodeUsername = user.getLeetcode_username();

        if (leetcodeUsername == null) {
            return null;
        }

        return fetchDashboard(leetcodeUsername);
    }

    @SuppressWarnings("unchecked")
    public LeetcodeResponse fetchDashboard(String leetcodeUsername) {

        String query = """
                query($username: String!) {
                  matchedUser(username: $username) {
                
                    username
                
                    profile {
                      realName
                      ranking
                      reputation
                      userAvatar
                    }
                
                    submitStats {
                      acSubmissionNum {
                        difficulty
                        count
                      }
                    }
                
                    submissionCalendar
                  }
                
                  userContestRanking(username: $username) {
                    rating
                    globalRanking
                    attendedContestsCount
                  }
                
                  recentSubmissionList(username: $username) {
                    title
                    titleSlug
                    statusDisplay
                    lang
                    timestamp
                  }
                }
                """;

        Map<String, Object> requestBody = new HashMap<>();

        requestBody.put("query", query);

        requestBody.put(
                "variables", Map.of("username", leetcodeUsername)
        );

        Map<String, Object> response = restClient.
                post()
                .uri("https://leetcode.com/graphql")
                .body(requestBody)
                .retrieve()
                .body(Map.class);

        if (response == null || response.containsKey("error")) {
            throw new RuntimeException("Unable to fetch LeetCode profile.");
        }

        Map<String, Object> data =
                (Map<String, Object>) response.get("data");

        Map<String, Object> matchedUser = (Map<String, Object>) data.get("matchedUser");

        if (matchedUser == null) {
            throw new RuntimeException("LeetCode user not found.");
        }

        Map<String, Object> profile =
                (Map<String, Object>) matchedUser.get("profile");


        Map<String, Object> submitStats =
                (Map<String, Object>) matchedUser.get("submitStats");

        List<Map<String, Object>> solved =
                (List<Map<String, Object>>) submitStats.get("acSubmissionNum");

        int easy = 0;
        int medium = 0;
        int hard = 0;
        int total = 0;

        for (Map<String, Object> difficulty : solved) {

            String level = difficulty.get("difficulty").toString();

            int count = ((Number) difficulty.get("count")).intValue();

            switch (level) {

                case "Easy" -> easy = count;

                case "Medium" -> medium = count;

                case "Hard" -> hard = count;

                case "All" -> total = count;
            }
        }

        Map<String, Object> contest =
                (Map<String, Object>) data.get("userContestRanking");

        List<Map<String, Object>> submissions =
                (List<Map<String, Object>>) data.get("recentSubmissionList");

        List<RecentSubmission> recentSubmissions = new ArrayList<>();

        if (submissions != null) {

            for (Map<String, Object> submission : submissions) {

                RecentSubmission recent = new RecentSubmission();

                recent.setTitle(submission.get("title").toString());

                recent.setTitleSlug(submission.get("titleSlug").toString());

                recent.setStatusDisplay(submission.get("statusDisplay").toString());

                recent.setLang(submission.get("lang").toString());

                recent.setTimestamp(submission.get("timestamp").toString());

                recentSubmissions.add(recent);
            }
        }

        String submissionCalendar =
                matchedUser.get("submissionCalendar").toString();

        Map<String, Integer> calendar;

        try {

            ObjectMapper objectMapper = new ObjectMapper();

            calendar = objectMapper.readValue(
                    submissionCalendar,
                    new TypeReference<>() {
                    }
            );

        }
        catch (Exception e) {

            throw new RuntimeException("Unable to parse submission calendar", e);

        }

        // We'll parse this JSON string in the next step.

        return LeetcodeResponse.builder()

                .username(matchedUser.get("username").toString())

                .realName(profile.get("realName").toString())

                .avatar(profile.get("userAvatar").toString())

                .ranking(((Number) profile.get("ranking")).intValue())

                .reputation(((Number) profile.get("reputation")).intValue())

                .easySolved(easy)

                .mediumSolved(medium)

                .hardSolved(hard)

                .totalSolved(total)

                .contestRating(
                        contest == null
                                ? 0
                                : ((Number) contest.get("rating")).intValue()
                )

                .contestRanking(
                        contest == null
                                ? 0
                                : ((Number) contest.get("globalRanking")).intValue()
                )

                .contestsAttended(
                        contest == null
                                ? 0
                                : ((Number) contest.get("attendedContestsCount")).intValue()
                )

                .submissionCalendar(calendar)

                .recentSubmissions(recentSubmissions)

                .build();
    }

}
