package com.example.maven.service;

import com.example.maven.entity.GroceryItemsEntity;
import com.example.maven.grocery.GroceryItemProperty;
import com.example.maven.repository.GroceryItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.stream.Collectors;

@Service
public class GroceryItemService {

    @Autowired
    GroceryItemsRepository groceryItemsRepository;
    public Map<Integer, GroceryItemProperty> getGroceryMapping() {
        Map<Integer, GroceryItemProperty> groceryMap = groceryItemsRepository.findAll().stream().collect(Collectors.toMap(GroceryItemsEntity::getItemId,
                item -> new GroceryItemProperty(item.getItemName(), item.getItemType(), item.getEdible(), item.getItemPrice())));

        return groceryMap;
    }
}
