'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_sizes', {
      id:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      size_id:{
        type: Sequelize.dataTypes.INTEGER(10).UNSIGNED,
        alowNull: false
    },
    product_id: {
        type: Sequelize.dataTypes.INTEGER(10).UNSIGNED,
        alowNull: false
    },
})
},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_sizes')
  }
};