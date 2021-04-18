module.exports = function(sequelize, dataTypes){
    const alias = "UserProduct"
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            
        },
        id_user: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        id_product: {
            type: dataTypes.INTEGER.UNSIGNED
        }
        
    }

    const config = {
            tableName: "users_products",
            timestamps: false,
            underscored: true
    }

    const UserProduct = sequelize.define(alias, cols, config);

    return UserProduct
}