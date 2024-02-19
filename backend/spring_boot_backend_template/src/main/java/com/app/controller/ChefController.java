package com.app.controller;

import java.io.IOException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ChefDTO;
import com.app.entities.Speciality;
import com.app.service.ChefService;

@RestController
@RequestMapping("/chefs")
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class ChefController {
	
	public ChefController()
	{
		System.out.println("in ctor of "+ getClass());
	}
	
	@Autowired
	private ChefService chefsr;

	
	@GetMapping(value = "/location/{locId}")
	public ResponseEntity<?> getChefByLocation(@PathVariable Long locId) throws IOException {
		System.out.println("get Chefs by Loc " + locId);
		return ResponseEntity.ok(chefsr.findByChefLocationId(locId));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllChefs() throws IOException{
		System.out.println("Get all chefs");
		return ResponseEntity.ok(chefsr.getAllChefs());
	}
	
	@GetMapping(value="/sepciality/{spec}")
	public ResponseEntity<?> getChefsBySpeciality(@PathVariable("spec") Speciality chefspec )throws IOException{
		return ResponseEntity.ok(chefsr.getChefsBySpeciality(chefspec));
		
	}
//	@GetMapping(value = "/rating/{rateId}")
//	public ResponseEntity<?> getChefByRatingAndReviews(@PathVariable Long rateId) throws IOException {
//		System.out.println("get Chefs by Loc " + rateId);
//		return ResponseEntity.ok(chefsr.getChefsByRatingAndReviews(rateId));
//	}
	@PostMapping
	public ResponseEntity<?> addNewEmployee(@RequestBody @Valid ChefDTO dto) {
		System.out.println("in add emp " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(chefsr.addNewChef(dto));
	}
	
	@DeleteMapping("{chefId}")
	public ResponseEntity<?> deleteChef(@PathVariable Long chefId) {
		System.out.println("in delete chef " + chefId);
		return ResponseEntity.status(HttpStatus.CREATED).body(chefsr.deleteChef(chefId));
	}
	
	
}
