package com.qa.service;

import javax.inject.Inject;

import com.qa.domain.User;
import com.qa.repository.UserRepository;
import com.qa.util.JSONUtil;

public class UserServiceImpl implements UserService {

	@Inject
	private UserRepository repo;
	
	@Inject
	private JSONUtil util;
	
	@Override
	public User findUser(Long userID) {
		return repo.findUser(userID);
	}
	
	@Override
	public String getUser(Long userID) {
		return repo.getUser(userID);
	}

	public boolean usernameContainsNumbers(User user) {
		char[] nums = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
		char[] inputString = user.getUsername().toCharArray();
		for (char inputChars : inputString) {
			for (int numbers : nums) {
				if (inputChars == numbers ) {
					return true;
				}
			}
		}
		return false;
	}
	
	@Override
	public String createUser(String user) {
		User inputUser = util.getObjectForJSON(user, User.class);
		User existingUser = findUser(inputUser.getUserID());
		if (existingUser!=null) {
			return "{\"message\": \"An account with that username already exists\"}";
		}
		else if (usernameContainsNumbers(inputUser)) {
			return "{\"message\": \"Invalid username, username cannot include any numbers\"}";
		}
		else if (inputUser.getPassword().matches("((?=.*[a-z])(?=.*[@#$%!£^&*()-=?_+])(?=.*[A-Z]).{6,16})") == false) {
			return "{\"message\": \"password must contain lowercase, one special character, one uppercase and be between 6 to 16 characters\"}";
//				if(inputUser.getPassword().matches("[a-z]+") == false) {
//					return "{\"message\": \"The password must contain at least one lowercase letter\"}";
//				}
//				else if (inputUser.getPassword().matches("[@#$%]+") == false) {
//					return "{\"message\": \"The password must contain at least one special character such as @, #, $, ! or %  \"}";
//				}
//				else if (inputUser.getPassword().matches("[A-Z]+") == false) {
//					return "{\"message\": \"The password must contain at least one uppercase letter\"}";
//				}
//				else if (inputUser.getPassword().matches("{6,16}+") == false) {
//					return "{\"message\": \"The password must be between 6 to 16 characters\"}";
//				}
		}
		return repo.createUser(user);
	}

	@Override
	public String updateUser(Long userID, String user) {
		return repo.updateUser(userID, user);
	}

	@Override
	public String deleteUser(Long userID) {
		return repo.deleteUser(userID);
	}

	@Override
	public String getAllUsers() {
		return repo.getAllUsers();
	}



}
