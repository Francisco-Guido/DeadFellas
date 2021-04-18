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
        type: Sequelize.DataTypes.STRING(100)
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        alowNull: true,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        alowNull: true,
    },
      collection_id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        references: {
          model: "collections"
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};