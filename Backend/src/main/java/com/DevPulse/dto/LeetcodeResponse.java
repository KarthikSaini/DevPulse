package com.DevPulse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class LeetcodeResponse {

    private String username;

    private String realName;

    private String avatar;

    private Integer ranking;

    private Integer reputation;

    private Integer easySolved;

    private Integer mediumSolved;

    private Integer hardSolved;

    private Integer totalSolved;

    private Integer contestRating;

    private Integer contestRanking;

    private Integer contestsAttended;

    private Map<String,Integer> submissionCalendar;

    private List<RecentSubmission> recentSubmissions;
}
