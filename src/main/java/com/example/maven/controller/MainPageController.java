package com.example.maven.controller;

import com.example.maven.entity.GroceryItemsEntity;
import com.example.maven.repository.GroceryItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainPageController {

    @Autowired
    GroceryItemsRepository groceryItemsRepository;

    @GetMapping("/items")
    public List<GroceryItemsEntity> getItems() {
        return groceryItemsRepository.findAll();
    }
}
