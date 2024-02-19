package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
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
		
//		@OneToOne (fetch = FetchType.LAZY)//mandatory , o.w hib throws MappingExc
//		@JoinColumn(name="chef_id")//optional : to specify name of FK col
//		@MapsId//optional BUT reco : to use shared PK between Emp n Address
//		private Chef ;
		
//		 @OneToOne(cascade = CascadeType.ALL ,fetch=FetchType.LAZY)
//		 @JoinColumn(name = "location_id")
//			private Chef chef;	
		
		
}
