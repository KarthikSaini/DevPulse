package com.DevPulse.serviceImpl;

import com.DevPulse.dto.DashboardResponse;
import com.DevPulse.dto.PlatformDTO;
import com.DevPulse.entity.User;
import com.DevPulse.exception.UserNotFoundException;
import com.DevPulse.repository.UserRepository;
import com.DevPulse.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;
    @Override
    public DashboardResponse getDashboard(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(()-> new UserNotFoundException("User not found"));

        return DashboardResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .bio(user.getBio())
                .profileImage(user.getProfileImage())
                .profileCompletion(calculateProfileCompletion(user))
                .platforms(getPlatforms(user))
                .leetcode_username(user.getLeetcode_username())
                .build();
    }



    private Integer calculateProfileCompletion(User user){

        int score = 0;

        if(user.getName() != null && !user.getName().isBlank())
            score += 20;

        if(user.getEmail() != null && !user.getEmail().isBlank())
            score += 20;

        if(user.getBio() != null && !user.getBio().isBlank())
            score += 20;

        if(user.getProfileImage() != null && !user.getProfileImage().isBlank())
            score += 20;

        if(user.getGithubUsername() != null &&
                !user.getGithubUsername().isBlank())
            score += 20;

        return score;

    }

    private List<PlatformDTO> getPlatforms(User user){

        List<PlatformDTO> platforms = new ArrayList<>();

        platforms.add(

                PlatformDTO.builder()
                        .name("GitHub")
                        .connected(user.getGithubUsername() != null)
                        .username(user.getGithubUsername())
                        .icon("🐙")
                        .build()

        );

        platforms.add(

                PlatformDTO.builder()
                        .name("LeetCode")
                        .connected(user.getLeetcode_username() != null)
                        .username(user.getLeetcode_username())
                        .icon("🟡")
                        .build()

        );

        platforms.add(

                PlatformDTO.builder()
                        .name("LinkedIn")
                        .connected(false)
                        .username(null)
                        .icon("💼")
                        .build()

        );

        platforms.add(

                PlatformDTO.builder()
                        .name("Jira")
                        .connected(false)
                        .username(null)
                        .icon("📋")
                        .build()

        );

        return platforms;
    }

}
