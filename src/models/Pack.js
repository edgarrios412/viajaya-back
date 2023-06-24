const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('pack', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lng: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price:{
        type: DataTypes.INTEGER,
    },
  },{timestamps:false});
};
