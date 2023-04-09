package com.example.maven.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "grocery_items", schema = "testdb", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"item_name"})})
public class GroceryItemsEntity {
    @Id
    @Column(name = "item_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int itemId;
    @Column(name = "item_name", length = 50, nullable = false, unique = true)
    private String itemName;
    @Column(name = "item_type", length = 50, nullable = false)
    private String itemType;

    @Column(name = "is_edible", length = 50, columnDefinition = "BOOLEAN")
    private Boolean isEdible;
    @Column(name = "item_price", columnDefinition = "FLOAT")
    private float itemPrice;

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public Boolean getEdible() {
        return isEdible;
    }

    public void setEdible(Boolean edible) {
        isEdible = edible;
    }

    public float getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(float itemPrice) {
        this.itemPrice = itemPrice;
    }
}
