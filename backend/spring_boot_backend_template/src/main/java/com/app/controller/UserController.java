package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "https://localhost:3000")
@Controller
public class UserController {
	@Autowired
	private UserService users;

	public UserController() {
		// TODO Auto-generated constructor stub
		System.out.println("In User Controller ");
	}

	// 1. add new user
	// http://host:port/employees , method=POST
	@PostMapping
	public ResponseEntity<?> addUser(@RequestBody @Valid UserDTO dto) {
		System.out.println("In add user " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(users.addUser(dto));
	}

	// 2. delete emp details
	// http://host:port/users/{userId} , method=DELETE

	@DeleteMapping("{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
		System.out.println("In del user" + userId);
		return ResponseEntity.ok(users.deleteUser(userId));

	}

}
