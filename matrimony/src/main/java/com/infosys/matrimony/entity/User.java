package com.infosys.matrimony.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_info")
public class User {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;

	@OneToOne
	@JoinColumn(name="rid")
	private Registration registration;

	private String firstName;
	private String lasttName;
    private Integer age;
	// private String address;
	// private int noOfGuests;
	// private String gender;
	// private String  dateOfFunction;
	// private String mobileNum;
}
