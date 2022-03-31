const { Model, DataTypes } = require("sequelize");

class Books extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        editor: DataTypes.STRING,
        release_year: DataTypes.DATEONLY,
        genre: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Books",
      }
    );
  }

  static associate(models) {
    Books.belongsTo(models.Users);
    Books.belongsToMany(models.Authors);
  }
}

module.exports = Books;
