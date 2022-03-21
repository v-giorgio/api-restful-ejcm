const { Router } = require("express");

const AuthorController = require("../controllers/AuthorController");

const authorRouter = Router();

/* user routes */
authorRouter.get("/authors", AuthorController.getAllAuthors);
authorRouter.get("/authors/:id", AuthorController.getOneAuthor);
authorRouter.post("/authors", AuthorController.createAuthor);
authorRouter.put("/authors/:id", AuthorController.updateAuthor);
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
