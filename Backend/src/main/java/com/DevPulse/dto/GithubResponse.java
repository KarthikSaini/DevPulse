package com.DevPulse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GithubResponse {

    // Profile

    private String login;

    private String name;

    private String avatarUrl;

    private String bio;

    private String htmlUrl;

    private String location;

    private Integer followers;

    private Integer following;

    private Integer publicRepos;

    // Statistics

    private Integer totalStars;

    private Integer totalForks;

    private Integer githubScore;

    // Charts

    private Map<String, Integer> languages;

    private Map<String, Integer> weeklyActivity;

    // Repository List

    private List<GithubRepository> repositories;

    // Heat map
    private Map<String, Integer> contributionHeatmap;
}
