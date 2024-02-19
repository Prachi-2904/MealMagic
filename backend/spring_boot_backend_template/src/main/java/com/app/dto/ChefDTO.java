package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.app.entities.Location;
import com.app.entities.RatingAndReviews;
import com.app.entities.Speciality;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ChefDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank
	private String chefName;
	@Email
	private String chefEmail;
	
	@JsonProperty(access = Access.WRITE_ONLY) 
	private String chefPassword;
	
	private byte[] chefImage;
	
	private String imagePath;
	@NotNull
	private String chefContact;
	
	private boolean chefAvailability;
	
	@NotNull
	private int chefExperience;
	
	private int chefAge;
	
	@NotNull
	private Speciality chefSpeciality;
	@JsonProperty(access = Access.WRITE_ONLY) 
	 private RatingAndReviews ratingsAndReviews;
	@JsonProperty(access = Access.WRITE_ONLY) 
	 private Location chefLocation;
}
