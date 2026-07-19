package com.DevPulse.controller;

import com.DevPulse.dto.LeetcodeResponse;
import com.DevPulse.service.LeetcodeService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/leetcode")
public class LeetcodeController {

    private final LeetcodeService leetcodeService;

    @GetMapping("/{userId}")
    public ResponseEntity<LeetcodeResponse> getDashboard(@PathVariable Long userId){
        return ResponseEntity.ok(leetcodeService.getDashboard(userId));
    }
}
