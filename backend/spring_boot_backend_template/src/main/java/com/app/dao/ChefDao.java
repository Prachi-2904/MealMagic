package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Chef;
import com.app.entities.Speciality;

public interface ChefDao extends JpaRepository<Chef, Long> {
	List<Chef>	findByChefLocationId(long Id);
	
	List<Chef> findChefByChefSpeciality(Speciality spec);
	
//	List<Chef> findChefByRatingsAndReviewsId(long Id);
	
	
}
