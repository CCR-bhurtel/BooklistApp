import React, {
  createContext,
  useState,
  useEffect,
  ComponentLifecycle,
} from "react";
import { v1 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  if (localStorage.getItem("books") == []) {
    localStorage.setItem("books", JSON.stringify({}));
  }

  const [books, setBooks] = useState([
    JSON.parse(localStorage.getItem("books")),
  ]);

  useEffect(() => {
    console.log("hello");
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: v1() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
