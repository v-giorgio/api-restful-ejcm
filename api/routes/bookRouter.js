const { Router } = require("express");

const BookController = require("../controllers/BookController");

const bookRouter = Router();

/* user routes */
bookRouter.get("/books", BookController.getAllBooks);
bookRouter.get("/books/:id", BookController.getOneBook);
bookRouter.get("/books/:name", BookController.getBookByName);
bookRouter.post("/books", BookController.createBook);
bookRouter.put("/books/:id", BookController.updateBook);
bookRouter.delete("/books/:id", BookController.deleteBook);

/* author-related routes */
bookRouter.put("/books/:bookId", BookController.removeAuthorFromBook);
bookRouter.put("/books/:bookId", BookController.changeBookAuthor);

/* user-related routes */
bookRouter.put("/books/:bookId", BookController.removeUserBook);
bookRouter.put("/books/:bookId", BookController.changeUserBook);

module.exports = bookRouter;
