package com.qa.service;

import com.qa.domain.User;

public interface UserService {

	User findUser(Long userID); //Not neccesary
	
	String getUser(Long userID);
	
	String getAllUsers();
	
	String createUser(String user);
	
	String updateUser(Long userID, String user);
	
	String deleteUser(Long userID);
}
