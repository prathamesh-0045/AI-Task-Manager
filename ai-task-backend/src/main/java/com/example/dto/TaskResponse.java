package com.example.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class TaskResponse {

    private Long id;
    private String title;
    private String description;
    private String priority;
    private String status;
}
