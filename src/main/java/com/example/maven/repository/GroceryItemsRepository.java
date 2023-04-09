package com.example.maven.repository;

import com.example.maven.entity.GroceryItemsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryItemsRepository extends JpaRepository<GroceryItemsEntity, Integer>{
}
