package com.example.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.dto.AiResponse;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final WebClient webClient = WebClient.create();

    public AiResponse generateTask(String prompt) {

        AiResponse response = new AiResponse();

        response.setDescription(
            "Develop " + prompt + " using Spring Boot and React."
        );

        response.setPriority("HIGH");
        response.setEstimatedTime("20 Hours");

        return response;
    }
}