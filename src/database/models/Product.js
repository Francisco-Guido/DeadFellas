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
        photo1: {
            type: dataTypes.STRING(100)
        },
        photo2: {
            type: dataTypes.STRING(100)
        },
        photo3: {
            type: dataTypes.STRING(100)
        },
        photo4: {
            type: dataTypes.STRING(100)
        },
        collection_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            alowNull: false
        }
        
    }

    const config = {
            tableName: "products",
            timestamps: true,
            underscored: true
    }

    const Product = sequelize.define(alias, cols, config);
    
    Product.associate = function(modelos){
        Product.belongsToMany(modelos.Size, {
     as: "sizes",
     through: "products_sizes",
     foreignKey: "product_id",
     otherKey: "size_id",
     timestamps: false
     });
     }
    return Product
}