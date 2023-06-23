const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('promo', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    details:{
        type: DataTypes.ENUM("Publicado","No publicado","Archivado"),
    },
  },{timestamps:false});
};
