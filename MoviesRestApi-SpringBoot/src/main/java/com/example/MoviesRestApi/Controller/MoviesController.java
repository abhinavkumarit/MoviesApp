package com.example.MoviesRestApi.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MoviesRestApi.Entity.MoviesEntity;
import com.example.MoviesRestApi.Service.MoviesService;
//import com.example.bookrestapi.Entity.BooksEntity;

@RestController
@CrossOrigin
public class MoviesController {
	
	
	@Autowired
	public MoviesService moviesService;
	
	@GetMapping("/allmovies")
	public List<MoviesEntity> getAllMovies(){
		return moviesService.getAllMovies();
	}
	
	@GetMapping("/movies/id/{id}")
	public MoviesEntity getMovies(@PathVariable("id") int id) {
		return moviesService.getMoviesById(id);
	}
	
	@GetMapping("/movies/title/{title}")
    public List<MoviesEntity> getMoviesByTitle(@PathVariable("title") String title) {
        return moviesService.getMoviesByTitle(title);
    }
	
	@PostMapping("/movies")
	public MoviesEntity AddNewMovies(@RequestBody MoviesEntity movies) {
		MoviesEntity newMovies= moviesService.AddNewMovies(movies);
		System.out.println(newMovies);
		return newMovies;
	}
	
	
	@PutMapping("movies/{moviesId}")
	public MoviesEntity updateBook(@RequestBody MoviesEntity movies,@PathVariable("moviesId") int moviesId ) {
		this.moviesService.updateBook(movies, moviesId);
		return movies;
	}
	
	@DeleteMapping("/movies/{moviesId}")
	public void deleteBook(@PathVariable("moviesId") int moviesId) {
		this.moviesService.deleteBook(moviesId);
		System.out.println("Deleted");
	}
	
	
}
