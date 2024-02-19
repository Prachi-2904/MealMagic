package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	public UserServiceImpl() {
		// TODO Auto-generated constructor stub
		System.out.println("in user service implementation ");
	}

	@Autowired
	UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public UserDTO addUser(UserDTO dto) {
		User userentity = mapper.map(dto, User.class);
		User userpersist = userDao.save(userentity);
		return mapper.map(userpersist, UserDTO.class);

	}

	@Override
	public ApiResponse deleteUser(Long userId) {
		User user = userDao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid User id"));
		userDao.delete(user);
		return new ApiResponse("Chef with " + user.getId() + " deleted...");
	}

}
