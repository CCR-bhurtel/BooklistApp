import React, { useContext } from "react";

import { BookContext } from "../Context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1> Reading Lists</h1>
      <p>Currenty you have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
