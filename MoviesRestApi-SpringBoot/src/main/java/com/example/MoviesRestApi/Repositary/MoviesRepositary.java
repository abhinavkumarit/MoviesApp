package com.example.MoviesRestApi.Repositary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MoviesRestApi.Entity.MoviesEntity;

public interface MoviesRepositary extends JpaRepository<MoviesEntity,Integer> {
		
	
	
	public MoviesEntity findById(int id);

	public List<MoviesEntity> findByTitle(String title);

}
