const { Router } = require("express");

const Validations = require("../services/validations/validations");

const AuthorController = require("../controllers/AuthorController");

const authorRouter = Router();

/* user routes */
authorRouter.get("/authors", AuthorController.getAllAuthors);
authorRouter.get("/authors/:id", AuthorController.getOneAuthor);
authorRouter.post(
  "/authors",
  Validations.validateAuthor(),
  AuthorController.createAuthor
);
authorRouter.put(
  "/authors/:id",
  Validations.validateAuthorUpdate(),
  AuthorController.updateAuthor
);
authorRouter.delete("/authors/:id", AuthorController.deleteAuthor);

/* book-related routes */
authorRouter.get(
  "/authors/:authorId/books",
  AuthorController.getAllAuthorBooks
);
authorRouter.get(
  "/authors/:authorId/book/:bookId",
  AuthorController.getOneAuthorBook
);

module.exports = authorRouter;
