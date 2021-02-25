module.exports = function(sequelize, dataTypes){
    const alias = "Dead"
    const cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            
        },
        name: {
           type: dataTypes.STRING(45),
           alowNull: true,
        },
        surname: {
            type: dataTypes.STRING(45),
            
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: true,

        },
        password: {
            type: dataTypes.STRING(225),
            allowNull: true,

        },
        repassword: {
            type: dataTypes.STRING(225),
            
        }
        
    }

    const config = {
            tableName: "users_df",
            timestamps: true,
    }

    const Dead = sequelize.define(alias, cols, config);

    return Dead
}