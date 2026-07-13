package com.DevPulse.dto;

import com.DevPulse.enums.ProficiencyLevel;
import com.DevPulse.enums.SkillCategory;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillRequest {

    @NotBlank(message = "Skill name is required")
    private String skillName;

    @NotNull(message = "Proficiency level is required")
    private ProficiencyLevel proficiencyLevel;

    @NotNull(message = "Years of experience is required")
    @Min(value = 0, message = "Years of experience can not be negative")
    private Integer yearsOfExperience;

    @NotNull(message = "Skill category is required")
    private SkillCategory skillCategory;
}
