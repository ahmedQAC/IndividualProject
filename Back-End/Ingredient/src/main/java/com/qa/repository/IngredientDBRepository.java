package com.qa.repository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import static javax.transaction.Transactional.TxType.*;

import com.qa.domain.Ingredient;
import com.qa.util.JSONUtil;

@Transactional(SUPPORTS)
@Default
public class IngredientDBRepository implements IngredientRepository {
	
	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	@Inject
	private JSONUtil util;
	
	
	public String getAllIngredients() {
		Query query = manager.createQuery("Select a FROM Ingredient a");
		Collection<Ingredient> ingredients = (Collection<Ingredient>) query.getResultList();
		return util.getJSONForObject(ingredients);
	}
	
	public Ingredient findAnIngredient(Long ingredientID) {
		return manager.find(Ingredient.class, ingredientID);
	}

	@Transactional(REQUIRED)
	public String addIngredient(String ingredient) {
		Ingredient anIngredient = util.getObjectForJSON(ingredient, Ingredient.class);
		manager.persist(anIngredient);
		return "{\"message\": \"The ingredient has been sucessfully added\"}";
	}
	
	@Transactional(REQUIRED)
	public String deleteIngredient(Long ingredientID, Long userID) {
		Ingredient ingredientInDB = findAnIngredient(ingredientID);
		if ((ingredientInDB != null) && (ingredientInDB.getUserID().equals(userID))) {
			manager.remove(ingredientInDB);
			return "{\"message\": \"The ingredient has been sucessfully deleted\"}";
		}
		return "{\"message\": \"The ingredient cannot be found\"}";
	}
	
	public void createIngredient(String ingredient) {
		Ingredient anIngredient = util.getObjectForJSON(ingredient, Ingredient.class);
		manager.persist(anIngredient);
	}
	
	@Transactional(REQUIRED)
	public String updateIngredient(Long ingredientID, String ingredient, Long userID) {
		Ingredient ingredientInDB = findAnIngredient(ingredientID);
		if (ingredientInDB!=null && (ingredientInDB.getUserID().equals(userID))) {
			Ingredient updatedIngredient = util.getObjectForJSON(ingredient, Ingredient.class);
			ingredientInDB.setName(updatedIngredient.getName());
			ingredientInDB.setWeight(updatedIngredient.getWeight());
			return "{\"message\": \"The ingredient has been sucessfully updated\"}";
		}
		return "{\"message\": \"The ingredient cannot be found\"}";
	}

	@Override
	@Transactional
	public String getUserIngredients(Long userID) {
		Query query = manager.createQuery("Select a FROM Ingredient a");
		Collection<Ingredient> ingredientsInDB = (Collection<Ingredient>) query.getResultList();
		Collection<Ingredient> userIngredients = ingredientsInDB.stream().filter(ingredient -> ingredient.getUserID().equals(userID)).collect(Collectors.toList());
		return util.getJSONForObject(userIngredients);
	}

	

}
