package com.DevPulse.monitor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class healthCheck {

    @GetMapping("health_check")
    public String health_check(){
        return "Working health check controller";
    }
}
