module.exports = function(sequelize, dataTypes){
    const alias = "Product"
    const cols = {

        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            alowNull: false
            
        },
        name: {
           type: dataTypes.STRING(45),

        },
        description: {
            type: dataTypes.STRING(100),
        },
        price: {
            type: dataTypes.INTEGER(10)
        },
        quantity: {
            type: dataTypes.INTEGER(10)

        },
        images: {
            type: dataTypes.INTEGER(100)

        },
        collection_id: {
            type: dataTypes.INTEGER(10),
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
            tableName: "products",
            underscored: true,
            timestamps: true,
    }

    const Product = sequelize.define(alias, cols, config);
    
     Product.associate = function(modelos){
        Product.belongsTo(modelos.Collection, {
        as: "collections",
        foreignKey: "collection_id",
     });

        Product.belongsToMany(modelos.User, {
            as: 'Product',
            through: 'users_products',
            foreignKey: 'id_product',
            otherKey: 'id_user',
            timestamps: false
          });
          
    
     } 
    return Product
}