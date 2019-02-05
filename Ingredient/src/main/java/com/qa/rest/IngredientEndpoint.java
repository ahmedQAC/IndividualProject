package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.qa.service.IngredientService;

@Path("/ingredient")
public class IngredientEndpoint {

	@Inject
	private IngredientService service;
	
	@Path("/getAllIngredients")
	@GET
	@Produces({ "application/json" })
	public String getAllIngredients() {
		return service.getAllIngredients();
	}
	
	@Path("/addIngredient")
	@POST
	@Produces({ "application/json" })
	public String addIngredient(String ingredient) {
		return service.addIngredient(ingredient);
	}
	
	@Path("/deleteIngredient/{ingredientID}/{userID}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteIngredient(@PathParam("ingredientID") Long ingredientID, @PathParam("userID") Long userID) {
		return service.deleteIngredient(ingredientID, userID);
	}
	
	@Path("/updateIngredient/{ingredientID}/{userID}")
	@POST
	@Produces({ "application/json" })
	public String updateIngredient (@PathParam("ingredientID") Long ingredientID, String ingredient, @PathParam("userID") Long userID) {
		return service.updateIngredient(ingredientID, ingredient, userID);
	}
	
	@Path("/getUserIngredients/{userID}")
	@GET
	@Produces({ "application/json" })
	public String getUserIngredients(@PathParam("userID") Long userID) {
		return service.getUserIngredients(userID);
	}
	
	public void setService(IngredientService ingredient) {
		this.service = service;
	}
}
