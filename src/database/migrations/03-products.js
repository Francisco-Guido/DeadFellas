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
      photo1:{ 
        type: Sequelize.DataTypes.STRING(100)
      },        
      photo2: {
        type: Sequelize.DataTypes.STRING(100)
      },
      photo3: {
        type: Sequelize.DataTypes.STRING(100)
      },
      photo4: {
        type: Sequelize.DataTypes.STRING(100)
      },
      collection_id: {
          type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          references: {
            model: 'collections',
            key: 'id'
          }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};