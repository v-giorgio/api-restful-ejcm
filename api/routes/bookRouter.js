const { Router } = require("express");

const Validations = require("../services/validations/validations");

const BookController = require("../controllers/BookController");

const bookRouter = Router();

/* user routes */
bookRouter.get("/books", BookController.getAllBooks);
bookRouter.get("/books/:id", BookController.getOneBook);
bookRouter.post(
  "/books",
  Validations.validateBook(),
  BookController.createBook
);
bookRouter.put(
  "/books/:id",
  Validations.validateBookUpdate(),
  BookController.updateBook
);
bookRouter.delete("/books/:id", BookController.deleteBook);

/* user-related routes */
bookRouter.put("/books/user/:bookId", BookController.changeUserBook);

module.exports = bookRouter;
