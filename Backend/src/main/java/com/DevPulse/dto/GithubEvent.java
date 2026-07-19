package com.DevPulse.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class GithubEvent {

    private String type;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
