const Authors = require("../models/Authors");
const Books = require("../models/Books");

const { validationResult } = require("express-validator");

class AuthorController {
  /* Author routes */
  static async getAllAuthors(req, res) {
    try {
      const authors = await Authors.findAll();

      return res.status(200).json(authors);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneAuthor(req, res) {
    const { id } = req.params;
    try {
      const author = await Authors.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(author);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createAuthor(req, res) {
    const authorData = req.body;

    /* check if author already exists */
    if (
      await Authors.findOne({
        where: { name: authorData.name },
      })
    ) {
      return res
        .status(409)
        .json({ message: `O autor ${authorData.name} já foi cadastrado.` });
    }

    /* run validators */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newAuthor = await Authors.create(authorData);

      return res.status(201).json(newAuthor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateAuthor(req, res) {
    const { id } = req.params;
    const authorUpdate = req.body;

    /* run validators */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Authors.update(authorUpdate, { where: { id: Number(id) } });

      const authorUpdated = await Authors.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(authorUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteAuthor(req, res) {
    const { id } = req.params;

    try {
      await Authors.destroy({ where: { id: Number(id) } });
      return res.status(204).json({ message: `Autor ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /* author's books routes */
  static async getAllAuthorBooks(req, res) {
    const { authorId } = req.params;

    try {
      const allBooks = await Books.findAll({
        where: { author_id: Number(authorId) },
      });

      return res.status(200).json(allBooks);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getOneAuthorBook(req, res) {
    const { authorId, bookId } = req.params;

    try {
      const book = await Books.findOne({
        where: { id: Number(bookId), author_id: Number(authorId) },
      });

      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AuthorController;
