'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: Sequelize.DataTypes.STRING(45),
      },
      description:{
        type: Sequelize.DataTypes.STRING(100),
      },
      price:{
        type: Sequelize.DataTypes.INTEGER(10),
      },
      quantity:{
        type: Sequelize.DataTypes.INTEGER(10),
      },
      images: {
        type: Sequelize.dataTypes.INTEGER(100)
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};