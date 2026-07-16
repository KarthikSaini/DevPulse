package com.DevPulse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardResponse {

    private Long id;

    private String name;

    private String email;

    private String bio;

    private String profileImage;

    private Integer profileCompletion;

    private Integer skills;

    private Integer projects;

    private Integer connectedPlatforms;

    private List<PlatformDTO> platforms;
}
