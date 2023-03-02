import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
const DropDownList = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const markAsWatched = () => {
    const watched = localStorage.getItem("watched");
    if (watched == null) localStorage.setItem("watched", id);
    else localStorage.setItem("watched", id + "," + watched);
  };
  const addtolikedList = () => {
    const liked = localStorage.getItem("wishlist");
    if (liked == null) localStorage.setItem("wishlist", id);
    else localStorage.setItem("wishlist", id + "," + liked);
  };

  return (
    <div onClick={handleOpen} className={"dropdownlist"}>
      ...
      {open && (
        <>
          <div onClick={markAsWatched}>Watched</div>
          <div onClick={addtolikedList}> Like </div>
        </>
      )}
    </div>
  );
};

export default DropDownList;
