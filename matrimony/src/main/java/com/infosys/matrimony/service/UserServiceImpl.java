package com.infosys.matrimony.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.matrimony.entity.User;
import com.infosys.matrimony.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo repository;
	
	@Override
	public List<User> getAllUser() {
		return repository.findAll();
	}

	@Override
	public User addUser(User user) {
		return repository.save(user);
	}

	@Override
	public User getUserById(Long id) {
		return repository.findById(id).get();
	}
    
}
