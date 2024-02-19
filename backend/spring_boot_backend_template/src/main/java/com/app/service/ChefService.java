package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.ChefDTO;

import lombok.Setter;

@Service 
public interface ChefService {
 
	List<ChefDTO> findByChefLocationId(long Id);
	
      List<ChefDTO>	getAllChefs();
	
}
