import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/MovieSlice";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);
  let renderMovies = "";
  let renderShows = "";
  if (movies.Response === "True") {
    renderMovies = movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    });
  } else {
    renderMovies = (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
  }
  if (shows.Response === "True") {
    renderShows = shows.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    });
  } else {
    renderShows = (
      <div className="movies-error">
        <h3>{shows.error}</h3>
      </div>
    );
  }
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
