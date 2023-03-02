import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import SearchedMovieCard from "../searchedMoviesReults/SearchedMovieCard";
import Section from "../searchedMoviesReults/Section";
import PopularCard from "../components/popularSection/PopularCard";
import Filter from "../components/Filter";
import { API_KEY, API_URL } from "../utility";
const Search = () => {
  const [movies, setMovies] = useState();
  const { query } = useParams();
  const [filter, setFilter] = useState({});
  const [movieDetails, setMovieDetail] = useState({});
  const searchMovies = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${API_URL}/search/movie?query=${query}&api_key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    searchMovies();
  }, []);
  const fetchMovieDetails = (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setMovieDetail(result);
      })
      .catch((error) => console.log("error", error));
  };
  const bringFilterFromChild = (f) => {
    console.log("filters from my child = ", f);
    setFilter(f);
  };
  //const [f, setf] = useState([]);
  const filterSearchResult = () => {
    // console.log("movies before filter", movies);
    const moviesByGenre = movies.filter((movie) =>
      filterByGenre(filter.genre, movie)
    );

    console.log("movies by genre : ", moviesByGenre);
  };

  const filterByGenre = (myGneres, movie) => {
    fetchMovieDetails(movie.id);

    let movieGenres = movieDetails.genres;
    //   console.log("myyyy genressss", filter);
    for (let i = 0; i < myGneres?.lenght; i++) {
      for (let j = 0; i < movieGenres?.lenght; j++)
        if (myGneres[i] == movieGenres[j].name) return true;
    }
    return false;
  };

  const filterByYear = (myYears, release_date) => {
    const year = release_date.slice(0, 4);
    for (let i = 0; i < myYears.lenght; i++)
      if (myYears[i] == year) return true;
    return false;
  };
  const filterByRating = (myRatings, vote_average) => {
    const rating = Math.round(vote_average);

    for (let i = 0; i < myRatings.lenght; i++)
      if (myRatings[i] == rating) return true;
    return false;
  };
  const renderMovies = () =>
    movies?.map((movie) => <SearchedMovieCard key={movie.id} movie={movie} />);
  return (
    <Flex direction={"column"}>
      <Header />
      <Filter
        sendMyFilterToParent={bringFilterFromChild}
        onClickFunction={filterSearchResult}
      />
      {movies && renderMovies()}
      {/* <Section movies={movies} /> */}
      <Footer />
    </Flex>
  );
};
export default Search;
