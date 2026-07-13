package com.DevPulse.service;

import com.DevPulse.dto.SkillRequest;
import com.DevPulse.dto.SkillResponse;

import java.util.List;

public interface SkillService {

    SkillResponse addSkill(Long userId, SkillRequest request);

    List<SkillResponse> getSkillsByUser(Long userId);

    SkillResponse updateSkill(Long skillId, SkillRequest request);

    void deleteSkill(Long skillId);
}
