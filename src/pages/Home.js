

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios.get(
        `http://www.omdbapi.com/?s=movie&apikey=1b457a18` 
      );
      setMovies(result.data.Search); 
    };
    fetchMovies();
  }, []);

  return (
    <div className="home">
      <h2>Trending Movies</h2>
      <div className="movie-grid">
        {movies?.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>  
              <img
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className="movie-info">
                <h3>{movie.Title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
