const { Router } = require("express");

const UserController = require("../controllers/UserController");

const userRouter = Router();

/* user routes */
userRouter.get("/users", UserController.getAllUsers);
userRouter.get("/users/:id", UserController.getOneUser);
userRouter.post("/users", UserController.createUser);
userRouter.put("/users/:id", UserController.updateUser);
userRouter.delete("/users/:id", UserController.deleteUser);

/* book-related routes */
userRouter.get("/users/:id", UserController.getAllUserBooks);
userRouter.get("/users/:userId/book/:bookId", UserController.getOneUserBook);

module.exports = userRouter;
