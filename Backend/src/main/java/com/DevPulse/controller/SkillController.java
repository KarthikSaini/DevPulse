package com.DevPulse.controller;

import com.DevPulse.dto.SkillRequest;
import com.DevPulse.dto.SkillResponse;
import com.DevPulse.service.SkillService;
import jakarta.validation.Valid;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/api/users/{userId}/skills")
@RestController
public class SkillController {

    private final SkillService skillService;

    @PostMapping
    public ResponseEntity<SkillResponse> addSkill(
            @PathVariable Long userId,
            @Valid @RequestBody SkillRequest request
            ){

        SkillResponse response = skillService.addSkill(userId, request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
