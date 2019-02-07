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

	public boolean onlyLettersUsedForIngredientName(Ingredient inputIngredient) {
		char[] inputString = inputIngredient.getName().toCharArray();
		char[] nums = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
		for (int input = 0; input < inputString.length; input++) {
			for (int stored = 0; stored < nums.length; stored++) {
				if (inputString[input] == nums[stored]) {
					return true;
				}
			}
		}
		return false;
	}

	public String addIngredient(String ingredient) {
		Ingredient inputIngredient = util.getObjectForJSON(ingredient, Ingredient.class);
		if (inputIngredient.getName().startsWith(" ") || inputIngredient.getName().endsWith(" ")
				|| inputIngredient.getWeight().startsWith(" ") || inputIngredient.getWeight().endsWith(" ")) {
					return "{\"message\": \"Invalid input, please make sure there are no empty spaces\"}";
		} else if (inputIngredient.getName().isEmpty() || inputIngredient.getWeight().isEmpty()) {
			return "{\"message\": \"Invalid input, please make sure you fill in the empty fields\"}";
		} else if (onlyLettersUsedForIngredientName(inputIngredient)) {
			return "{\"message\": \"Invalid input, please make sure you use only letters for ingredient name\"}";
		} else if (inputIngredient.getWeight().matches("[0-9]+") == false) { // if the input weight matches any value from 0-9 one or more times
			return "{\"message\": \"Invalid input, please make sure you use only numbers for weight\"}";
		}
		// else if (inputIngredient.getName().matches("[0-9]+") == true) {
		// return "{\"message\": \"Invalid input, please make sure you use only letters
		// for ingredient name\"}";
		// }
		return repo.addIngredient(ingredient);
	}

	public String updateIngredient(Long ingredientID, String ingredient, Long userID) {
		return repo.updateIngredient(ingredientID, ingredient, userID);
	}

	public String deleteIngredient(Long ingredientID, Long userID) {
		return repo.deleteIngredient(ingredientID, userID);
	}

	public String getUserIngredients(Long userID) {
		return repo.getUserIngredients(userID);
	}
}
