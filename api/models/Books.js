const { Model, DataTypes } = require("sequelize");

class Books extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        editor: DataTypes.STRING,
        author: DataTypes.STRING,
        release_year: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Books",
      }
    );
  }

  static associate(models) {
    Books.belongsTo(models.Users);
  }
}

module.exports = Books;
