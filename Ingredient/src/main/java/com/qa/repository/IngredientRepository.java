package com.qa.repository;

import com.qa.domain.Ingredient;

public interface IngredientRepository {

	String getAllIngredients();
	
	Ingredient findAnIngredient(Long ingredientID);
	
	String addIngredient(String ingredient);
	
	String updateIngredient(Long ingredientID, String ingredient);
	
	String deleteIngredient(Long ingredientID);
}
