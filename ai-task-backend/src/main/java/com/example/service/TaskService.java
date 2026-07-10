package com.example.service;

import java.util.List;

import com.example.dto.TaskRequest;
import com.example.entity.Task;

public interface TaskService {

    Task createTask(Task task);

    List<Task> getAllTasks();

    Task updateTask(Long id, Task task);

    void deleteTask(Long id);
}