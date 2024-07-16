// fetch("http://www.omdbapi.com/?t=movies&apikey=f056e2f7&plot=full")
// .then(response => response.json())
// .then(response =>{
//     const randomIndex = Math.floor(Math.random()* response.results.length);

//     const movieTitle = response.results[randomIndex].Title;
//     console.log(movieTitle);
// })

// Rapid Api key:    392d249892mshd7aa6bc34fe2c3dp18427djsn73fb42fe38e0


// fetch("http://www.omdbapi.com/?t=movie&apikey=f056e2f7&plot=full")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data.Response === "True") {
//             const movieTitle = data.Title;
//             console.log(movieTitle);
//         } else {
//             console.log("Movie not found!");
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching movie data:', error);
//     });






// const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '392d249892mshd7aa6bc34fe2c3dp18427djsn73fb42fe38e0',
// 		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr",{
//     "method":"GET",
//     "headers":{
//         "x-rapidapi-host":"imdb8.p.rapidapi.com",
//         'x-rapidapi-key': '392d249892mshd7aa6bc34fe2c3dp18427djsn73fb42fe38e0'
//     }
// })
// .then(response => response.json())
// .then(data=>{
//     // console.log(data);
//     const list =data.d;

//     list.map((item)=>{
//         console.log(item);
//         const name= item.l;
//         const poster=item.i.imageUrl;
//         const Moviesdescription=item.s
//         const MoviesYear=item.y;
//         console.log(name);
//         console.log(poster);

//         // console.log(Movieyear);
//         document.querySelector(".title-info h1").textContent=name;
//         document.querySelector(".title-info-synopsis").textContent=Moviesdescription;
//         document.querySelector(".vote-average").textContent=MoviesYear

//     })
// }) 
// .catch(err=>{
//     console.error(err);
// })


//1
// const rapidApiKey = '392d249892mshd7aa6bc34fe2c3dp18427djsn73fb42fe38e0';
// const omdbApiKey = 'f056e2f7';

// function getRandomMaturity() {
//     const maturityOptions = ['18+', '16+'];
//     const randomIndex = Math.floor(Math.random() * maturityOptions.length);
//     return maturityOptions[randomIndex];
// }


// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
//     method: "GET",
//     headers: {
//         "x-rapidapi-host": "imdb8.p.rapidapi.com",
//         "x-rapidapi-key": rapidApiKey
//     }
// })
// .then(response => response.json())
// .then(data => {
//     const list = data.d;

//     list.forEach(item => {
//         const name = item.l;
//         const poster = item.i.imageUrl;
//         const Moviesdescription = item.s;
//         const MoviesYear = item.y;
//         console.log(poster);
//         // Fetch additional details from OMDB API
//         fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=${omdbApiKey}&plot=full`)
//         .then(response => response.json())
//         .then(omdbData => {
//             const fullDescription = omdbData.Plot;
//             const rating = omdbData.imdbRating;
//             const language=omdbData.Language;

            
//             // console.log(lang);
//             console.log(language.substring(0,2));

//             const maturity = getRandomMaturity();

//             // Update the DOM with combined data
//             document.querySelector(".title-info h1").textContent = name;
//             document.querySelector(".title-info-synopsis").textContent = fullDescription;
//             document.querySelector(".vote-average").textContent = rating;
//             document.querySelector(".language").textContent=language.substring(0,2);
//             document.querySelector(".maturity-number").textContent=maturity;
//             document.querySelector(".movie-year").textContent=MoviesYear
//             document.querySelector(".bg-img").style.backgroundImage=`url(${poster})`;
//             // Add other details like poster and rating if needed
//         })
//         .catch(err => {
//             console.error('Error fetching additional details from OMDB:', err);
//         });

//         console.log(name);
//         console.log(poster);
//     });
// })
// .catch(err => {
//     console.error('Error fetching data from IMDb RapidAPI:', err);
// });


// const rapidApiKey = '392d249892mshd7aa6bc34fe2c3dp18427djsn73fb42fe38e0';
// const omdbApiKey = 'f056e2f7';

// function getRandomMaturity() {
//     const maturityOptions = ['18+', '16+'];
//     const randomIndex = Math.floor(Math.random() * maturityOptions.length);
//     return maturityOptions[randomIndex];
// }

// document.addEventListener("DOMContentLoaded", function() {
//     fetch("https://imdb8.p.rapidapi.com/auto-complete?q=movie", {
//         method: "GET",
//         headers: {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": rapidApiKey
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         const list = data.d;

//         list.forEach(item => {
//             const name = item.l;
//             const poster = item.i.imageUrl;
//             const Moviesdescription = item.s;
//             const MoviesYear = item.y;
//             console.log(poster);

//             // Fetch additional details from OMDB API
//             fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=${omdbApiKey}&plot=full`)
//             .then(response => response.json())
//             .then(omdbData => {
//                 const fullDescription = omdbData.Plot;
//                 const rating = omdbData.imdbRating;
//                 const language = omdbData.Language;

//                 console.log(language.substring(0, 2));

//                 const maturity = getRandomMaturity();

//                 // Update the DOM with combined data
//                 document.querySelector(".title-info h1").textContent = name;
//                 document.querySelector(".title-info-synopsis").textContent = fullDescription;
//                 document.querySelector(".vote-average").textContent = rating;
//                 document.querySelector(".language").textContent = language.substring(0, 2);
//                 document.querySelector(".maturity-number").textContent = maturity;
//                 document.querySelector(".movie-year").textContent = MoviesYear;
//                 document.querySelector(".bg-img").style.backgroundImage = `url(${poster})`;
                
//             })
//             .catch(err => {
//                 console.error('Error fetching additional details from OMDB:', err);
//             });

//             console.log(name);
//             console.log(poster);
//         });
//     })
//     .catch(err => {
//         console.error('Error fetching data from IMDb RapidAPI:', err);
//     });
// });




// const rapidApiKey = '392d249892mshd7aa6bc34fe2c3dp18427djsn73fb42fe38e0';
// const omdbApiKey = 'f056e2f7';

let url="http://localhost:8080/allmovies"

function getRandomMaturity() {
    const maturityOptions = ['18+', '16+'];
    const randomIndex = Math.floor(Math.random() * maturityOptions.length);
    return maturityOptions[randomIndex];
}

        

        fetch(url)
        .then(response => response.json())
        .then(data => {
            // Ensure data is an array
            if (Array.isArray(data)) {
                const randomIndex = Math.floor(Math.random() * data.length);
                const movieTitle = data[randomIndex].title;
                const fullDescription = data[randomIndex].description;
                const poster = data[randomIndex].bgPoster;
                const rating = data[randomIndex].rating;
                const language = data[randomIndex].language;
                const MoviesYear = data[randomIndex].releaseDate;
                const maturity = getRandomMaturity();
    
                // Update the DOM with the retrieved data
                document.querySelector(".title-info h1").textContent = movieTitle;
                document.querySelector(".title-info-synopsis").textContent = fullDescription;
                document.querySelector(".vote-average").textContent = rating;
                document.querySelector(".maturity-number").textContent = maturity;
                document.querySelector(".movie-year").textContent = MoviesYear;
                document.querySelector(".language").textContent = language.substring(0, 2);
                document.querySelector(".bg-img").style.backgroundImage = `url(${poster})`;
    
                // Create and shuffle the carousel
                const imageContainer = document.getElementById("imageContainer");
                const carousel = document.createElement("div");
                carousel.className = "carousel";
                
                
                // Shuffle the movies array
                const shuffledMovies = data.sort(() => 0.5 - Math.random());
    
                // Add shuffled movies to the carousel
                shuffledMovies.forEach(movie => {
                    const img = document.createElement("img");
                    img.src = movie.imgUrl;
                    img.alt = movie.title;
                    img.style.objectFit="cover"
                    img.width=330;
                    img.height=190;
                    // img.className = "carousel-image";
                    carousel.appendChild(img);
                });
    
                // Append the carousel to the image container
                imageContainer.innerHTML=``;
                imageContainer.appendChild(carousel);
    
                console.log(movieTitle);
            } else {
                console.error("Unexpected data format: data is not an array");
            }
        })
        .catch(error => console.log(error));
    
    // Function to get random maturity rating (assuming it's defined somewhere in your code)
    function getRandomMaturity() {
        const maturities = ["G", "PG", "PG-13", "R", "NC-17"];
        return maturities[Math.floor(Math.random() * maturities.length)];
    }
    