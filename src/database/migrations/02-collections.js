'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('collections', {
      id:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      name:{
        type: Sequelize.DataTypes.STRING(45),
        allowNull:false
    },
})
},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('collections')
  }
};