module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    comments : {
      type : DataTypes.STRING,
      allowNull: false,
    } , 

rating : {
      type : DataTypes.STRING,
      allowNull: false,
    } , 
    
    adminID: {
      type: DataTypes.INTEGER,
      references: { model: "Admins", key: "id" }, // Make sure the model name matches
    },
    bussinessID: {
      type: DataTypes.INTEGER,
      references: { model: "Bussinesses", key: "id" }, // Make sure the model name matches
    },
  });

  Review.associate = (models) => {
    Review.belongsTo(models.Admin, {
      onDelete: "cascade",
    });
    Review.belongsTo(models.Bussiness, {
      onDelete: "cascade",
    });
  };

  return Review;
};

