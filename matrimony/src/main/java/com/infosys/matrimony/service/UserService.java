package com.infosys.matrimony.service;

import java.util.List;

import com.infosys.matrimony.entity.User;

public interface UserService {
    public List<User> getAllUser();
	public User addUser(User user);
	public User getUserById(Long id);
} 
