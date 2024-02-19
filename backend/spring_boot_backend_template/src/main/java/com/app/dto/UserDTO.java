package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;

import com.app.entities.mealType;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank
	private String userName;
	@Email
	private String userEmail;
	@NotBlank
	private String userCity;
	@PastOrPresent
	@JsonProperty(access = Access.READ_ONLY)
	private LocalDate userJoinDt;
	@JsonProperty(access = Access.READ_ONLY)
	private String userPassword;
	@NotNull
	@Enumerated
	private mealType meal;

	

}
