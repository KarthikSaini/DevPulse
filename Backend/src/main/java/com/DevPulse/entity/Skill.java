package com.DevPulse.entity;

import com.DevPulse.enums.ProficiencyLevel;
import com.DevPulse.enums.SkillCategory;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Skill {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String skillName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProficiencyLevel proficiencyLevel;

    @Column(nullable = false)
    private Integer yearsOfExperience;

    @Enumerated(EnumType.STRING)
    private SkillCategory skillCategory;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
