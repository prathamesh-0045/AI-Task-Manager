package com.example.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET_KEY =
            "mysecretkeymysecretkeymysecretkey123456";

    public String generateToken(String email) {

        SecretKey key =
                Keys.hmacShaKeyFor(
                        SECRET_KEY.getBytes(StandardCharsets.UTF_8)
                );

        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(
                    new Date(
                        System.currentTimeMillis()
                        + 1000L * 60 * 60 * 24
                    )
                )
                .signWith(key)
                .compact();
    }
}