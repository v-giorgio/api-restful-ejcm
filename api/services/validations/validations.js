const { body } = require("express-validator");

class Validations {
  static validateUser = () => {
    return [
      body("name")
        .exists()
        .withMessage("Nome é obrigatório")
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)"),
      body("email")
        .exists()
        .withMessage("Email é obrigatório")
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)")
        .isEmail()
        .withMessage("Formato de e-mail inválido (ex: exemplo@exemplo)"),
      body("password")
        .exists()
        .withMessage("Senha é obrigatória")
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)"),
      body("birthdate")
        .exists()
        .withMessage("Data de nascimento é obrigatória")
        .isLength({ min: 10, max: 10 })
        .withMessage("Tamanho inválido. Use: 10 dígitos (incluindo -)")
        .isDate()
        .withMessage("Formato de data inválido (ex: 2022-08-08)"),
      body("street")
        .exists()
        .withMessage("Rua é obrigatória")
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)"),
      body("neighborhood")
        .exists()
        .withMessage("Bairro é obrigatório")
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)"),
      body("street_number")
        .exists()
        .withMessage("Número da rua é obrigatório")
        .isNumeric({ min: 1, max: 20 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 20)"),
      body("zipcode")
        .exists()
        .withMessage("CEP é obrigatório")
        .isNumeric({ min: 8, max: 8 })
        .withMessage("Tamanho inválido. Use 8 dígitos"),
    ];
  };

  static validateUserUpdate = () => {
    return [
      body("name")
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)"),
      body("email")
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)")
        .isEmail()
        .withMessage("Formato de e-mail inválido (ex: exemplo@exemplo)"),
      body("password")
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)"),
      body("birthdate")
        .optional()
        .isLength({ min: 10, max: 10 })
        .withMessage("Tamanho inválido. Use: 10 dígitos (incluindo -)")
        .isDate()
        .withMessage("Formato de data inválido (ex: 2022-08-08)"),
      body("street")
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)"),
      body("neighborhood")
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 50)"),
      body("street_number")
        .optional()
        .isNumeric({ min: 1, max: 20 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 20)"),
      body("zipcode")
        .optional()
        .isNumeric({ min: 8, max: 8 })
        .withMessage("Tamanho inválido. Use 8 dígitos"),
    ];
  };

  static validateBook = () => {
    return [
      body("title")
        .exists()
        .withMessage("Título é obrigatório")
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 100)"),
      body("editor")
        .exists()
        .withMessage("Editora é obrigatório")
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 100)"),
      body("release_year")
        .exists()
        .withMessage("Data de lançamento é obrigatória")
        .isLength({ min: 10, max: 10 })
        .withMessage("Tamanho inválido. Use: 10 dígitos (incluindo -)")
        .isDate()
        .withMessage("Formato de data inválido (ex: 2022-08-08)"),
      body("genre")
        .exists()
        .withMessage("Gênero é obrigatório")
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 100)"),
    ];
  };

  static validateBookUpdate = () => {
    return [
      body("title")
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 100)"),
      body("editor")
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 100)"),
      body("release_year")
        .optional()
        .isLength({ min: 10, max: 10 })
        .withMessage("Tamanho inválido. Use: 10 dígitos (incluindo -)")
        .isDate()
        .withMessage("Formato de data inválido (ex: 2022-08-08)"),
      body("genre")
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage("Tamanho inválido. Use: (min. 1, max: 100)"),
    ];
  };
}

module.exports = Validations;
