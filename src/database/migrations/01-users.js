'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      rol:{
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      name:{
        type: Sequelize.DataTypes.STRING(45),
        allowNull:false
      },
      surname:{
        type: Sequelize.DataTypes.STRING(45),
        allowNull:false
      },
      email:{
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false,
      },
      password:{
        type: Sequelize.DataTypes.STRING(225),
        allowNull: false
      },
      avatar: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      created_at: {
          type: Sequelize.DataTypes.DATE,
          alowNull: true,
      },
      updated_at: {
          type: Sequelize.DataTypes.DATE,
          alowNull: true
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};