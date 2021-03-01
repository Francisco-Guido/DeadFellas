module.exports = function(sequelize, dataTypes){
    const alias = "Collection"
    const cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            alowNull: false
            
        },
        name: {
           type: dataTypes.STRING(45),
           allowNull:false

        }
        
    }

    const config = {
            tableName: "collections",
            timestamps: true,
            underscored: true
    }

    const Collection = sequelize.define(alias, cols, config);

    return Collection
}