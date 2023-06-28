const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('class', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created:{
      type: DataTypes.STRING
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
  },{timestamps:false});
};
