package com.example.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.dto.TaskRequest;
import com.example.entity.Task;
import com.example.repository.TaskRepository;

import com.example.entity.TaskStatus;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task updateTask(Long id, Task task) {

        Task existing = taskRepository.findById(id)
                .orElseThrow();

        existing.setTitle(task.getTitle());
        existing.setDescription(task.getDescription());
        existing.setPriority(task.getPriority());
        existing.setStatus(task.getStatus());
        existing.setDueDate(task.getDueDate());

        return taskRepository.save(existing);
    }
    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}