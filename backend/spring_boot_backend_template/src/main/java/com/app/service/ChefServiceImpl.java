package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ChefDao;
import com.app.dto.ApiResponse;
import com.app.dto.ChefDTO;
import com.app.entities.Chef;
import com.app.entities.Speciality;

@Service
@Transactional
public class ChefServiceImpl implements ChefService {
	@Autowired
	private ChefDao chefrepo;
	@Autowired
	private ModelMapper mapper;
	@Override
	public List<ChefDTO> findByChefLocationId(long id) {
		List<Chef> cheflist = chefrepo.findByChefLocationId(id);
		return cheflist.stream().map(chef->mapper.map(chef,ChefDTO.class)).collect(Collectors.toList());
		
	}
	public List<ChefDTO> getAllChefs(){
		List<Chef> cheflist = chefrepo.findAll();
		return cheflist.stream().map(chef->mapper.map(chef,ChefDTO.class)).collect(Collectors.toList());
	}
	@Override
	public List<ChefDTO> getChefsBySpeciality(Speciality spec) {
		List<Chef> cheflist = chefrepo.findChefByChefSpeciality(spec);
		return cheflist.stream().map(chef->mapper.map(chef, ChefDTO.class)).collect(Collectors.toList());
	}
//	@Override
//	public List<ChefDTO> getChefsByRatingAndReviews(long id) {
//		List<Chef> cheflist = chefrepo.findChefByRatingsAndReviewsId(id);
//		return cheflist.stream().map(chef->mapper.map(chef, ChefDTO.class)).collect(Collectors.toList());
//	}
	@Override
	public ChefDTO addNewChef(ChefDTO dto) {
		Chef chefentity = mapper.map(dto, Chef.class);
		Chef chefpersist = chefrepo.save(chefentity);
		return mapper.map(chefpersist, ChefDTO.class);
	}
	@Override
	public ApiResponse deleteChef(Long id) {

		Chef chef = chefrepo.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Chef id"));
		chefrepo.delete(chef);
		return new ApiResponse("Chef with "+chef.getId()+" deleted...");
	}
	
	
	
}
