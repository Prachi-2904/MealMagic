package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;

public interface UserService {
	
	UserDTO addUser(UserDTO dto);
	
	ApiResponse deleteUser(Long userId);
	
}
