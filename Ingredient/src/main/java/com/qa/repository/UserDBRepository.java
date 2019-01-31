package com.qa.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import com.qa.domain.User;
import com.qa.util.JSONUtil;
@Transactional(SUPPORTS)
@Default
public class UserDBRepository implements UserRepository {
	
	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	@Inject
	private JSONUtil util;
	

	@Override
	public User findUser(Long userID) {
		return manager.find(User.class, userID);
	}
	
	public String getUser(Long userID) {
		String output = "{\"message\": \"The user cannot be found\"}";
		User aUser = findUser(userID);
		if (aUser!=null) {
			output = util.getJSONForObject(aUser);
		}
		return output;
	}

	@Transactional(REQUIRED)
	@Override
	public String createUser(String user) {
		User aUser = util.getObjectForJSON(user, User.class);
		manager.persist(aUser);
		return "{\"message\": \"The User has been sucessfully created\"}";
	}

	@Transactional(REQUIRED)
	@Override
	public String deleteUser(Long userID) {
		String output = "{\"message\": \"The user cannot be found\"}";
		User aUser = findUser(userID);
		if (aUser!=null) {
			manager.remove(aUser);
			output = "{\"message\": \"The user has been sucessfully deleted\"}";
		}
		return output;
	}
	
	@Transactional(REQUIRED)
	@Override
	public String updateUser(Long userID, String user) {
		// TODO Auto-generated method stub
		return null;
	}



}
