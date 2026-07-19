package com.DevPulse.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GithubRepository {
    private String name;

    private String description;

    private String language;

    @JsonProperty("stargazers_count")
    private Integer stars;

    @JsonProperty("forks_count")
    private Integer forks;

    @JsonProperty("html_url")
    private String htmlUrl;

    @JsonProperty("updated_at")
    private String updatedAt;
}
