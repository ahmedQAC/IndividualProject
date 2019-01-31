package com.qa.service;

import javax.inject.Inject;

import com.qa.domain.Ingredient;
import com.qa.repository.IngredientRepository;

public class IngredientServiceImpl implements IngredientService {

	@Inject
	private IngredientRepository repo;
	
	public String getAllIngredients() {
		return repo.getAllIngredients();
	}

	public Ingredient findAnIngredient(Long ingredientID) {
		return repo.findAnIngredient(ingredientID);
	}

	public String addIngredient(String ingredient) {
		return repo.addIngredient(ingredient);
	}

	public String updateIngredient(Long ingredientID, String ingredient) {
		return repo.updateIngredient(ingredientID, ingredient);
	}

	public String deleteIngredient(Long ingredientID) {
		return repo.deleteIngredient(ingredientID);
	}

	public String getUserIngredients(Long userID) {
		return repo.getUserIngredients(userID);
	}
}
