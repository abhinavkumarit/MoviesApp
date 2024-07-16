package com.example.MoviesRestApi.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MoviesEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String description;
	private String imgUrl;
	private String bgPoster;
	private double rating;
	private String category;
	private String releaseDate;
	private String language;

		
	
	
	
	public MoviesEntity(int id, String title, String description, String imgUrl, String bgPoster, double rating,
		String category, String releaseDate, String language) {
	super();
	this.id = id;
	this.title = title;
	this.description = description;
	this.imgUrl = imgUrl;
	this.bgPoster = bgPoster;
	this.rating = rating;
	this.category = category;
	this.releaseDate = releaseDate;
	this.language = language;
}





	public MoviesEntity() {
		super();
		// TODO Auto-generated constructor stub
	}





	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getBgPoster() {
		return bgPoster;
	}





	public void setBgPoster(String bgPoster) {
		this.bgPoster = bgPoster;
	}





	public String getLanguage() {
		return language;
	}





	public void setLanguage(String language) {
		this.language = language;
	

	}





	@Override
	public String toString() {
		return "MoviesEntity [id=" + id + ", title=" + title + ", description=" + description + ", imgUrl=" + imgUrl
				+ ", bgPoster=" + bgPoster + ", rating=" + rating + ", category=" + category + ", releaseDate="
				+ releaseDate + ", language=" + language + "]";
	}


	
	
	
	
	
//	private 
}
