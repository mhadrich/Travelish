// const {sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Bussiness = sequelize.define("Bussiness", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    images: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hours: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adminID: {
      type: DataTypes.INTEGER,
      references: { model: "admins", key: "id" },
    },
  });

  Bussiness.associate = (Model) => {
    Bussiness.HasMany(Model.Review, {
      onDelete: "cascade",
    });

    Bussiness.associate = (Model) => {
      Bussiness.BelongsTo(Model.Admin, {
        onDelete: "cascade",
      });
    };
  };

  return Bussiness;
};

/*{"name":"4 saison " , "adresse" : "nahj " ,"description":"ahla" , "category":"hotel " , "images":"images" ,"hours":"24hours" , "phone" :"555555" , "zone" : "gamarth" , "adminID":"2"} 
*/