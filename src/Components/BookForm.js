import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
      }}
    >
      <input
        type="text"
        placeholder="book title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        required
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default NewBookForm;
