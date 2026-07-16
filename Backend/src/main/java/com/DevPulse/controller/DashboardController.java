package com.DevPulse.controller;

import com.DevPulse.dto.DashboardResponse;
import com.DevPulse.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/dashboard")
@RestController
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/{userId}")
    public DashboardResponse getDashboard(@PathVariable Long userId){
        return dashboardService.getDashboard(userId);
    }
}
