module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define("Reviews", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    adminID: {
      type: DataTypes.INTEGER,
      references: { model: "admins", key: "id" },
    },
    bussinessID: {
      type: DataTypes.INTEGER,
      references: { model: "bussinesses", key: "id" },
    },
  });

  Reviews.associate = (Model) => {
    Reviews.BelongsTo(Model.Admin, {
      onDelete: "cascade",
    });
    Reviews.associate = (Model) => {
      Reviews.BelongsTo(Model.Bussiness, {
        onDelete: "cascade",
      });
    };
  };
  return Reviews;
};
