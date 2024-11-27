import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Search() {
     const [movies, setMovies] = useState([]);
    const movie_name = useSelector((state) => state.search.value);
    console.log(movie_name);
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";
    //https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${mov
// ie_name}&page=1
    const fetchSearchMovie = async (movie_name) => {
      try {
        let res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1`
        );

        console.log(res.data.results);
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchSearchMovie(movie_name);
    }, [movie_name]);
  return (
    <div className="container mb-5 mt-3">
      <h1 className="h1">Popular Movies</h1>
      <div className="row mb-3 mt-3">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => {
            return (
              <div className="col-xl-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="img-fluid image"
                />
                <h4 className="h4"> {movie.title} </h4>
                <p className="p">
                  Rating:<strong>{movie.vote_average}</strong>{" "}
                </p>
              </div>
            );
          })}
      </div>
      {/* {movies.length > 0 && (
        <div className="pagination ">
          <button className="btn btn-outline-danger" onClick={handlePre}>
            Previous
          </button>
          <button className="btn btn-outline-danger">{page}</button>
          <button className="btn btn-outline-danger" onClick={handleNext}>
            Next
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Search