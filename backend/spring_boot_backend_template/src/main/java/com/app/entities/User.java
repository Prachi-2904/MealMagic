package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.*;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
// user class
public class User extends BaseEntity {

    @Column(length = 20, name = "user_name")
    private String userName;

    @Column(length = 30, name = "user_email")
    private String userEmail;

    @Column(length = 10, name = "user_contact")
    private String userContact;

    @Column(name = "user_city")
    private String userCity;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate userJoinDt;

    private double userBudget;

    @Column(name = "user_password") // Assuming it's a password field
    private String userPassword;

    @Enumerated
    @Column(name="meal_type")
    private mealType meal;

    // Unidirectional one-to-many relationship: User to Booking
    @ElementCollection
       @JoinColumn(name = "user_id")
    private List<Booking> bookings = new ArrayList<>();
	// as per Gavin King's IMPORTANT suggestion add helper methods to add/remove
	// child
	public void addBooking(Booking b) {
		bookings.add(b);// user --> booking
		b.setUser(this);// booking-->user
	}
	public void deleteBooking(Booking b) {
		bookings.remove(b);
		b.setUser(null);
	}

    public User(String userName, String userEmail, String userContact, String userCity, double userBudget,
            List<Booking> bookings) {
        super();
        this.userName = userName;
        this.userEmail = userEmail;
        this.userContact = userContact;
        this.userCity = userCity;
        this.userBudget = userBudget;
        this.bookings = bookings;
    }
}
