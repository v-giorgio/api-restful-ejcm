const fetch = require("node-fetch-commonjs");

class BookAPIController {
  static getBooks = async (i) => {
    const response = await fetch("http://openlibrary.org/search.json?q=my");
    const listOfBooks = await response.json();

    const book = {
      title: listOfBooks.docs[i].title,
      author: listOfBooks.docs[i].author_name[0],
      editor: listOfBooks.docs[i].publisher[0],
      release_year: listOfBooks.docs[i].publish_year[0],
      user_id: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return book;
  };
}

module.exports = BookAPIController;
