package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ChefDao;
import com.app.dto.ChefDTO;
import com.app.entities.Chef;

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

}
