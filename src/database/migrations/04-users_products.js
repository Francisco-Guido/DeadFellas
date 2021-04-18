'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_products', {
      id:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      id_user:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        references: {
          model: 'users'
        }
      },
      id_product: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        references: {
        model: 'products'
      }
    }
})
},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_products')
  }
};