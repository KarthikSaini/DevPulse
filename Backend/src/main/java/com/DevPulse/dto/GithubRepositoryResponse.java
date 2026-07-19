package com.DevPulse.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GithubRepositoryResponse {

    private String name;

    private String description;

    private String language;

    @JsonProperty("stargazers_count")
    private Integer stars;

    @JsonProperty("forks_count")
    private Integer forks;

    @JsonProperty("watchers_count")
    private Integer watchers;

    @JsonProperty("open_issues_count")
    private Integer openIssues;

    @JsonProperty("size")
    private Integer size;

    @JsonProperty("visibility")
    private String visibility;

    @JsonProperty("html_url")
    private String htmlUrl;

    @JsonProperty("default_branch")
    private String defaultBranch;

    private String repoUrl;

    @JsonProperty("created_at")
    private String createdAt;

    @JsonProperty("updated_at")
    private String updatedAt;

    @JsonProperty("pushed_at")
    private String pushedAt;

}
