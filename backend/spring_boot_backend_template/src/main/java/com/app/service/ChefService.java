package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.ChefDTO;
import com.app.entities.Speciality;

@Service 
public interface ChefService {
 
	List<ChefDTO> findByChefLocationId(long Id);
	
      List<ChefDTO>	getAllChefs();
      
      List<ChefDTO> getChefsBySpeciality(Speciality spec);

//      List<ChefDTO> getChefsByRatingAndReviews(long id);
      
      ChefDTO addNewChef(ChefDTO dto);
      
      ApiResponse deleteChef(Long id);
      
      
	
}
