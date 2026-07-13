package com.DevPulse.serviceImpl;

import com.DevPulse.dto.SkillRequest;
import com.DevPulse.dto.SkillResponse;
import com.DevPulse.entity.Skill;
import com.DevPulse.entity.User;
import com.DevPulse.exception.UserNotFoundException;
import com.DevPulse.repository.SkillRepository;
import com.DevPulse.repository.UserRepository;
import com.DevPulse.service.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final UserRepository userRepository;

    private final SkillRepository skillRepository;

    @Override
    public SkillResponse addSkill(Long userId, SkillRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(()->new UserNotFoundException("User not found"));

        Skill skill = Skill.builder()
                .user(user)
                .skillName(request.getSkillName())
                .proficiencyLevel(request.getProficiencyLevel())
                .yearsOfExperience(request.getYearsOfExperience())
                .skillCategory(request.getSkillCategory())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        Skill savedSkill = skillRepository.save(skill);

        return mapToSkillResponse(savedSkill);
    }

    @Override
    public List<SkillResponse> getSkillsByUser(Long userId) {
        return List.of();
    }

    @Override
    public SkillResponse updateSkill(Long skillId, SkillRequest request) {
        return null;
    }

    @Override
    public void deleteSkill(Long skillId) {

    }

    private SkillResponse mapToSkillResponse(Skill skill){
        return SkillResponse.builder()
                .id(skill.getId())
                .skillName(skill.getSkillName())
                .proficiencyLevel(skill.getProficiencyLevel())
                .yearsOfExperience(skill.getYearsOfExperience())
                .skillCategory(skill.getSkillCategory())
                .build();
    }
}
