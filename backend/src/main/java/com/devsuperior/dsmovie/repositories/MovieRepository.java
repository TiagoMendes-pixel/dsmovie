package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;

//Criação do repositório heradando do JPA
public interface MovieRepository extends JpaRepository<Movie, Long>{
	
	

}
