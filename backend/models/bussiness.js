
module.exports = (sequelize, DataTypes) => {
  const Bussiness = sequelize.define("Bussiness", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  name : {
      type : DataTypes.STRING,
      allowNull: false,
  },

  adresse : {
    type : DataTypes.STRING,
    allowNull: false,
},

description : {
  type : DataTypes.STRING,
  allowNull: false,
},

category : {
  type : DataTypes.STRING,
  allowNull: false,
},

images : {
  type : DataTypes.STRING,
  allowNull: false,
},

hours : {
  type : DataTypes.STRING,
  allowNull: false,
},

phone : {
  type : DataTypes.STRING,
  allowNull: false,
},

zone : {
  type : DataTypes.STRING,
  allowNull: false,
},

    adminID: {
      type: DataTypes.INTEGER,
      references: { model: "Admins", key: "id" }, // Make sure the model name matches
    },
  });

  Bussiness.associate = (models) => {
    Bussiness.hasMany(models.Review, {
      onDelete: "cascade",
    });
    Bussiness.belongsTo(models.Admin, {
      onDelete: "cascade",
    });
  };

  return Bussiness;
};
