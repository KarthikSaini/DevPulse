package com.DevPulse.service;

import com.DevPulse.dto.DashboardResponse;

public interface DashboardService {

    DashboardResponse getDashboard(Long userId);
}
