const { Router } = require("express");

const Validations = require("../services/validations/validations");

const UserController = require("../controllers/UserController");

const userRouter = Router();

/* user routes */
userRouter.get("/users", UserController.getAllUsers);
userRouter.get("/users/:id", UserController.getOneUser);
userRouter.post(
  "/users",
  Validations.validateUser(),
  UserController.createUser
);
userRouter.put(
  "/users/:id",
  Validations.validateUserUpdate(),
  UserController.updateUser
);
userRouter.delete("/users/:id", UserController.deleteUser);

/* book-related routes */
userRouter.get("/users/:userId/books", UserController.getAllUserBooks);
userRouter.get("/users/:userId/book/:bookId", UserController.getOneUserBook);

module.exports = userRouter;
