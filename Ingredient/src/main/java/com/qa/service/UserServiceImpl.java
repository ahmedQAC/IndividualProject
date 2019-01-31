package com.qa.service;

import javax.inject.Inject;

import com.qa.domain.User;
import com.qa.repository.UserRepository;

public class UserServiceImpl implements UserService {

	@Inject
	private UserRepository repo;
	
	@Override //Not necessary
	public User findUser(Long userID) {
		return repo.findUser(userID);
	}
	
	@Override
	public String getUser(Long userID) {
		return repo.getUser(userID);
	}

	@Override
	public String createUser(String user) {
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



}
