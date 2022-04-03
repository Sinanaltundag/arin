import {useState, useEffect} from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

const App =() =>{

const data= {
  "movies": [
    {
      "id": 1,
      "name": "The Flash",
      "rating": 8.3,
      "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
      "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
    },
    {
      "id": 2,
      "name": "Interstellar",
      "rating": 6.8,
      "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
      "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    }
  ]
} 

  let {movies, setMovies}= useState(data.movies)
  let {searchQuery, setSearchQuery}= useState("") 
  

 


   const deleteMovie = (movie) => {
        const newMovieList = movies.filter(
            m => m.id !== movie.id
        );

/*         this.setState ({
            movies: newMovieList
        }) */

        setMovies(newMovieList)
    }

    const searchMovie = (event) => {
        //console.log(event.target.value)
        this.setState({searchQuery: event.target.value })
    }

   console.log(movies)

        let filteredMovies = movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={searchMovie} />
                    </div>
                </div>

                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={deleteMovie} />
            </div>
        )

    


}

export default App;