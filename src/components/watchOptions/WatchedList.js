import { Button } from "@chakra-ui/react";
import React, { useRef } from "react";

const WatchedList = ({ id, title, poster_path }) => {
  const watched = useRef([]);
  const addToWatchedList = () => {
    watched.current = watched.current + " " + title;
    console.log(watched.current);
  };
  return <Button onClick={addToWatchedList}>Add to wishlist</Button>;
};

export default WatchedList;
