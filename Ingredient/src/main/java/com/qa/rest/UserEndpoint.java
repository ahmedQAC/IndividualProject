package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.qa.service.UserService;

@Path("/user")
public class UserEndpoint {

	@Inject
	private UserService service;
	
	@Path("/getUser/{userID}")
	@GET
	@Produces({ "application/json" })
	public String getUser(@PathParam("userID") Long userID) {
		return service.getUser(userID);
	}
	
	@Path("/createUser")
	@POST
	@Produces({ "application/json" })
	public String createUser(String user) {
		return service.createUser(user);
	}
	
	@Path("/deleteUser/{userID}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteUser(@PathParam("userID") Long userID) {
		return service.deleteUser(userID);
	}
	
	@Path("/getAllUsers")
	@GET
	@Produces({ "application/json" })
	public String getAllUsers() {
		return service.getAllUsers();
	}
}
