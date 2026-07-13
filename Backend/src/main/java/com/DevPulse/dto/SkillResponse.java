package com.DevPulse.dto;

import com.DevPulse.enums.ProficiencyLevel;
import com.DevPulse.enums.SkillCategory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillResponse {

    private Long id;

    private String skillName;

    private ProficiencyLevel proficiencyLevel;

    private Integer yearsOfExperience;

    private SkillCategory skillCategory;
}
