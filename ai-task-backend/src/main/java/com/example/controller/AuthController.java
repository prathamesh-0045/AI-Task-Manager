package com.example.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.dto.AuthResponse;
import com.example.dto.AuthResponse;
import com.example.dto.LoginRequest;
import com.example.dto.RegisterRequest;
import com.example.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody RegisterRequest request) {

        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @RequestBody LoginRequest request) {

        return ResponseEntity.ok(
                authService.login(request)
        );
    }
}