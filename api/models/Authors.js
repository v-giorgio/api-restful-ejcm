const { Model, DataTypes } = require("sequelize");

class Authors extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Authors",
      }
    );
  }

  static associate(models) {
    Authors.hasMany(models.Books);
  }
}

module.exports = Authors;
