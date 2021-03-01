module.exports = function(sequelize, dataTypes){
    const alias = "Product_size"
    const cols = {

        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            alowNull: false
            
        },
        size_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            alowNull: false

        },
        product_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            alowNull: false
        }
    }

    const config = {
            tableName: "products_sizes",
            timestamps: true,
            underscored: true
    }

    const Product_size = sequelize.define(alias, cols, config);

    return Product_size
}