package com.example.maven.grocery;


public class GroceryItemProperty {
    String itemName;
    String itemType;
    Boolean isEdible;
    Float itemPrice;


    public GroceryItemProperty(String itemName, String itemType, Boolean isEdible, Float itemPrice) {
        this.itemName = itemName;
        this.itemType = itemType;
        this.isEdible = isEdible;
        this.itemPrice = itemPrice;
    }
}
