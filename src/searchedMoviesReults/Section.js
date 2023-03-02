import React from "react";
import SearchedMovieCard from "./SearchedMovieCard";

const Section = ({ movies }) => {
  // const renderMovies = () =>
  //   movies.map((movie) => <div key={movie.id}>${movie.name}</div>);
  const renderMovies = () =>
    movies
      ? movies.map((movie) => (
          <SearchedMovieCard movie={movie} key={movie.id} />
        ))
      : null;
  return <div>{renderMovies()}</div>;
};

export default Section;
