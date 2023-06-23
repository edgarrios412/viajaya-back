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
    price:{
        type: DataTypes.INTEGER,
    },
  },{timestamps:false});
};
