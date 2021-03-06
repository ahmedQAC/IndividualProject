package com.qa.service;

import com.qa.domain.Ingredient;

public interface IngredientService {

	String getAllIngredients();
	
	Ingredient findAnIngredient(Long ingredientID);
	
	String addIngredient(String ingredient);
	
	String updateIngredient(Long ingredientID, String ingredient, Long userID);
	
	String deleteIngredient(Long ingredientID, Long userID);
	
	String getUserIngredients(Long userID);
}
