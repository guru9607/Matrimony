package com.infosys.matrimony.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "registration")
public class Registration {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long rid;

	@OneToOne(mappedBy = "registration")
	private User user;

	private String userName;
	private String password;
	private String email;


}
