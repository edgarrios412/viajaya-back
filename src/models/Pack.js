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
    status:{
      type: DataTypes.BOOLEAN,
      defaultValue: "true"
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created:{
      type:DataTypes.STRING,
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
    images:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    }
  },{timestamps:false});
};
