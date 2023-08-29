module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Admin.associate = (models) => {
    Admin.hasMany(models.Bussiness, {
      onDelete: "cascade",
    });
    Admin.hasMany(models.Review, {
      onDelete: "cascade",
    });
  };

  return Admin;
};
