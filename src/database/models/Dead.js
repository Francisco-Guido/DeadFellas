module.exports = function (sequelize, dataTypes){
    let alias = "dead_Fellas"

    let cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true, 
            primaryKey: true,
            
        },
        name: {
           type: dataTypes.STRING(45),
           notNull: true,
        },
        surname: {
            type: dataTypes.STRING(45),
            
        },
        email: {
            type: dataTypes.STRING(45),
            notNull: true,

        },
        password: {
            type: dataTypes.STRING(225),
            notNull: true,

        },
        repassword: {
            type: dataTypes.STRING(225),
            
        }
        
    }

    let config = {
            tableName: 'users_df',
            timestamps: true,
            underscored: true,
    }

    const Dead = sequelize.define (alias, cols, config);

    return Dead
}