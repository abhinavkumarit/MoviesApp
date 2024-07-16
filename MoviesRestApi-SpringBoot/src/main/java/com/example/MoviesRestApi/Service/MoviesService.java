package com.example.MoviesRestApi.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.MoviesRestApi.Entity.MoviesEntity;
import com.example.MoviesRestApi.Repositary.MoviesRepositary;


@RestController
public class MoviesService {
	
	
	public static List<MoviesEntity>list=new ArrayList<>();
	
	@Autowired
	public MoviesRepositary moviesRepositary;
	
	public List<MoviesEntity> getAllMovies(){
	List<MoviesEntity>Allmovies	=(List<MoviesEntity>)this.moviesRepositary.findAll();
	return Allmovies;
	}
	
	
		
	public MoviesEntity AddNewMovies(MoviesEntity movies) {
		return moviesRepositary.save(movies);
	}


	public MoviesEntity getMoviesById(int id) {
			MoviesEntity movies=null;
		movies=this.moviesRepositary.findById(id);
		return movies;
	}
	
	public List<MoviesEntity> getMoviesByTitle(String title) {

		return moviesRepositary.findByTitle(title);
    }



	public void updateBook(MoviesEntity movies, int moviesId) {
		// TODO Auto-generated method stub
		movies.setId(moviesId);
		moviesRepositary.save(movies);
		
		
	}



	public void deleteBook(int moviesId) {
		// TODO Auto-generated method stub
		moviesRepositary.deleteById(moviesId);
		
	}
	
	
}
