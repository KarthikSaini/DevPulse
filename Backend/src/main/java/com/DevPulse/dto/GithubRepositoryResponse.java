package com.DevPulse.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GithubRepositoryResponse {

    private String name;

    private String description;

    private String language;

    private Integer stars;

    private Integer forks;

    private Integer watchers;

    private Integer size;

    private String defaultBranch;

    private String repoUrl;

    private String createdAt;

    private String updatedAt;

}
