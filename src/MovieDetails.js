import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const result = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=1b457a18`
      );
      setMovieDetails(result.data);  
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.Title}</h1>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
          <p>{movieDetails.Plot}</p>
          <p>Release Date: {movieDetails.Released}</p>
          <p>Rating: {movieDetails.imdbRating}</p>
          
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetails;
