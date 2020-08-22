import React from "react";


import BookContextProvider from "../Context/BookContext";
import Navbar from "./NavBar";
import BookList from "./BookList";
import NewBookForm from "./BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <div className="items">
          <BookList />
          <NewBookForm />
        </div>
      </BookContextProvider>
    </div>
  );
}

export default App;
