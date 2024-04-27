package com.infosys.matrimony.service;

import java.util.List;
import com.infosys.matrimony.entity.*;

public interface RegistrationService {

	public List<Registration> getAllRegistrations();
	public Registration addRegistration(Registration registration);
    public Registration getRegistraionInfoById(Long id);
    public void deleteRegistration(Long id);
}
