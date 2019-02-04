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
		return "The ingredient has been sucessfully added";
	}
	
	@Transactional(REQUIRED)
	public String deleteIngredient(Long ingredientID, Long userID) {
		String output = "{\"message\": \"The ingredient cannot be found\"}";
		Query query = manager.createQuery("Select a FROM Ingredient a");
		Collection<Ingredient> ingredients = (Collection<Ingredient>) query.getResultList();
		Collection<Ingredient> userIngredients = ingredients.stream().filter(ingredient -> ingredient.getUserID()==userID && ingredient.getIngredientID()==ingredientID).collect(Collectors.toList());
		if (userIngredients!=null) {
			manager.remove(findAnIngredient(ingredientID));
			output = "{\"message\": \"The ingredient has been sucessfully deleted\"}";
		}
		return output;
	}
	
	public void createIngredient(String ingredient) {
		Ingredient anIngredient = util.getObjectForJSON(ingredient, Ingredient.class);
		manager.persist(anIngredient);
	}
	
	@Transactional(REQUIRED)
	public String updateIngredient(Long ingredientID, String ingredient) {
		String output = "{\"message\": \"The ingredient cannot be found\"}";
		Ingredient anIngredient = findAnIngredient(ingredientID);
		if (anIngredient!=null) {
			Ingredient updatedIngredient = util.getObjectForJSON(ingredient, Ingredient.class);
			anIngredient.setName(updatedIngredient.getName());
			anIngredient.setWeight(updatedIngredient.getWeight());
			output = "{\"message\": \"The ingredient has been sucessfully updated\"}";
		}
		return output;
	}

	@Override
	@Transactional
	public String getUserIngredients(Long userID) {
		Query query = manager.createQuery("Select a FROM Ingredient a");
		Collection<Ingredient> ingredients = (Collection<Ingredient>) query.getResultList();
		Collection<Ingredient> userIngredients = ingredients.stream().filter(ingredient -> ingredient.getUserID().equals(userID)).collect(Collectors.toList());
		return util.getJSONForObject(userIngredients);
	}

	

}
