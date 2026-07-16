package com.DevPulse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlatformDTO {

    private String name;

    private boolean connected;

    private String username;

    private String icon;
}
