package com.app.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.*;

@Entity
@Table(name = "payment")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Payment extends BaseEntity {
	@Column(name = "total_price")
	private double totalPrice;
	// many to one association M Payment -------> 1 Chef
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "chef_id")
	private Chef chef;

//FK (private int bookingId;) Bi directional
	@OneToOne(mappedBy = "payment", cascade = CascadeType.ALL)

	private Booking booking;

}
