package com.infosys.matrimony.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.matrimony.entity.Registration;
import com.infosys.matrimony.repository.RegistrationRepo;

@Service
public class RegistrationServiceImpl implements RegistrationService{

    @Autowired
	RegistrationRepo repository;

    // Get All Operation
    @Override
    public List<Registration> getAllRegistrations() {
        return repository.findAll();
    }

    // Get Operation
    @Override
    public Registration getRegistraionInfoById(Long id) {
        return repository.findById(id).get();
    }

    // Post Operation
    @Override
    public Registration addRegistration(Registration registration) {
        return repository.save(registration);
    }

    
    public void deleteRegistration(Long id) {  
        repository.deleteById(id);      
    }


}
