module.exports = function(sequelize, dataTypes){
    const alias = "Size"
    const cols = {

        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            alowNull: false
            
        },
        name: {
           type: dataTypes.STRING(45),

        }
    }

    const config = {
            tableName: "sizes",
            timestamps: true,
            underscored: true
    }

    const Size = sequelize.define(alias, cols, config);

    Size.associate = function(modelos){
        Size.belongsToMany(modelos.Product, {
     as: "products",
     through: "products_sizes",
     foreignKey: "product_id",
     otherKey: "id",
     timestamps: false
     });
     }
     
    return Size
}