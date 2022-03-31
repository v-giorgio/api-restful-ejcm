const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        birthdate: DataTypes.DATEONLY,
        street: DataTypes.TEXT,
        neighborhood: DataTypes.STRING,
        street_number: DataTypes.INTEGER,
        zipcode: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }

  static associate(models) {
    Users.hasMany(models.Books);
  }
}

module.exports = Users;
