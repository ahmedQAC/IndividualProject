package com.qa.repository;

import com.qa.domain.User;

public interface UserRepository {
	
	User findUser(Long userID); //Not neccessary
	
	String getUser(Long userID);
	
	String createUser(String user);
	
	String updateUser(Long userID, String user);
	
	String deleteUser(Long userID);
}
