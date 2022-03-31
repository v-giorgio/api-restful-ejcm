const Books = require("../models/Books");

const { validationResult } = require("express-validator");

class BookController {
  /* Book routes */
  static async getAllBooks(req, res) {
    try {
      const books = await Books.findAll();

      return res.status(200).json(books);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneBook(req, res) {
    const { id } = req.params;
    try {
      const book = await Books.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createBook(req, res) {
    const bookData = req.body;

    /* check if book already exists */
    if (
      await Books.findOne({
        where: { title: bookData.title },
      })
    ) {
      return res
        .status(409)
        .json({ message: `O livro ${bookData.title} já foi cadastrado.` });
    }

    /* run validators */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newBook = await Books.create(bookData);

      return res.status(201).json(newBook);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateBook(req, res) {
    const { id } = req.params;
    const bookUpdate = req.body;

    /* run validators */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Books.update(bookUpdate, { where: { id: Number(id) } });

      const bookUpdated = await Books.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(bookUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteBook(req, res) {
    const { id } = req.params;

    try {
      await Books.destroy({ where: { id: Number(id) } });
      return res.status(204).json({ message: `Livro ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /* author-related routes */
  static async changeBookAuthor(req, res) {
    const { bookId } = req.params;
    const newAuthor = req.body.author_id;

    try {
      await Books.update(newAuthor, { where: { id: Number(bookId) } });

      const bookUpdated = await Books.findOne({
        where: { id: Number(bookId) },
      });
      return res.status(200).json(bookUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /* user-related routes */
  static async changeUserBook(req, res) {
    const { bookId } = req.params;
    const newUser = req.body.user_id;

    try {
      await Books.update(newUser, { where: { id: Number(bookId) } });

      const bookUpdated = await Books.findOne({
        where: { id: Number(bookId) },
      });
      return res.status(200).json(bookUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = BookController;
