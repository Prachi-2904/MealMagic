package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.LocationDao;

@Service
@Transactional
public class LocationServiceImpl implements LocationService {
	@Autowired
	private LocationDao locrepo;
	
	
	
}
