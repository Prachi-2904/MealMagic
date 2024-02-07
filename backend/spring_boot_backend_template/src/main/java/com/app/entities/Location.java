package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.*;

@Entity
@Table(name="location")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Location extends BaseEntity {
		@Column(length=30)
		private String street;
		@Column(length=20)
		private String city;
		@Column(length=20)
		private String state;
		@Column(length=20)
		private String country;
		@Column(length=20,name="zip_code")
		private String zipCode;
}
