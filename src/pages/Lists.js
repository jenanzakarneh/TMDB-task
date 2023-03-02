import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchedMovieCard from "../searchedMoviesReults/SearchedMovieCard";
import { API_KEY, API_URL } from "../utility";
const watched = localStorage.getItem("watched").split(",");
const wishlist = localStorage.getItem("wishlist").split(",");

const Lists = () => {
  const [movie, setMovie] = useState({});
  const [wishlistObjects, setWishlistObjects] = useState([]);
  const [watchedObjects, setWatchedOjects] = useState([]);
  const watchedRef = useRef();
  const fetchMovie = (id, st, setSt) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        st.push(result); //infinte times when do this setItems(result)
      })
      .catch((error) => console.log("error", error));
    setSt(st);
  };
  const fetchObjects = (arr, st, setSt) => {
    arr.forEach((id) => fetchMovie(id, st, setSt));
  };
  const updateObjects = () => {
    fetchObjects(watched, watchedObjects, setWatchedOjects);
    fetchObjects(wishlist, wishlistObjects, setWishlistObjects);
  };
  useEffect(() => {
    updateObjects();
  }, []);
  return (
    <div wi>
      <Header />
      <Flex direction={"column"} width={"40%"}>
        <h2>watched</h2>
        {watchedObjects?.map((s) => (
          <SearchedMovieCard key={s.id} movie={s} />
        ))}
      </Flex>
      <Flex direction={"column"} width={"40%"}>
        <h2>wishlist</h2>
        {wishlistObjects?.map((s) => (
          <SearchedMovieCard key={s.id} movie={s} />
        ))}
      </Flex>
      <Footer />
    </div>
  );
};

export default Lists;
