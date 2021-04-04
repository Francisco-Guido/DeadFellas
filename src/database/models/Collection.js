module.exports = function(sequelize, dataTypes){
    const alias = "Collection"
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
        
    }

    const config = {
            tableName: "collections",   
            timestamps: true,
            underscored: true
    }

    const Collection = sequelize.define(alias, cols, config);
    Collection.associate = function(modelos){
        Collection.hasMany(modelos.Product, {
        as: "Product",
        foreignKey: "collection_id",
     })
    }
    return Collection;
}   