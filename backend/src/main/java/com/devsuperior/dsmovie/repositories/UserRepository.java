package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

//Criação do repositório heradando do JPA
public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
	

}

