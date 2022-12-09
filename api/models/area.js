const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Area extends Model {}

  Area.init(
    {
      name: {
        type: DataTypes.STRING(255),
       
      },
      status: {
        type: DataTypes.INTEGER(2),
        defaultValue: 1,
      },
      created_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      created_by: {
        type: DataTypes.STRING(255),
      },
      updated_date: {
        type: DataTypes.DATE,
      },
      updated_by: {
        type: DataTypes.STRING(255),
      },
    },
    {
      modelName: "area",
      timestamps: false,
      sequelize,
    }
  );
  return Area;
};
