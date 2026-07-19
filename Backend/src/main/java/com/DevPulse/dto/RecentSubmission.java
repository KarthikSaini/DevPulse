package com.DevPulse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class RecentSubmission {

    private String title;

    private String titleSlug;

    private String statusDisplay;

    private String lang;

    private String timestamp;

}
