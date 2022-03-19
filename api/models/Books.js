const { Model, DataTypes } = require("sequelize");

class Books extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        editor: DataTypes.STRING,
        release_year: DataTypes.INTEGER,
        genre: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Books",
      }
    );
  }

  static associate(models) {
    Books.belongsTo(models.Users, {
      foreignKey: "user_id",
    });
    Books.belongsToMany(models.Authors, {
      foreignKey: "author_id",
    });
  }
}

module.exports = Books;
