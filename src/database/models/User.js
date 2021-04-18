module.exports = function(sequelize, dataTypes){
    const alias = "User"
    const cols = {

        rol:{
            type:dataTypes.INTEGER,
        },
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            
        },
        name: {
           type: dataTypes.STRING(45),
           allowNull: false,
        },
        surname: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),      
            allowNull: false,

        },
        password: {
            type: dataTypes.STRING(225),
            allowNull: false,

        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false,

        },
        created_at: {
            type: dataTypes.DATE,
            alowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            alowNull: true,
        }
        
    }

    const config = {
            tableName: "users",
            timestamps: true,
            underscored: true
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){

        User.belongsToMany(models.Product, {
            as: 'UserProduct',
            through: 'users_products',
            foreignKey: 'id_user',
            otherKey: 'id_product',
            timestamps: false
          });
          
    }

    return User
}