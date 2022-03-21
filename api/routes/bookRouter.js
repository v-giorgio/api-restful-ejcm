const { Router } = require("express");

const BookController = require("../controllers/BookController");

const bookRouter = Router();

/* user routes */
bookRouter.get("/books", BookController.getAllBooks);
bookRouter.get("/books/:id", BookController.getOneBook);
bookRouter.post("/books", BookController.createBook);
bookRouter.put("/books/:id", BookController.updateBook);
bookRouter.delete("/books/:id", BookController.deleteBook);

/* author-related routes */
bookRouter.put("/books/author/:bookId", BookController.changeBookAuthor);

/* user-related routes */
bookRouter.put("/books/user/:bookId", BookController.changeUserBook);

module.exports = bookRouter;
