package com.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
