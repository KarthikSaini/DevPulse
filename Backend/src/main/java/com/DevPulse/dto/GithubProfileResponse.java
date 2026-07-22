package com.DevPulse.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GithubProfileResponse {

    private String login;

    private String name;

    private String bio;

    @JsonProperty("avatar_url")
    private String avatarUrl;

    @JsonProperty("html_url")
    private String profileUrl;

    private String company;

    private String location;

    private int followers;

    private int following;

    @JsonProperty("public_repos")
    private int publicRepos;

    @JsonProperty("email")
    private String email;
}
