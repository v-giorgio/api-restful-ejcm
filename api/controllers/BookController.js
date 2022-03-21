const Books = require("../models/Books");

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

  static async getBookByName(req, res) {
    const { name } = req.params;
    try {
      const book = await Books.findOne({
        where: { title: name },
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
  static async removeAuthorFromBook(req, res) {
    const { bookId } = req.params;
    const removeAuthor = { author_id: 0 };

    try {
      await Books.update(removeAuthor, { where: { id: Number(bookId) } });

      return res.status(204).json({ message: `Autor removido.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async changeBookAuthor(req, res) {
    const { bookId } = req.params;
    const newAuthor = req.body;

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
  static async removeUserBook(req, res) {
    const { bookId } = req.params;
    const removeUser = { user_id: 0 };

    try {
      await Books.update(removeUser, { where: { id: Number(bookId) } });

      return res.status(204).json({ message: `Usuário removido.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async changeUserBook(req, res) {
    const { bookId } = req.params;
    const newUser = req.body;

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
