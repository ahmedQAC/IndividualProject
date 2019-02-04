package com.qa.service;

import javax.inject.Inject;

import com.qa.domain.Ingredient;
import com.qa.repository.IngredientRepository;
import com.qa.util.JSONUtil;

public class IngredientServiceImpl implements IngredientService {

	@Inject
	private IngredientRepository repo;
	
	@Inject
	private JSONUtil util;
	
	public String getAllIngredients() {
		return repo.getAllIngredients();
	}

	public Ingredient findAnIngredient(Long ingredientID) {
		return repo.findAnIngredient(ingredientID);
	}

	public String addIngredient(String ingredient) {
		Ingredient inputIngredient = util.getObjectForJSON(ingredient, Ingredient.class);
		if (inputIngredient.getName().startsWith(" ") || inputIngredient.getName().endsWith(" ") || inputIngredient.getWeight().startsWith(" ") || inputIngredient.getWeight().endsWith(" ")) {
			return "{\"message\": \"Invalid input, please make sure there are no empty spaces\"}";
		}
		else if (inputIngredient.getName().isEmpty() || inputIngredient.getWeight().isEmpty()) {
			return "{\"message\": \"Invalid input, please make sure you fill in the empty fields\"}";
		}
		else if (inputIngredient.getWeight().matches("[0-9]+") == false) {
			return "{\"message\": \"Invalid input, please make sure you use only numbers for weight\"}";
		}
		else if (inputIngredient.getName().matches("[0-9]+")) {
			return "{\"message\": \"Invalid input, please make sure you use only letters for ingredient name\"}";
		}
		return repo.addIngredient(ingredient);
	}

	public String updateIngredient(Long ingredientID, String ingredient) {
		return repo.updateIngredient(ingredientID, ingredient);
	}

	public String deleteIngredient(Long ingredientID, Long userID) {
		return repo.deleteIngredient(ingredientID, userID);
	}

	public String getUserIngredients(Long userID) {
		return repo.getUserIngredients(userID);
	}
}
