package com.example.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.AiRequest;
import com.example.dto.AiResponse;
import com.example.service.GeminiService;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "http://localhost:5173")

public class AiController {

    private final GeminiService geminiService;

    public AiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @GetMapping("/generate")
    public String test() {
        return "API Working";
    }

    @PostMapping("/generate")
    public AiResponse generateTask(@RequestBody AiRequest request){

        return geminiService.generateTask(request.getPrompt());

    }
}