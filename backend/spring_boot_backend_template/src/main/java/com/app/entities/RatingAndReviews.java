package com.app.entities;

import javax.persistence.*;

import lombok.*;

@Entity
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="rating_and_review")
public class RatingAndReviews extends BaseEntity {
	private int rating;

    @Column(length = 500) 
    private String review;
    
//    @OneToOne(cascade = CascadeType.ALL , fetch=FetchType.LAZY)
//    private Chef chef;
}
