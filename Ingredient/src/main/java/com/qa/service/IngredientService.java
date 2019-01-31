package com.qa.service;

import com.qa.domain.Ingredient;

public interface IngredientService {

	String getAllIngredients();
	
	Ingredient findAnIngredient(Long ingredientID);
	
	String addIngredient(String ingredient);
	
	String updateIngredient(Long ingredientID, String ingredient);
	
	String deleteIngredient(Long ingredientID);
	
	String getUserIngredients(Long userID);
}
