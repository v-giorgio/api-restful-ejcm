const Users = require("../models/Users");
const Books = require("../models/Books");

const { validationResult } = require("express-validator");

class UserController {
  /* User routes */
  static async getAllUsers(req, res) {
    try {
      const users = await Users.findAll();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneUser(req, res) {
    const { id } = req.params;
    try {
      const user = await Users.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    const userData = req.body;

    /* check if user already exists */
    if (
      await Users.findOne({
        where: { email: userData.email },
      })
    ) {
      return res
        .status(409)
        .json({ message: `O usuário ${userData.email} já foi cadastrado.` });
    }

    /* run validators */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newUser = await Users.create(userData);

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const userUpdate = req.body;

    /* run validators */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Users.update(userUpdate, { where: { id: Number(id) } });

      const userUpdated = await Users.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(userUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    try {
      await Users.destroy({ where: { id: Number(id) } });
      return res.status(204).json({ message: `Usuário ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /* book-related routes */
  static async getAllUserBooks(req, res) {
    const { userId } = req.params;

    try {
      const allBooks = await Books.findAll({
        where: { user_id: Number(userId) },
      });

      return res.status(200).json(allBooks);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneUserBook(req, res) {
    const { userId, bookId } = req.params;

    try {
      const singleBook = await Books.findOne({
        where: { id: Number(bookId), user_id: Number(userId) },
      });

      return res.status(200).json(singleBook);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;
