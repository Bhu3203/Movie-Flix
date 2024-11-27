import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UpcomingMovies() {
  const [upmovies, setUpmovies] = useState([])
    const [page, setPage] = useState(1);
   const Api_key = "c45a857c193f6302f2b5061c3b85e743";

   const fetchUpcomingMovies = () => {
     axios
       .get(
        //  `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
           `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
       )
       .then((response) => {
         console.log(response.data.results);
         setUpmovies(response.data.results);
       })
       .catch((error) => {
         console.log(error);
       });
  };
   const handlePre = () => {
     if (page > 1) {
       setPage(page - 1);
       window.scrollTo(0,0)
     }
   };
   const handleNext = () => {
     setPage(page + 1);
     window.scrollTo(0, 0);
   };
   useEffect(() => {
     fetchUpcomingMovies();
   }, [page]);
  return (
    <>
      <div className="container">
        <div className="row">
          {upmovies &&
            upmovies.length > 0 &&
            upmovies.map((movie) => {
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
        {upmovies.length > 0 && (
          <div className="pagination ">
            <button className="btn btn-outline-danger" onClick={handlePre}>
              Previous
            </button>
            <button className="btn btn-outline-danger">{page}</button>
            <button className="btn btn-outline-danger" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
