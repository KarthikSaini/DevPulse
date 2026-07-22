package com.DevPulse.controller;

import com.DevPulse.dto.GithubProfileResponse;
import com.DevPulse.entity.User;
import com.DevPulse.repository.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/api/github")
@RequiredArgsConstructor
public class GithubOAuthController {

    @Value("${github.client-id}")
    private String clientId;

    @Value("${github.redirect-uri}")
    private String redirectUri;

    @Value("${github.client-secret}")
    private String clientSecret;

    private final RestClient restClient;

    private final UserRepository userRepository;

    @GetMapping("/connect/{userId}")
    public void connectGithub(@PathVariable Long userId,HttpServletResponse response
    ) throws IOException {

        System.out.println("Git hub credentials "+ clientId +" "+ redirectUri);

        String url =
                "https://github.com/login/oauth/authorize"
                        + "?client_id=" + clientId
                        + "&redirect_uri=" + redirectUri
                        + "&scope=read:user,repo"
                        + "&state=" + userId;

        response.sendRedirect(url);

    }

    @GetMapping("/callback")
    public void callback(
            @RequestParam String code,
            @RequestParam Long state,
            HttpServletResponse response
    ) throws Exception {

        String url =
                "https://github.com/login/oauth/access_token"
                        + "?client_id=" + clientId
                        + "&client_secret=" + clientSecret
                        + "&code=" + code
                        + "&redirect_uri=" + redirectUri;

        Map<String, Object> tokenResponse =
                restClient.post()
                        .uri(url)
                        .header("Accept", "application/json")
                        .retrieve()
                        .body(Map.class);

        String accessToken =
                Objects.requireNonNull(tokenResponse).get("access_token").toString();

        GithubProfileResponse githubUser =
                restClient.get()
                        .uri("https://api.github.com/user")
                        .header("Authorization","Bearer " + accessToken)
                        .header("Accept","application/vnd.github+json")
                        .retrieve()
                        .body(GithubProfileResponse.class);

        User user =
                userRepository.findById(state)
                        .orElseThrow();

        user.setGithubUsername(githubUser.getLogin());

        user.setGithubAccessToken(accessToken);

        userRepository.save(user);

        response.sendRedirect("http://localhost:5173/dashboard");
    }
}
