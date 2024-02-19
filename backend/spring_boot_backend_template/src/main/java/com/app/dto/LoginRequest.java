package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginRequest {

	@NotBlank(message="email cannot be blank")
	@Email(message="Invalid email format")
	private String email;
	
	@Length(min = 6,max=20,message = "Invalid password length")
	private String password;
}
